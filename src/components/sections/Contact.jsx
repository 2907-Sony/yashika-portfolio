import React from "react";
import { ReviewOnScroll } from "../ReviewOnScroll";
import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  
  const links = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yashika-s/",
      Icon: Linkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/2907-Sony",
      Icon: Github,
    },
    {
      label: "Email",
      href: "mailto:yashikasony55266@gmil.com?subject=Hello%20Yashika&body=Hi%20Sony,%0A%0A",
      Icon: Mail,
    },
  ];

  return (
    <section id="contact" className="py-16 flex justify-center">
      <ReviewOnScroll>
        <div className="px-4 w-full max-w-xl text-center">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="flex items-center justify-center gap-6">
            {links.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noreferrer" : undefined}
                className="group w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
                           transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                aria-label={label}
                title={label}
              >
                <Icon className="w-7 h-7 text-white/80 group-hover:text-white transition" />
              </a>
            ))}
          </div>

          <p className="mt-2 mb-0 text-white/60 text-sm">
          find me on LinkedIn, explore my work on GitHub, or drop me an email.
          </p>
        </div>
      </ReviewOnScroll>
    </section>
  );
};
