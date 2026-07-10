const navItems = [
  { href: "#top", label: "トップ" },
  { href: "#impact", label: "実績" },
  { href: "#hanabi", label: "Hanabi" },
  { href: "#projects", label: "プロジェクト" },
  { href: "#skills", label: "スキル" },
  { href: "#about", label: "自己紹介" },
  { href: "#contact", label: "連絡先" },
];

export function Navigation() {
  return (
    <>
      <header className="sticky top-0 z-30 -mx-4 border-b border-zinc-200/80 bg-[rgba(247,247,245,0.88)] px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-zinc-950">龍田 幹</p>
            <p className="text-xs text-zinc-500">Team Builder / Designer</p>
          </div>
          <nav className="flex gap-3 overflow-x-auto text-xs text-zinc-600">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="whitespace-nowrap rounded-full px-2 py-1 hover:bg-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <aside className="hidden lg:block">
        <div className="sticky top-8 rounded-[2rem] border border-zinc-200/80 bg-white/88 p-6 shadow-[0_24px_80px_-55px_rgba(24,24,27,0.35)] backdrop-blur">
          <p className="text-sm font-semibold tracking-tight text-zinc-950">龍田 幹</p>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            Student Founder
            <br />
            Team Builder / Designer
          </p>

          <div className="mt-8 h-px bg-zinc-200" />

          <nav className="mt-8 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="relative mt-10 rounded-[1.5rem] border border-red-100 bg-red-50 px-4 py-4">
            <div className="absolute -right-3 -top-3 h-8 w-8 rounded-2xl border border-zinc-200 bg-white" />
            <p className="text-xs font-medium tracking-[0.18em] text-red-700 uppercase">
              Focus
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-700">
              FRC Team 9494 Hanabiでの立ち上げ、運営、広報、資金調達、
              アウトリーチの経験を中心に構成しています。
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
