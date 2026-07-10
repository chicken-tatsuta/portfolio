export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid gap-8 rounded-[2rem] border border-zinc-200/80 bg-white p-8 shadow-[0_25px_80px_-55px_rgba(24,24,27,0.35)] md:grid-cols-[220px_minmax(0,1fr)] md:gap-10">
        <div>
          <p className="text-sm font-medium tracking-[0.24em] text-red-700 uppercase">
            About
          </p>
        </div>

        <div className="max-w-3xl">
          <p className="text-xl leading-9 text-zinc-900 md:text-2xl md:leading-10">
            神山まるごと高専2年。スタートアップ、プロダクト、コミュニティづくり、
            デザインに興味があります。アイデアを、チーム・仕組み・体験として形に
            することが好きです。
          </p>
          <p className="mt-6 text-base leading-8 text-zinc-600 md:text-lg">
            興味の中心にあるのは、まだ形になっていないものを、関わる人が動ける
            状態まで持っていくことです。企画、運営、広報、デザインをまたいで
            全体を整える役割にやりがいを感じています。
          </p>
        </div>
      </div>
    </section>
  );
}
