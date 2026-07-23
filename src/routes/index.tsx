import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroBloom from "@/assets/hero-bloom.jpg";
import aboutDesk from "@/assets/about-desk.jpg";
import memFood from "@/assets/mem-food.jpg";
import memBook from "@/assets/mem-book.jpg";
import memMovie from "@/assets/mem-movie.jpg";
import memTomato from "@/assets/mem-tomato.jpg";
import { projectsData } from "@/data/projects";

export const Route = createFileRoute("/")({
  component: Index,
});

const favorites = [
  { emoji: "🍛", label: "Kacchi Biryani", note: "সবচেয়ে প্রিয় comfort food" },
  { emoji: "🎬", label: "The Notebook", note: "যতবার দেখি, ততবার কাঁদি" },
  { emoji: "📖", label: "Humayun Ahmed", note: "বৃষ্টির দিনে পড়ার জন্য" },
  { emoji: "🎨", label: "Watercolor", note: "ছোট ছোট মুহূর্ত আঁকা" },
  { emoji: "☕", label: "Milk tea", note: "সকাল শুরুর নিয়ম" },
  { emoji: "🌸", label: "Bakul ফুল", note: "গন্ধেই মন ভালো" },
];

const gallery = [
  { src: memFood, caption: "প্রিয় প্লেট" },
  { src: memBook, caption: "গল্পের পাতায়" },
  { src: memMovie, caption: "মুভি নাইট" },
  { src: memTomato, caption: "ল্যাব থেকে" },
];

