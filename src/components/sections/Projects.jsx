import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 bg-black/75 py-4 rounded-md">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-br from-pink-500 to-violet-600 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/75 hover:shadow-[0_2px_8px_rgba(90, 34, 139,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Mecazon E-Commerce Site
              </h3>
              <hr className="text-purple-500" />
              <p className="text-gray-400 mb-4">
                Fully functional web application created to mimic other retail
                websites, complete with database managing and cart
                functionality.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "MongoDB",
                  "Javascript",
                  "Axios",
                  "Vite",
                  "Node.js",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(90, 34, 139,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/JacobPloog/MECAZON"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4 "
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/75 hover:shadow-[0_2px_8px_rgba(90, 34, 139,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Flight Match Website</h3>
              <hr className="text-purple-500" />
              <p className="text-gray-400 mb-4">
                Fully functional web application that mimics flight matching
                websites, complete with form verification with user log-in and
                ability to add and remove flights from a database.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Javascript", "Bootstrap", "Node.js", "JSON"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(90, 34, 139,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/JacobPloog/flight-match"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4 "
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/75 hover:shadow-[0_2px_8px_rgba(90, 34, 139,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Laravel Task Application
              </h3>
              <hr className="text-purple-500" />
              <p className="text-gray-400 mb-4">
                Fully functional web application created to mimic other retail
                websites, complete with database managing and cart
                functionality.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Laravel",
                  "Sqlite",
                  "Javascript",
                  "Node.js",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(90, 34, 139,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/JacobPloog/laravel-task-app"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4 "
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/80 hover:shadow-[0_2px_8px_rgba(90, 34, 139,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Educational Gaming Mobile App</h3>
              <hr className="text-purple-500" />
              <p className="text-gray-400 mb-4">
                Fully functional web application that mimics flight matching
                websites, complete with form verification with user log-in and
                ability to add and remove flights from a database.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Javascript", "Bootstrap", "Node.js", "JSON"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(90, 34, 139,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/JacobPloog/FBLA-Mobile-App"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4 "
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
