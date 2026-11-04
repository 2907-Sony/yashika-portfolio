import { useRef, useState } from "react";
import { ReviewOnScroll } from "../ReviewOnScroll";
import { FiGithub } from "react-icons/fi";


const featured = [
  {
    title: "Customer Churn Predictor",
    visual: "churn",
    description:
      "Predicts which telecom customers are likely to cancel, with a risk level and probability. A Random Forest model (78% accuracy) trained on 7,000+ records is served through FastAPI, with a React dashboard for analytics.",
    tech: ["Python", "scikit-learn", "Pandas", "FastAPI", "React"],
    links: {
      github: "https://github.com/2907-Sony/churn-predictor",
      demo: "https://churn-predictor-ho8w.vercel.app",
    },
  },
  {
    title: "RAG Chatbot",
    visual: "rag",
    description:
      "Upload any PDF and ask questions about it. LangChain and ChromaDB retrieve the most relevant sections, and Gemini answers only from your document, saying “I don’t know” when the answer isn’t there.",
    tech: ["LangChain", "ChromaDB", "Gemini API", "FastAPI", "React"],
    links: {
      github: "https://github.com/2907-Sony/rag-chatbot",
      demo: "https://rag-chatbot-nine-eta.vercel.app",
    },
  },
  {
    title: "Receipt Scanner",
    visual: "receipt",
    description:
      "Turns a receipt photo into structured data: store, date, total and items. Tesseract OCR reads the text, a custom-trained spaCy NER model parses the fields, and results are saved to PostgreSQL.",
    tech: ["Tesseract OCR", "spaCy NER", "FastAPI", "PostgreSQL", "Docker", "React"],
    links: {
      github: "https://github.com/2907-Sony/receipt-scanner",
      demo: "https://receipt-scanner-three-eta.vercel.app",
    },
  },
];


const otherProjects = [
  {
    title: "Driver Monitor System",
    badge: "Capstone",
    description: "Team capstone project: a real-time driver monitoring dashboard built with React, Node.js and Firebase, with live data updates.",
    tech: ["React", "Node.js", "Firebase"],
    github: "https://github.com/johannTom/Group2F25",
  },
  {
    title: "Keeper",
    badge: "Web3",
    description:
      "A decentralized notes app on the Internet Computer blockchain, with a Motoko backend that stores notes on-chain.",
    tech: ["React", "Motoko"],
    github: "https://github.com/2907-Sony/Keeper",
  },
];


