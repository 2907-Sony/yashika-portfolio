import { ReviewOnScroll } from "../ReviewOnScroll";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGithub,
  FaDatabase,
  FaCode,
  FaServer,
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";
import { SiTailwindcss, SiUdemy, SiLinkedin, SiFigma, SiFirebase, SiExpress, SiInternetcomputer} from "react-icons/si";
import { VscAzureDevops, VscVscode } from "react-icons/vsc";
import { PiFileCssBold } from "react-icons/pi";

export const About = () => {
  const skills = [
    { icon: FaHtml5, label: "HTML", color: "text-orange-500" },
    { icon: PiFileCssBold, label: "CSS", color: "text-blue-500" },
    { icon: FaJs, label: "JavaScript", color: "text-yellow-400" },
    { icon: FaReact, label: "React", color: "text-cyan-400" },
    { icon: SiTailwindcss, label: "Tailwind CSS", color: "text-sky-400" },
    { icon: FaBootstrap, label: "Bootstrap", color: "text-purple-500" },
    { icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
    { icon: SiExpress, label: "Express", color: "text-white-bold-300" },
    { icon: FaDatabase, label: "SQL", color: "text-indigo-400" },
    { icon: SiFirebase , label: "Firebase", color: "text-orange-500" },
    { icon: SiInternetcomputer, label: "Motoko", color: "text-pink-400" },
    { icon: FaGithub, label: "GitHub", color: "text-gray-200" },
    { icon: VscVscode , label: "VS Code", color: "text-blue-400" },
    { icon: SiFigma, label: "Figma", color: "text-pink-500" },
    { icon: VscAzureDevops, label: "Azure Boards", color: "text-blue-500"},

  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReviewOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300">
            I’m a <strong>Bachelor’s (Honours) student in Applied Computer Science & Information Technology</strong> with a strong interest in building clean, scalable, and practical web applications. I enjoy working across the <strong>full stack—turning ideas into intuitive,</strong> high-performing, and visually polished products using modern tools and best practices.

Alongside my studies, I work <strong>part-time at Shell,</strong> where I’ve developed strong communication, teamwork, and problem-solving skills in a fast-paced, customer-focused environment. This experience has helped me grow in <strong>confidence, adaptability, and clarity when collaborating </strong> with others—skills I actively apply in my development work.

I’m currently focused on <strong>strengthening my full-stack skill </strong>set through hands-on projects, improving code quality, and gaining a deeper understanding of how real-world production systems are built. I’m preparing for a Summer Co-op opportunity where I can contribute meaningfully, learn quickly, and grow alongside an experienced engineering team.
</p>
          </div>

          <div className="rounded-xl mt-8 p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-8 text-center">
              Tools & Technologies
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 place-items-center gap-x-12 gap-y-10">
              {skills.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="group flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <div className={`text-3xl ${color} drop-shadow-md`}>
                    <Icon />
                  </div>
                  <span className="text-xs py-3 text-center text-gray-300/90 group-hover:text-blue-300 transition-colors">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-blue-400" />
                Education
              </h3>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    Bachelor's Degree Applied Computer Science & IT
                  </strong>{" "}
                  — Conestoga College
                  <span className="text-gray-400"> (2024 - present)</span>
                </li>
                <li>
                  <strong>
                    Web Dev & Internet Apps Fund Applied Computer Science & IT
                  </strong>{" "}
                  - Conestoga College
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
                  <SiUdemy className="text-purple-400 text-xl mt-1" />
                  <div>
                    <p className="font-semibold">
                      The Complete Full-Stack Web Development Bootcamp{" "}
                      <span className="text-gray-400">— Udemy</span>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <SiLinkedin className="text-blue-400 text-xl mt-1" />
                  <div>
                    <p className="font-semibold">
                      Figma Essential Training: The Basics Figma Essential
                      Training: The Basics{" "}
                      <span className="text-gray-400">— LinkedIn Learning</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};
