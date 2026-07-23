import { createFileRoute, Link } from "@tanstack/react-router";
import { projectsData } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
        <h1 className="font-display text-4xl font-bold text-plum">Project Not Found</h1>
        <p className="mt-2 text-muted-foreground">The project you are looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center px-6 py-2.5 rounded-full ribbon font-semibold shadow-md"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-bold text-plum">
            Farhana<span className="text-rose">.</span>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-plum hover:text-rose transition flex items-center gap-1"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <div className="animate-bloom">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-rose font-bold px-3 py-1 bg-rose/10 rounded-full border border-rose/20">
              {project.tag}
            </span>
          </div>

          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-plum">
            {project.title}
          </h1>

          {/* Project Image */}
          <div className="mt-8 paper-card p-4 overflow-hidden rounded-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[450px] object-cover rounded-xl shadow-inner"
            />
          </div>

          {/* Full description */}
          <div className="mt-10 paper-card p-8 md:p-12 space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-plum">
              প্রজেক্ট বিবরণী
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 whitespace-pre-line">
              {project.fullContent}
            </p>

            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-6 pt-6 border-t border-border/50">
                <h3 className="font-display text-xl font-semibold text-plum mb-3">
                  মূল বৈশিষ্ট্যসমূহ (Key Highlights)
                </h3>
                <ul className="space-y-2">
                  {project.highlights.map((h, index) => (
                    <li key={index} className="flex items-center gap-2 text-foreground/80">
                      <span className="text-rose">🌸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Back button */}
          <div className="mt-10 text-center">
            <Link
              to="/"
              className="ribbon inline-flex items-center px-8 py-3.5 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              ← সব প্রজেক্ট দেখুন
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-hand text-2xl text-plum">Farhana's Little World</p>
          <p className="text-sm text-muted-foreground">Made with 💛 Farhana © 2026</p>
        </div>
      </footer>
    </div>
  );
}
