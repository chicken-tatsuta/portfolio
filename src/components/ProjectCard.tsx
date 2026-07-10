type Project = {
  title: string;
  description: string;
  role: string;
  tools: string[];
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative mt-8 rounded-[1.9rem] border border-zinc-200/80 bg-white px-6 pb-6 pt-20 shadow-[0_20px_60px_-45px_rgba(24,24,27,0.45)] transition duration-200 hover:-translate-y-1">
      <div className="absolute -top-8 left-5 right-5 rotate-[-1.5deg] rounded-[1.4rem] border border-zinc-200 bg-[linear-gradient(180deg,rgba(250,250,250,1),rgba(244,244,245,1))] p-4 shadow-[0_24px_45px_-35px_rgba(24,24,27,0.35)] transition duration-200 group-hover:rotate-0 group-hover:-translate-y-1">
        <div className="flex aspect-[16/10] items-center justify-center rounded-[1rem] bg-[radial-gradient(circle_at_top,rgba(185,28,28,0.1),transparent_35%),white] text-center">
          <p className="text-sm font-medium text-zinc-400">プロジェクト画像の差し替え枠</p>
        </div>
      </div>

      <div className="absolute right-5 top-5 rounded-full border border-zinc-200 bg-[#fbfbfa] px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-zinc-500 uppercase">
        Project
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-zinc-600">{project.description}</p>

      <div className="mt-6 border-t border-zinc-100 pt-5">
        <p className="text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">Role</p>
        <p className="mt-2 text-sm text-zinc-700">{project.role}</p>
      </div>

      <div className="mt-5">
        <p className="text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">Tools</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
