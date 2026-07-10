const contacts = [
  { label: "Email", value: "kmc2423@kamiyama.ac.jp", href: "mailto:kmc2423@kamiyama.ac.jp" },
  { label: "GitHub", value: "@kmc2423", href: "https://github.com/kmc2423" },
  { label: "X", value: "あとから追加予定", href: "#" },
  { label: "Portfolio", value: "追加リンクは後から設定可能", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pb-10">
      <div className="rounded-[2rem] border border-zinc-200/80 bg-zinc-950 px-6 py-8 text-white shadow-[0_35px_90px_-55px_rgba(24,24,27,0.7)] sm:px-8 sm:py-10 md:px-10">
        <p className="text-sm font-medium tracking-[0.24em] text-red-300 uppercase">
          Contact
        </p>
        <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              チームを立ち上げ、整理し、前に進める役割で価値を出したいと考えています。
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-300 md:text-lg">
              スタートアップ、プロダクト、デザイン、コミュニティ運営に関わる
              インターンの機会があれば、ぜひお話しできるとうれしいです。
            </p>
          </div>

          <div className="grid gap-3">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-[1.25rem] border border-white/10 bg-white/5 px-5 py-4 transition duration-200 hover:-translate-y-0.5 hover:bg-white/8"
              >
                <p className="text-xs font-medium tracking-[0.18em] text-zinc-400 uppercase">
                  {item.label}
                </p>
                <p className="mt-2 text-sm text-white">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
