type SkillCategory = {
  category: string;
  items: string[];
};

type SkillsProps = {
  categories: SkillCategory[];
};

export function Skills({ categories }: SkillsProps) {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-[0.24em] text-red-700 uppercase">
          Skills
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          チーム運営からデザイン、実装までを横断するスキルセット。
        </h2>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {categories.map((group) => (
          <article
            key={group.category}
            className="rounded-[1.5rem] border border-zinc-200/80 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(24,24,27,0.35)]"
          >
            <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
