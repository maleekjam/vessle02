import Header from "@/app/_components/header";
import Container from "@/app/_components/container";
import Link from "next/link";

const games = [
  {
    slug: "memory-verse",
    title: "Memory Verse",
    description: "Practice memorizing short scripture passages with spaced repetition.",
  },
  {
    slug: "verse-quiz",
    title: "Verse Quiz",
    description: "Test your knowledge with quick multiple-choice quizzes on Bible verses.",
  },
  {
    slug: "daily-reflection",
    title: "Daily Reflection",
    description: "Short guided prompts to help reflect on today's verse.",
  },
];

export default function GamesPage() {
  return (
    <main>
      <Header />
      <Container>
        <div className="max-w-4xl mx-auto py-12">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-4">
            Games & Devotionals
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Interactive tools to help engage with scripture — quizzes, memory practice, and short reflections.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {games.map((g) => (
              <article
                key={g.slug}
                className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {g.title}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {g.description}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/games/${g.slug}`}
                    className="text-sm px-3 py-2 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:opacity-90 transition"
                  >
                    Open
                  </Link>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Estimated 2–10 min</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}