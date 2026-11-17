import { useState, useEffect, useRef } from "react";
import avatar from "../assets/about-photo.jpeg";

const API_URL = import.meta.env.VITE_CHAT_API_URL;
const MAX_QUESTIONS = 5;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! Ask me anything about Yashika's projects, skills or co-op goals.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [asked, setAsked] = useState(0);
  const bottomRef = useRef(null);

  
  useEffect(() => {
    if (open) {
      fetch(`${API_URL}/health`).catch(() => {});
    }
  }, [open]);

  
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const left = MAX_QUESTIONS - asked;

  async function handleSubmit(e) {
    e.preventDefault();
    const question = input.trim();
    if (!question || loading || left <= 0) return;

    setMessages((m) => [...m, { role: "user", text: question }]);
    setInput("");
    setLoading(true);
    setAsked((a) => a + 1);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(
          typeof data.detail === "string"
            ? data.detail
            : "Please try a shorter question."
        );
      }
      setMessages((m) => [...m, { role: "bot", text: data.answer }]);
    } catch (err) {
      const text =
        err.message === "Failed to fetch"
          ? "I couldn't reach the server. Please try again in a moment, or use the Contact section."
          : err.message;
      setMessages((m) => [...m, { role: "bot", text }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[32rem] w-[22rem] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f] shadow-2xl">
          
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <img
              src={avatar}
              alt="Yashika"
              className="h-9 w-9 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-100">Ask about Yashika</p>
              <p className="text-xs text-gray-400">
                {left > 0 ? `${left} questions left` : "No questions left"}
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-peach"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto w-fit max-w-[85%] rounded-lg bg-peach/20 px-3 py-2 text-sm text-gray-100"
                    : "w-fit max-w-[85%] rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-200"
                }
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="flex w-fit gap-1 rounded-lg bg-white/5 px-3 py-3">
                {[0, 150, 300].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400"
                    style={{ animationDelay: `${d}ms` }}
                  />
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          
          <form
            onSubmit={handleSubmit}
            className="flex gap-2 border-t border-white/10 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={300}
              disabled={left <= 0}
              placeholder={left > 0 ? "Ask a question..." : "Limit reached. See Contact"}
              className="flex-1 rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-100 outline-none placeholder:text-gray-500 focus:border-peach/40"
            />
            <button
              type="submit"
              disabled={loading || left <= 0}
              className="rounded bg-peach px-3 py-2 text-sm font-medium text-black disabled:opacity-40"
            >
              Send
            </button>
          </form>
        </div>
      )}

      
      <button
        onClick={() => setOpen(!open)}
        className="h-14 w-14 overflow-hidden rounded-full border-2 border-peach/60 shadow-lg transition hover:scale-105"
        aria-label="Open chat"
      >
        <img src={avatar} alt="" className="h-full w-full object-cover" />
      </button>
    </div>
  );
}