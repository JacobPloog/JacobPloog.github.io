import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 bg-black/75 py-4 rounded-md">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-pink-500 to-violet-600 bg-clip-text text-transparent leading-right">
            Hi, I'm Jake Ploog
          </h1>
          <p className="text-white/50 lext-lg mb-8 max-w-lg mx-auto">
            I'm a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-violet-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(90, 34, 139, 0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-purple-500/50 text-violet-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(90, 34, 139, 0.4)] hover:bg-purple-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
