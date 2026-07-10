export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[88svh] scroll-mt-24 items-center overflow-visible pt-6">
      <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-12">
        <div className="relative flex min-h-[520px] flex-col justify-between overflow-visible rounded-[3rem] border border-zinc-200/70 bg-white/72 px-7 py-8 shadow-[0_28px_90px_-60px_rgba(24,24,27,0.42)] backdrop-blur md:px-10 md:py-10">
          <div className="pointer-events-none absolute -top-6 left-10 h-16 w-16 rounded-full border border-zinc-300/80 bg-white/80" />
          <div className="pointer-events-none absolute -right-8 top-24 h-24 w-24 rounded-[1.8rem] border border-red-100 bg-red-50/90 shadow-[0_20px_50px_-35px_rgba(185,28,28,0.4)]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-medium tracking-[0.22em] text-red-700 uppercase shadow-[0_12px_30px_-20px_rgba(185,28,28,0.45)]">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              FRC Team 9494 Hanabi
            </div>
            <h1 className="mt-10 max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl md:text-[6.2rem] md:leading-[0.9]">
              ゼロから、
              <br />
              動き出すチームを
              <br />
              つくる。
            </h1>
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex -rotate-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-600 shadow-[0_20px_40px_-30px_rgba(24,24,27,0.35)]">
              Student Founder / Team Builder / Designer
            </div>
            <p className="text-lg leading-8 text-zinc-600 md:text-xl">
              FRC Team 9494 Hanabiの立ち上げと運営を通して、
              人が動ける仕組みと伝わる物語を設計してきました。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#hanabi"
                className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-red-700"
              >
                Hanabiの事例を見る
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50"
              >
                連絡先を見る
              </a>
            </div>
          </div>
        </div>

        <div className="relative overflow-visible pt-10 lg:pt-16">
          <div className="pointer-events-none absolute left-0 top-0 z-10 -rotate-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-xs font-medium tracking-[0.18em] text-zinc-500 uppercase shadow-[0_20px_40px_-30px_rgba(24,24,27,0.35)]">
            Hero Visual
          </div>
          <div className="pointer-events-none absolute right-2 top-12 z-20 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-[11px] font-medium tracking-[0.2em] text-red-700 uppercase shadow-[0_20px_40px_-30px_rgba(185,28,28,0.4)]">
            Optional
          </div>
          <div className="relative rounded-[2.4rem] border border-zinc-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(244,244,245,0.96))] p-5 shadow-[0_30px_80px_-55px_rgba(24,24,27,0.4)]">
            <div className="flex min-h-[500px] flex-col justify-between rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(185,28,28,0.16),transparent_42%),linear-gradient(180deg,rgba(250,250,250,1),rgba(244,244,245,1))] p-7">
              <div className="flex items-center justify-between text-xs font-medium tracking-[0.18em] text-zinc-500 uppercase opacity-0">
              <span>Hero Visual</span>
              <span>Optional</span>
            </div>
            <div className="flex flex-1 items-center justify-center text-center">
              <div>
                <p className="text-2xl font-medium text-zinc-700">写真を強く見せるためのビジュアル枠</p>
                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  顔写真、チーム写真、競技会の風景などに
                  <br />
                  後から差し替えできます。
                </p>
              </div>
            </div>
              <div className="relative mt-6">
                <div className="absolute -left-10 bottom-4 hidden rounded-[1.6rem] border border-zinc-200 bg-white px-5 py-4 shadow-[0_24px_50px_-35px_rgba(24,24,27,0.35)] md:block">
                  <p className="text-[11px] font-medium tracking-[0.18em] text-zinc-500 uppercase">
                    Visual Direction
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-700">
                    大きな写真を主役にして、
                    <br />
                    文字は必要最小限に。
                  </p>
                </div>
                <p className="ml-auto max-w-[18rem] text-sm leading-7 text-zinc-500">
                  Topでは情報を絞り、詳細は下のセクションで順に読める構成にしています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
