import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { HanabiCaseStudy } from "@/components/HanabiCaseStudy";
import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { Skills } from "@/components/Skills";
import { hanabiCaseStudy, impactStats, otherProjects, skills } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(185,28,28,0.12),_transparent_55%)]" />

      <div className="mx-auto max-w-[1240px] px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          <Navigation />

          <div className="flex min-w-0 flex-col gap-24 md:gap-28">
            <Hero />
            <ImpactStats stats={impactStats} />
            <HanabiCaseStudy caseStudy={hanabiCaseStudy} />

            <section id="projects" className="scroll-mt-24">
              <div className="max-w-2xl">
                <p className="text-sm font-medium tracking-[0.24em] text-red-700 uppercase">
                  Other Projects
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                  周辺のプロジェクトにも、企画と構造化の姿勢が表れています。
                </h2>
                <p className="mt-4 text-base leading-8 text-zinc-600 md:text-lg">
                  Hanabiを中心に据えつつ、その外側でもコンセプト設計、分析思考、
                  運用を支えるツールづくりに取り組んできました。
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </section>

            <Skills categories={skills} />
            <About />
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
