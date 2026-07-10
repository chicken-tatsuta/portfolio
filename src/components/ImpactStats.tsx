type ImpactStat = {
  value: string;
  label: string;
};

type ImpactStatsProps = {
  stats: ImpactStat[];
};

export function ImpactStats({ stats }: ImpactStatsProps) {
  return (
    <section id="impact" className="scroll-mt-24 overflow-visible">
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-[0.24em] text-red-700 uppercase">
          Impact
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          チームづくりの成果を、まずは数字で伝える。
        </h2>
      </div>

      <div className="mt-14 grid gap-x-5 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="group relative rounded-[1.75rem] border border-zinc-200/80 bg-white px-6 pb-6 pt-8 shadow-[0_20px_60px_-45px_rgba(24,24,27,0.45)] transition duration-200 hover:-translate-y-1"
          >
            <div className="absolute -top-3 left-6 rounded-full border border-zinc-200 bg-[#fbfbfa] px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-zinc-500 uppercase shadow-[0_12px_25px_-18px_rgba(24,24,27,0.3)]">
              Hanabi
            </div>
            <div className="pointer-events-none absolute -right-2 top-5 h-10 w-10 rounded-2xl border border-red-100 bg-red-50/80 transition duration-200 group-hover:rotate-6" />
            <p className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-600">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
