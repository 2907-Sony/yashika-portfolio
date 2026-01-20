import { ReviewOnScroll } from "../ReviewOnScroll";
import { FaReact, FaJsSquare, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiInternetcomputer } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { PiFileCssBold } from "react-icons/pi";

export const Projects = () => {

  const publicUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

  const techIconMap = {
    Html: { icon: FaHtml5, color: "text-orange-500" },
    React: { icon: FaReact, color: "text-cyan-400" },
    JavaScript: { icon: FaJsSquare, color: "text-yellow-400" },
    CSS: { icon: PiFileCssBold, color: "text-blue-500" },
    Motoko: { icon: SiInternetcomputer, color: "text-purple-400" },
    "Node.js": { icon: FaNodeJs, color: "text-green-500" },
    Tailwind: { icon: SiTailwindcss, color: "text-sky-400" },
    Firebase: { icon: SiFirebase, color: "text-orange-400" },
  };

  const projects = [
    {
      title: "DBank",
      description:
        "A simple banking UI where users can top up and withdraw funds with instant balance updates.",
      tech: ["React", "JavaScript", "CSS", "Motoko", "Html"],
      demoGif: publicUrl("dbank-preview.gif"),
      links: {
        github: "https://github.com/2907-Sony/dbank",
        demo: publicUrl("dbank-demo.gif"),
      },
      featured: true,
    },
    {
      title: "Driver Monitor System",
      description:
        "A simple banking UI where users can top up and withdraw funds with instant balance updates.",
      tech: ["React", "JavaScript", "CSS", "Node.js", "Firebase"],
      demoGif: publicUrl("driver-monitoring-system-preview.gif"),
      links: {
        github: "https://github.com/johannTom/Group2F25",
        demo: publicUrl("monitor-system-demo.gif"),
      },
      featured: true,
    },
    {
      title: "Keeper",
      description:
        "It allows users to create, store, and manage personal notes securely using smart contracts.",
      tech: ["React", "JavaScript", "CSS", "Motoko"],
      demoGif: publicUrl("keeper-preview.gif"),
      links: {
        github: "https://github.com/2907-Sony/Keeper",
        demo: publicUrl("keeper-demo.gif"),
      },
      featured: true,
    },
    {
      title: "To-Do List",
      description:
        "A simple banking UI where users can top up and withdraw funds with instant balance updates.",
      tech: ["Html", "React", "JavaScript", "CSS"],
      demoGif: publicUrl("to-do-list-preview.gif"),
      links: {
        github: "https://github.com/2907-Sony/TO-DO-LIST",
        demo: publicUrl("todo-list-demo.gif"),
      },
      featured: true,
    },
    {
      title: "Dice Game",
      description:
        "A simple banking UI where users can top up and withdraw funds with instant balance updates.",
      tech: ["Html", "JavaScript", "CSS"],
      demoGif: publicUrl("dice-game-preview.gif"),
      links: {
        github: "https://github.com/2907-Sony/Dice-Game",
        demo: publicUrl("dice-game-demo.gif"),
      },
      featured: true,
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <ReviewOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className={[
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6",
                  "transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30",
                  "hover:shadow-[0_0_0_1px_rgba(59,130,246,0.25),0_20px_60px_rgba(0,0,0,0.55)]",
                  project.featured ? "md:col-span-2" : "",
                ].join(" ")}
              >
                
                <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

           
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                  {project.demoGif ? (
                    <div className="relative mb-5 flex justify-center">
                      <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[280px] lg:max-w-[300px]">
                        <div className="h-56 sm:h-64 lg:h-60 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                          <img
                            src={project.demoGif}
                            alt={`${project.title} demo`}
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-5 h-36 rounded-xl border border-white/10 bg-black/30 flex items-center justify-center text-white/40">
                      Demo coming soon
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => {
                      const tech = techIconMap[t];
                      if (!tech) return null;

                      const Icon = tech.icon;

                      return (
                        <span
                          key={t}
                          title={t}
                          className="flex items-center justify-center h-9 w-9 rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 hover:scale-105"
                        >
                          <Icon className={`text-lg ${tech.color}`} />
                        </span>
                      );
                    })}
                  </div>

                  
                  <div className="relative z-10 flex flex-wrap items-center gap-3">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-white/80 ring-1 ring-white/10 transition hover:bg-white/10"
                      >
                        <FiGithub className="text-white" />
                      </a>
                    )}

                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-500/15 px-4 py-2 text-blue-200 ring-1 ring-blue-400/25 transition hover:bg-blue-500/25"
                      >
                        Demo
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};
