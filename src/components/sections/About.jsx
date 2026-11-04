import { ReviewOnScroll } from "../ReviewOnScroll";
import aboutPhoto from "../../assets/about-photo.jpeg";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGithub,
  FaDatabase,
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiUdemy,
  SiLinkedin,
  SiFigma,
  SiFirebase,
  SiExpress,
  SiInternetcomputer,
  SiPython,
  SiScikitlearn,
  SiSpacy,
  SiLangchain,
  SiGooglegemini,
  SiFastapi,
  SiPostgresql,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { FiLayers, FiFileText } from "react-icons/fi";
import { VscAzureDevops, VscVscode } from "react-icons/vsc";
import { PiFileCssBold } from "react-icons/pi";

export const About = () => {
  /* Skills grouped by area. Icon colors are each technology's own brand color. */
  const skillGroups = [
    {
      title: "Frontend",
      items: [
        { icon: FaHtml5, label: "HTML", color: "text-orange-500" },
        { icon: PiFileCssBold, label: "CSS", color: "text-blue-500" },
        { icon: FaJs, label: "JavaScript", color: "text-yellow-400" },
        { icon: FaReact, label: "React", color: "text-cyan-400" },
        { icon: SiTailwindcss, label: "Tailwind CSS", color: "text-sky-400" },
        { icon: FaBootstrap, label: "Bootstrap", color: "text-purple-500" },
      ],
    },
    {
      title: "AI / Machine Learning",
      isNew: true,
      items: [
        { icon: SiPython, label: "Python", color: "text-blue-400" },
        { icon: SiScikitlearn, label: "scikit-learn", color: "text-orange-400" },
        { icon: SiSpacy, label: "spaCy", color: "text-sky-400" },
        { icon: SiLangchain, label: "LangChain", color: "text-emerald-400" },
        { icon: FiLayers, label: "ChromaDB", color: "text-amber-400" },
        { icon: SiGooglegemini, label: "Gemini API", color: "text-violet-400" },
        { icon: FiFileText, label: "EasyOCR", color: "text-gray-300" },
      ],
    },
    {
      title: "Backend & Databases",
      items: [
        { icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
        { icon: SiExpress, label: "Express", color: "text-gray-400" },
        { icon: SiFastapi, label: "FastAPI", color: "text-teal-400" },
        { icon: FaDatabase, label: "SQL", color: "text-indigo-400" },
        { icon: SiPostgresql, label: "PostgreSQL", color: "text-indigo-400" },
        { icon: SiFirebase, label: "Firebase", color: "text-orange-500" },
        { icon: SiInternetcomputer, label: "Motoko", color: "text-pink-400" },
      ],
    },
    {
      title: "Tools & Deployment",
      items: [
        { icon: FaGithub, label: "GitHub", color: "text-gray-200" },
        { icon: VscVscode, label: "VS Code", color: "text-blue-400" },
        { icon: SiFigma, label: "Figma", color: "text-pink-500" },
        { icon: VscAzureDevops, label: "Azure Boards", color: "text-blue-500" },
        { icon: SiVercel, label: "Vercel", color: "text-gray-200" },
        { icon: SiRender, label: "Render", color: "text-gray-200" },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReviewOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blush to-peach bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Bio */}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all space-y-4 text-gray-300">
          <div className="flex items-center gap-4">
              <img
                src={aboutPhoto}
                alt="Yashika"
                className="h-20 w-20 shrink-0 rounded-full object-cover object-[50%_20%] ring-2 ring-blush/60 shadow-[0_0_24px_rgba(244,184,176,0.35)]"
              />
              <div>
                <p className="text-lg font-bold bg-gradient-to-r from-blush to-peach bg-clip-text text-transparent">
                  Yashika
                </p>
                <p className="text-sm text-gray-400">
                CS student · Full-stack + ML · Open to Summer 2027 co-op
                </p>
              </div>
            </div>
            <p>
  I'm a{" "}
  <strong>
    Bachelor's (Honours) student in Applied Computer Science &
    Information Technology at Conestoga College
  </strong>{" "}
  who loves building things end to end: a clean React interface, the API
  behind it, and a deployed app anyone can try. My background spans{" "}
  <strong>software development</strong> and{" "}
  <strong>data analytics</strong>, and lately I've been focused on{" "}
  <strong>applied AI and machine learning</strong>.
</p>

<p>
  I've shipped <strong>three live ML apps</strong>: a{" "}
  <strong>churn predictor</strong>, a <strong>RAG chatbot</strong> and a{" "}
  <strong>receipt scanner</strong>. Building them taught me the messy parts
  too: cleaning real-world data, fitting models into tight memory limits,
  and debugging production issues after deployment.
</p>

<p>
  Alongside my studies, I work <strong>part-time at Shell</strong>, where
  I've learned to communicate clearly, work with people from very different
  backgrounds, and stay calm in a fast-paced, customer-facing role. I'm
  looking for a{" "}
  <strong>
    Summer 2027 co-op in software development or machine learning
  </strong>
  , where I can ship real features and keep growing as a developer.
</p>
          </div>

          {/* Skills */}
          <div className="rounded-xl mt-8 p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-8 text-center">
              Tools & Technologies
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              {skillGroups.map((g) => (
                <div
                  key={g.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <h4 className="mb-4 flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-blush to-peach bg-clip-text text-transparent">
                    {g.title}
                    {g.isNew}
                  </h4>

                  <div className="grid grid-cols-3 gap-x-2 gap-y-5">
                    {g.items.map(({ icon: Icon, label, color }) => (
                      <div
                        key={label}
                        className="group flex flex-col items-center text-gray-400 hover:text-blush transition-colors duration-300"
                      >
                        <div className={`text-2xl ${color} drop-shadow-md`}>
                          <Icon />
                        </div>
                        <span className="pt-2 text-center text-[11px] text-gray-300/90 group-hover:text-blush-light transition-colors">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-blush" />
                Education
              </h3>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    Bachelor's Degree, Applied Computer Science & IT
                  </strong>{" "}
                  — Conestoga College
                  <span className="text-gray-400"> (2024 - present)</span>
                </li>
                <li>
                  <strong>
                    Web Dev & Internet Apps Fundamentals, Applied Computer
                    Science & IT
                  </strong>{" "}
                  — Conestoga College
                  <span className="text-gray-400"> (2023 - 2024)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaCertificate className="text-green-400" />
                Certifications
              </h3>

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <SiUdemy className="text-purple-400 text-xl mt-1 shrink-0" />
                  <p className="font-semibold">
                    <a
                      href="https://ude.my/UC-753a79b7-3c91-478d-9204-4d4be3cbcb7d"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-peach"
                    >
                      The Complete Full-Stack Web Development Bootcamp
                    </a>{" "}
                    <span className="text-gray-400">— Udemy, Sept 2026</span>
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <SiUdemy className="text-purple-400 text-xl mt-1 shrink-0" />
                  <p className="font-semibold">
                    <a
                      href="https://ude.my/UC-744f42f8-ddc4-4700-b02f-8fb3114c7d7b"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-peach"
                    >
                      The Complete Python Bootcamp: From Zero to Hero in Python
                    </a>{" "}
                    <span className="text-gray-400">— Udemy, Sept 2026</span>
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <SiLinkedin className="text-blue-400 text-xl mt-1 shrink-0" />
                  <p className="font-semibold">
                    Figma Essential Training: The Basics{" "}
                    <span className="text-gray-400">— LinkedIn Learning</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};