const Visual = ({ kind }) => {
  const frame =
    "relative h-40 rounded-xl overflow-hidden flex items-center justify-center";

  if (kind === "churn") {
    return (
      <div className={`${frame} bg-gradient-to-br from-[#2b1d20] to-[#4b3132]`}>
        <div className="w-[78%] rounded-lg border border-white/15 bg-white/10 p-3 backdrop-blur-sm">
          <div className="text-[10px] text-blush-light">Churn risk</div>
          <div className="my-2 h-2 rounded-full bg-white/15">
            <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-blush to-peach" />
          </div>
          <div className="mt-3 flex h-9 items-end gap-1.5">
            {[40, 70, 55, 90, 35].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t bg-white/25"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (kind === "rag") {
    return (
      <div className={`${frame} bg-gradient-to-br from-[#1c1038] to-[#3b1d6e]`}>
        <div className="w-[78%] rounded-lg border border-white/15 bg-white/10 p-3 backdrop-blur-sm">
          <div className="ml-auto max-w-[85%] rounded-xl bg-blush/40 px-3 py-1.5 text-[10px]">
            What does the document say?
          </div>
          <div className="mt-2 max-w-[85%] rounded-xl bg-white/15 px-3 py-2">
            <div className="h-1.5 w-[95%] rounded-full bg-white/30" />
            <div className="mt-1.5 h-1.5 w-[70%] rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${frame} bg-gradient-to-br from-[#0b2a22] to-[#12503f]`}>
      <div className="w-[46%] bg-stone-100 px-2.5 pt-2.5 pb-4 text-[8px] text-neutral-900 [clip-path:polygon(0_0,100%_0,100%_94%,92%_100%,84%_94%,76%_100%,68%_94%,60%_100%,52%_94%,44%_100%,36%_94%,28%_100%,20%_94%,12%_100%,4%_94%,0_100%)]">
        <div className="font-bold">STORE</div>
        <div className="my-1.5 h-1 rounded bg-neutral-300" />
        <div className="my-1.5 h-1 w-[70%] rounded bg-neutral-300" />
        <div className="my-1.5 h-1 rounded bg-neutral-300" />
        <div className="mt-2 flex justify-between font-bold">
          <span>TOTAL</span>
          <span>$$</span>
        </div>
      </div>
      <div className="scan-line absolute left-[27%] right-[27%] h-0.5 bg-peach shadow-[0_0_12px_#f6cfae]" />
    </div>
  );
};

const Chip = ({ children }) => (
  <span className="inline-block cursor-default rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-gray-300 ring-1 ring-white/10 transition-colors duration-200 hover:bg-peach/15 hover:text-peach hover:ring-peach/40">
    {children}
  </span>
);

export const Projects = () => {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / featured.length;
    setActive(Math.min(featured.length - 1, Math.round(el.scrollLeft / cardWidth)));
  };

  return (
    <section id="projects" className="min-h-screen py-20">
      <ReviewOnScroll>
        <div className="mx-auto w-full max-w-5xl px-4">
          <h2 className="mb-2 text-center text-3xl font-bold bg-gradient-to-r from-blush to-peach bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="mb-8 text-center text-sm text-gray-400">
            Three ML-powered apps, each built end to end and deployed live, from data to model to production.
          </p>

        
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0"
          >
            {featured.map((p) => (
              <article
                key={p.title}
                className="group flex w-[84%] shrink-0 snap-center flex-col rounded-2xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blush/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.55)] md:w-auto"
              >
                <div className="relative">
                  <Visual kind={p.visual} />
                  <span className="absolute right-2.5 top-2.5 whitespace-nowrap rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-green-300 ring-1 ring-green-400/40 backdrop-blur-sm">
                    ● Live
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-2 pt-4 pb-2">
                  <h3 className="text-lg font-bold leading-snug md:min-h-[3.1rem] lg:min-h-0">{p.title}</h3>

                  <p className="mt-2 mb-4 text-sm leading-relaxed text-gray-300">
                    {p.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    {p.links.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} on GitHub`}
                        className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-white/80 ring-1 ring-white/10 transition hover:bg-white/10"
                      >
                        <FiGithub className="text-white" />
                      </a>
                    )}
                    <a
                      href={p.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-blush/15 px-4 py-2 text-sm font-semibold text-blush-light ring-1 ring-blush/25 transition hover:bg-blush/25"
                    >
                      Live demo
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          
          <div className="mt-2 flex justify-center gap-1.5 md:hidden">
            {featured.map((p, i) => (
              <span
                key={p.title}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === active ? "bg-peach" : "bg-white/20"
                }`}
              />
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-gray-500 md:hidden">
            ← swipe →
          </p>

          <p className="mt-4 text-center text-xs text-gray-400">
            ⏳ Backends run on free-tier hosting, so the first request may take
            up to a minute to wake up.
          </p>

 
          <h3 className="mt-12 mb-1 text-center text-lg font-bold text-gray-200">
            Other Projects
          </h3>
          <p className="mb-5 text-center text-xs text-gray-500">Earlier builds</p>

          <div className="grid gap-3 sm:grid-cols-2">
            {otherProjects.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-blush/25"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold">{p.title}</h4>
                  <span className="rounded-full bg-blush/15 px-2 py-0.5 text-[10px] font-semibold text-blush-light ring-1 ring-blush/30">
                    {p.badge}
                  </span>
                </div>
                <p className="mt-2 mb-3 text-xs text-gray-400">{p.description}</p>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="whitespace-nowrap text-xs text-gray-400 transition hover:text-white"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};