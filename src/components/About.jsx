export default function About() {
  return (
    <section
      id="about"
      className="w-full border-t border-white/10 bg-black px-6 py-16 font-space selection:bg-white selection:text-black"
    >
      <div className="relative mx-auto w-full max-w-7xl border border-white/10 bg-[#050505] p-6 md:p-8">
        
        <div className="mb-6 flex items-end gap-4 border-b border-white/10 pb-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-white">
            About <span className="text-neutral-500">Us</span>
          </h2>
        </div>

        <div>
          <p className="max-w-4xl text-base md:text-lg leading-8 text-neutral-400 font-jetbrains">
            Algorithmus is the official coding club of IIIT Kota, focused on building strong problem-solving skills and promoting competitive programming within the institute. It brings together students who are interested in coding, algorithms, and logical thinking.
          </p>

          <p className="mt-4 max-w-4xl text-base md:text-lg leading-8 text-neutral-400 font-jetbrains">
            The club organizes coding contests, practice sessions, and discussions to help students improve their understanding of algorithms and data structures. Along with regular practice, Algorithmus also conducts workshops and peer learning sessions where students can learn concepts in a practical and approachable way.
          </p>

          <p className="mt-4 max-w-4xl text-base md:text-lg leading-8 text-neutral-400 font-jetbrains">
            By encouraging consistency, collaboration, and a learning mindset, the club creates an environment where students can grow steadily and build a strong foundation in competitive programming and development.
          </p>
        </div>

        <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2">
          <img
            src="/logo.png"
            alt="Algorithmus Logo"
            className="w-44 transition-all duration-500"
          />
        </div>

      </div>
    </section>
  );
}