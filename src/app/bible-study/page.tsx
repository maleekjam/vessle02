import Header from "@/app/_components/header";
import Container from "@/app/_components/container";
import Link from "next/link";

export default function BibleStudy() {
  const studies = [
    {
      id: 1,
      title: "Genesis Overview",
      description: "Explore the creation story and foundations of faith.",
      date: "2025-01-10",
    },
    {
      id: 2,
      title: "Psalms & Prayers",
      description: "Understanding worship and prayer through the Psalms.",
      date: "2025-01-15",
    },
    {
      id: 3,
      title: "Gospel of Matthew",
      description: "Deep dive into the life and teachings of Jesus.",
      date: "2025-01-20",
    },
    {
      id: 4,
      title: "Romans Study",
      description: "Paul's epistle on faith, grace, and redemption.",
      date: "2025-01-25",
    },
  ];

  return (
    <main>
      <Header />
      <Container>
        <div className="max-w-4xl mx-auto py-12">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-4">
            Bible Study
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            Deepen your understanding of scripture through structured study guides and reflections.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studies.map((study) => (
              <article
                key={study.id}
                className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-md dark:hover:bg-slate-800 transition-all"
              >
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {study.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {study.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500 dark:text-slate-500">
                    {new Date(study.date).toLocaleDateString()}
                  </span>
                  <Link
                    href={`/bible-study/${study.id}`}
                    className="px-4 py-2 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:opacity-90 transition-opacity text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              How to Use This Study Guide
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                1. <strong>Read</strong> the assigned scripture passages carefully.
              </p>
              <p>
                2. <strong>Reflect</strong> on the meaning and how it applies to your life.
              </p>
              <p>
                3. <strong>Discuss</strong> with others or journal your insights.
              </p>
              <p>
                4. <strong>Apply</strong> what you've learned to your daily walk of faith.
              </p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}