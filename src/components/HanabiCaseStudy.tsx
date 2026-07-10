type HanabiCaseStudyProps = {
  caseStudy: {
    title: string;
    description: string;
    overview: string;
    role: string[];
    whatIDid: string[];
    impact: string[];
    learned: string;
  };
};

const sectionTitles = [
  { key: "overview", label: "概要" },
  { key: "role", label: "担当領域" },
  { key: "whatIDid", label: "取り組んだこと" },
  { key: "impact", label: "Impact" },
  { key: "learned", label: "学んだこと" },
] as const;

export function HanabiCaseStudy({ caseStudy }: HanabiCaseStudyProps) {
  return (
    <section id="hanabi" className="scroll-mt-24 overflow-visible">
      <div className="relative pt-10">
        <div className="pointer-events-none absolute left-0 top-0 h-14 w-14 rounded-full border border-zinc-300/80 bg-white/80" />
        <div className="pointer-events-none absolute right-10 top-6 h-20 w-20 rounded-[1.8rem] border border-red-100 bg-red-50/80" />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_300px] lg:gap-12">
          <div className="relative rounded-[2.4rem] border border-zinc-200/80 bg-white p-7 shadow-[0_30px_80px_-55px_rgba(24,24,27,0.4)] sm:p-8 md:p-10">
            <div className="absolute -top-5 left-8 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-medium tracking-[0.22em] text-red-700 uppercase shadow-[0_16px_30px_-20px_rgba(185,28,28,0.45)]">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              Featured Case Study
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
              {caseStudy.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-600 md:text-lg">
              {caseStudy.description}
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50/80 p-6 md:-ml-4">
                <p className="text-sm font-medium tracking-[0.2em] text-zinc-500 uppercase">
                  {sectionTitles[0].label}
                </p>
                <p className="mt-4 text-base leading-8 text-zinc-700">{caseStudy.overview}</p>
              </article>

              <article className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50/80 p-6 md:mt-10">
                <p className="text-sm font-medium tracking-[0.2em] text-zinc-500 uppercase">
                  {sectionTitles[1].label}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {caseStudy.role.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              <article className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50/80 p-6 md:mr-6">
                <p className="text-sm font-medium tracking-[0.2em] text-zinc-500 uppercase">
                  {sectionTitles[2].label}
                </p>
                <ul className="mt-4 space-y-3 text-base leading-8 text-zinc-700">
                  {caseStudy.whatIDid.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50/80 p-6 md:-mt-8">
                <p className="text-sm font-medium tracking-[0.2em] text-zinc-500 uppercase">
                  {sectionTitles[3].label}
                </p>
                <ul className="mt-4 space-y-3 text-base leading-8 text-zinc-700">
                  {caseStudy.impact.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <article className="mt-5 rounded-[1.5rem] border border-zinc-200 bg-zinc-50/80 p-6 md:mr-12">
              <p className="text-sm font-medium tracking-[0.2em] text-zinc-500 uppercase">
                {sectionTitles[4].label}
              </p>
              <p className="mt-4 max-w-4xl text-base leading-8 text-zinc-700 md:text-lg">
                {caseStudy.learned}
              </p>
            </article>
          </div>

          <div className="relative pt-14 lg:pt-28">
            <div className="absolute left-4 top-0 z-20 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-xs font-medium tracking-[0.18em] text-zinc-500 uppercase shadow-[0_20px_40px_-30px_rgba(24,24,27,0.35)]">
              Visual Slot
            </div>
            <div className="relative rounded-[2rem] border border-dashed border-zinc-300 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(244,244,245,0.95))] p-5 shadow-[0_30px_70px_-55px_rgba(24,24,27,0.45)]">
              <div className="flex min-h-[26rem] flex-col justify-between rounded-[1.7rem] bg-[radial-gradient(circle_at_top_right,rgba(185,28,28,0.12),transparent_35%),linear-gradient(180deg,rgba(250,250,250,1),rgba(244,244,245,1))] p-6">
                <div>
                  <p className="text-lg font-medium text-zinc-900">
                    チーム写真、スポンサーデッキ表紙、イベント風景など
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-12 bottom-8 hidden rounded-[1.4rem] border border-red-100 bg-red-50 px-4 py-4 shadow-[0_24px_50px_-35px_rgba(185,28,28,0.35)] md:block">
                    <p className="text-[11px] font-medium tracking-[0.18em] text-red-700 uppercase">
                      Recommended
                    </p>
                    <p className="mt-2 text-sm leading-7 text-zinc-700">
                      大会会場の写真や
                      <br />
                      活動風景と相性が良いです。
                    </p>
                  </div>
                  <p className="ml-auto max-w-[15rem] text-sm leading-7 text-zinc-500">
                    画像がなくても成立する構成にしつつ、
                    後から差し替えやすい枠として用意しています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
