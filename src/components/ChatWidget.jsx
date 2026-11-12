import { useState } from "react";
import avatar from "../assets/about-photo.jpeg";

export const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="h-72 w-72 rounded-2xl border border-white/15 bg-[#0d0b0c]/95 p-4 text-sm text-gray-100">
          Chat panel (we'll fill this in next)
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Ask about Yashika"
        className="h-14 w-14 rounded-full ring-2 ring-blush/60 shadow-[0_8px_30px_rgba(244,184,176,0.35)] transition hover:scale-105"
      >
        <img
          src={avatar}
          alt=""
          className="h-full w-full rounded-full object-cover object-[50%_12%]"
        />
      </button>
    </div>
  );
};