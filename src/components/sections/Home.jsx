import { ReviewOnScroll } from "../ReviewOnScroll";
import portrait from "../../assets/Mypic.jpeg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 my-6 sm:gap-6 sm:py-4"
    >
      <ReviewOnScroll>
        <div className="w-full max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.6)] p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              
              <div className="flex-none flex justify-center">
                <div className="relative w-full max-w-[16rem] sm:max-w-[18rem]">
                  <div className="pointer-events-none absolute -inset-[14%] rounded-full blur-3xl bg-[radial-gradient(circle,rgba(244,184,176,0.55),rgba(246,207,174,0.28)_48%,transparent_70%)]" />

                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                    <img
                      src={portrait}
                      alt="Portrait of Yashika"
                      className="h-full w-full object-cover object-[50%_30%]"
                    />
                  </div>

                  <span className="pointer-events-none absolute -top-2 -right-3 animate-pulse text-lg text-blush-light">
                    ✦
                  </span>
                  <span className="pointer-events-none absolute bottom-[18%] -left-4 animate-pulse text-lg text-blush-light [animation-delay:1.2s]">
                    ✦
                  </span>
                </div>
              </div>

         
              <div className="flex-1 text-center md:text-left">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blush/35 bg-blush/10 px-3 py-1.5 text-xs font-semibold text-blush-light">
                  <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
                  Open to Summer 2027 co-op 
                </div>

                <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blush to-peach bg-clip-text text-transparent">
                    Yashika
                  </span>
                </h1>

                <p className="mb-6 text-base text-gray-300 md:text-lg">
                Full-stack + ML developer. Python · FastAPI · React · scikit-learn.<br />
                3 live projects, all deployed end to end.</p>

                

                <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                  <a
                    href="#projects"
                    className="bg-gradient-to-r from-blush to-peach text-[#3a2423] py-3 px-6 rounded font-semibold transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(244,184,176,0.4)]"
                  >
                    View Projects
                  </a>

                  <a
                    href={`${import.meta.env.BASE_URL}Yashika_Resume.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-peach/55 text-peach py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(244,184,176,0.2)] hover:bg-blush/10"
                  >
                    View Resume
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded border border-white/15 bg-white/5 px-6 py-3 font-medium text-gray-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-peach/40 hover:bg-blush/10 hover:text-peach"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};