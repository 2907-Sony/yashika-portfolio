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
            <div className="flex flex-col-reverse md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-xl md:text-4xl font-bold mb-5 bg-gradient-to-r from-blush to-peach bg-clip-text text-transparent leading-tight">
                  Me, Yashika!
                </h1>
                <p className="text-xl md:text-md font-bold mb-5 bg-gradient-to-r from-blush to-peach bg-clip-text text-transparent leading-tight">
                  Learning by building web experiences
                </p>
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
                </div>
              </div>

              <div className="flex-1 flex justify-center md:justify-end">
                <div className="relative w-full max-w-[19rem] sm:max-w-xs">
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
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};