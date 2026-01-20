import { ReviewOnScroll } from "../ReviewOnScroll";
import myPic from "../../assets/Mypic.jpeg";

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
                <h1 className="text-xl md:text-4xl font-bold mb-5 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  Me, Yashika!
                </h1>
                <p className="text-xl md:text-md font-bold mb-5 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                Learning by building web experiences
                </p>
                <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                  <a
                    href="#projects"
                    className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  >
                    View Projects
                  </a>

                  <a
                    href={`${import.meta.env.BASE_URL}resume.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-blue-500/50 text-blue-400 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                  >
                    View Resume
                  </a>
                </div>
              </div>

              <div className="flex-1 flex justify-center md:justify-end ">
                <div className="h-100 relative w-full max-w-sm aspect-[4/5] mx-auto rounded-4xl overflow-hidden my-sm shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(59,130,246,0.15)] absolute inset-0 bg-black/10 opacity-65">
                  <img
                    src={myPic}
                    alt="My Photo"
                    className="w-full h-full object-cover
        object-[50%_5%]
        contrast-105 brightness-105
        transition-transform duration-700
        group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};