function Index() {
  const [sent, setSent] = useState(false);
  const [showMasud, setShowMasud] = useState(false);

  return (
    <div className="min-h-screen font-sans text-foreground">
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-display text-xl font-bold text-plum">
            Farhana<span className="text-rose">.</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#about" className="hover:text-rose transition">About</a>
            <a href="#favorites" className="hover:text-rose transition">Favorites</a>
            <a href="#gallery" className="hover:text-rose transition">Memories</a>
            <a href="#projects" className="hover:text-rose transition">Projects</a>
            <a href="#contact" className="hover:text-rose transition">Say hi</a>
          </div>
        </div>
      </nav>

      <header id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-bloom">
            <p className="font-hand text-2xl text-rose">hello, sunshine —</p>
            <h1 className="mt-2 font-display text-5xl md:text-7xl font-bold leading-[1.05] text-plum">
              Farhana's <br />
              <span className="ink-underline">Little World</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground leading-relaxed">
              একটা ছোট্ট কোণা — যেখানে বই, বিরিয়ানি, গবেষণা আর গোলাপি বিকেল
              একসাথে বাস করে। ঘুরে যাও, একটু বসো, চা খাও ☕
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className="ribbon inline-flex items-center px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
                আমাকে চিনো →
              </a>
              <a href="#gallery" className="inline-flex items-center px-6 py-3 rounded-full font-semibold border border-rose/30 text-plum hover:bg-rose/10 transition">
                স্মৃতি দেখো
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-br from-rose/20 via-peach/20 to-gold/20 rounded-full blur-3xl animate-drift" />
            <div className="relative paper-card p-4 rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src={heroBloom} alt="Watercolor blooms and floating hearts" width={1024} height={1024} className="w-full rounded-2xl" />
              <p className="font-hand text-center text-2xl mt-3 text-plum">— bloom where you are 🌷</p>
            </div>
            <div className="absolute -top-6 -right-4 text-5xl animate-float">🌸</div>
            <div className="absolute -bottom-4 -left-6 text-4xl animate-float" style={{ animationDelay: "1.5s" }}>💛</div>
          </div>
        </div>
      </header>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2 paper-card p-4 -rotate-2">
            <img src={aboutDesk} alt="A cozy desk with journal and roses" width={1024} height={1024} loading="lazy" className="w-full rounded-2xl" />
          </div>
          <div className="md:col-span-3">
            <p className="font-hand text-2xl text-rose">about me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-plum mt-1">আমি Farhana</h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              আমি একজন কৌতূহলী মানুষ — কখনো ল্যাবে টমেটো পাতা নিয়ে গবেষণা করি,
              কখনো রান্নাঘরে নতুন রেসিপি নিয়ে পরীক্ষা করি। আমার দিন শুরু হয়
              এক কাপ দুধ চা দিয়ে আর শেষ হয় একটা ভালো বই দিয়ে।
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">
              আমি বিশ্বাস করি — ছোট ছোট আনন্দই আসল সম্পদ। বৃষ্টি, কাগজ-কলম,
              হাতে আঁকা কার্ড, আর প্রিয় মানুষদের হাসি।
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["curious", "researcher", "tea-person", "book-worm", "dreamer"].map((t) => (
                <span key={t} className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-rose/20">
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="favorites" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-hand text-2xl text-rose">a few of my favorite things</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-plum mt-1">ছোট ছোট প্রিয়</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {favorites.map((f) => (
            <div key={f.label} className="paper-card p-6 hover:-translate-y-1 hover:rotate-[-1deg] transition-all duration-300">
              <div className="text-5xl">{f.emoji}</div>
              <h3 className="font-display text-2xl font-semibold text-plum mt-3">{f.label}</h3>
              <p className="text-sm text-muted-foreground mt-1">{f.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-hand text-2xl text-rose">memory board</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-plum mt-1">পুরনো পাতার ছবি</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {gallery.map((g, i) => (
            <figure
              key={g.caption}
              className="paper-card p-3 hover:-translate-y-2 transition-all duration-500"
              style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 2}deg)` }}
            >
              <img src={g.src} alt={g.caption} width={1024} height={1024} loading="lazy" className="w-full aspect-square object-cover rounded-xl" />
              <figcaption className="font-hand text-center text-xl text-plum mt-2">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-hand text-2xl text-rose">little wins</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-plum mt-1">Projects &amp; Achievements</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projectsData.map((p) => (
            <article key={p.title} className="paper-card p-6 group relative flex flex-col justify-between overflow-hidden">
              <div>
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent}`} />
                <span className="text-xs uppercase tracking-widest text-rose font-bold">{p.tag}</span>
                <h3 className="font-display text-2xl font-bold text-plum mt-2">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{p.desc}</p>
              </div>
              <div className="mt-6">
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="inline-flex items-center text-rose text-sm font-semibold hover:underline group-hover:translate-x-1 transition-all"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="paper-card p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-10 -left-10 text-9xl opacity-10 rotate-12">💌</div>
          <div className="absolute -bottom-10 -right-10 text-9xl opacity-10 -rotate-12">🌷</div>
          <p className="font-hand text-2xl text-rose">psst… a secret</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-plum mt-1">A message from ******</h2>

          {!showMasud ? (
            <button
              onClick={() => setShowMasud(true)}
              className="mt-8 ribbon inline-flex items-center px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              💛 চিঠিটা খুলে দেখো
            </button>
          ) : (
            <div className="mt-8 animate-bloom">
              <p className="font-hand text-3xl md:text-4xl text-plum leading-snug">
                "প্রিয় Farhana,<br />
                তুমি এই পৃথিবীর সবচেয়ে সুন্দর কারণ —<br />
                যেদিন থেকে তুমি আছো, আমার প্রতিটা দিন একটু বেশি রঙিন।<br />
                <span className="text-rose">— তোমার ভালোবাসার মানুষ</span>"
              </p>
              <div className="mt-6 flex justify-center gap-3 text-3xl">
                <span className="animate-float">💛</span>
                <span className="animate-float" style={{ animationDelay: "0.5s" }}>🌸</span>
                <span className="animate-float" style={{ animationDelay: "1s" }}>💌</span>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
        <div className="text-center">
          <p className="font-hand text-2xl text-rose">stay in touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-plum mt-1">একটা চিঠি লিখে যাও</h2>
          <p className="mt-3 text-muted-foreground">তোমার কথা শুনতে ভালো লাগবে 🌷</p>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            
            try {
              const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
              });
              if (res.ok) {
                setSent(true);
                e.currentTarget.reset();
              }
            } catch (error) {
              console.error("Error submitting form", error);
            }
          }}
          className="mt-10 paper-card p-8 space-y-5"
        >
          <input type="hidden" name="access_key" value="f6410e31-3150-44e3-b298-8049c8a6574b" />

          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-sm font-semibold text-plum">তোমার নাম</span>
              <input required type="text" name="name" className="mt-1 w-full rounded-xl border border-input bg-background/70 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose/40" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-plum">ইমেইল</span>
              <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-input bg-background/70 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose/40" placeholder="you@example.com" />
            </label>
          </div>
          <label className="block">
            <span className="text-sm font-semibold text-plum">তোমার বার্তা</span>
            <textarea required name="message" rows={5} className="mt-1 w-full rounded-xl border border-input bg-background/70 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose/40" placeholder="Say something sweet…" />
          </label>

          {/* Spam protection */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <button type="submit" disabled={sent} className="ribbon w-full py-3.5 rounded-full font-semibold shadow-lg hover:scale-[1.02] transition disabled:opacity-70 disabled:cursor-not-allowed">
            {sent ? "পাঠানো হয়েছে 💌 — ধন্যবাদ!" : "চিঠি পাঠাও →"}
          </button>
        </form>
      </section>

      <footer className="mt-10 border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-hand text-2xl text-plum">Farhana's Little World</p>
          <p className="text-sm text-muted-foreground">Made with 💛 Farhana © 2026</p>
        </div>
      </footer>
    </div>
  );
}
