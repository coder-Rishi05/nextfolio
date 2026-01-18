<div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mt-14 text-center">
  <h2 className="text-xl sm:text-2xl font-semibold mb-4 tracking-wide">
    What I Do
  </h2>
  <p className="text-sm sm:text-base md:text-lg font-mono leading-relaxed text-white/80">
    I focus on building modern, performant, and scalable web interfaces where
    design meets logic. My work revolves around crafting smooth user experiences
    with clean architecture and meaningful interactions.
  </p>
</div>;

{
  /* Skills Snapshot */
}
<div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mt-14">
  <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center tracking-wide">
    Skills Snapshot
  </h2>

  <div className="flex flex-wrap justify-center gap-3">
    {[
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "UI/UX Thinking",
    ].map((skill) => (
      <span
        key={skill}
        className="px-4 py-2 text-xs sm:text-sm font-mono border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
      >
        {skill}
      </span>
    ))}
  </div>
</div>;

{
  /* Philosophy */
}
<div className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 mt-16 text-center">
  <h2 className="text-xl sm:text-2xl font-semibold mb-4 tracking-wide">
    Philosophy
  </h2>
  <p className="text-sm sm:text-base md:text-lg font-mono leading-relaxed text-white/80 italic">
    I believe good software is not just written — it is designed, felt, and
    experienced. Simplicity, clarity, and intention guide everything I build.
  </p>
</div>;

{
  /* Call to Action */
}
<div className="mt-16">
  <button className="px-6 py-3 text-sm sm:text-base font-mono border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300">
    Let’s Build Something Meaningful
  </button>
</div>;
