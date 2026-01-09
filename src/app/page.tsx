import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
// import { Cover } from "./_components/cover-page";
import Header from "./_components/header";

export default function Home() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Header />
      {/* <Cover /> */}
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>

      <Container>
        <section id="about" className="max-w-3xl mx-auto py-12">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
            About Vessle
          </h2>

          <div className="prose dark:prose-invert max-w-none space-y-6 text-lg text-slate-700 dark:text-slate-300">
            {/* <p>
              Vessle is a platform dedicated to sharing biblical insights and spiritual reflections.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8">
              Our Mission
            </h3>
            <p>
              We aim to provide a space for thoughtful discussion and exploration of scripture and faith.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8">
              Contact Us
            </h3>
            <p>
              Have questions? Reach out to us at info@vessle.com
            </p> */}
          </div>
        </section>
      </Container>
      
      <Container>
        <section id="social-media" className="max-w-3xl mx-auto py-12">
          <h2 className="text-4xl font-bold mb-6">Connect With Us</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            Follow Vessle on social media to stay updated with the latest content.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">𝕏</span>
                <span className="font-semibold text-slate-900 dark:text-white">Twitter</span>
              </div>
            </a>

            <a
              href="https://www.instagram.com/vessle02"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">📷</span>
                <span className="font-semibold text-slate-900 dark:text-white">Instagram</span>
              </div>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">f</span>
                <span className="font-semibold text-slate-900 dark:text-white">Facebook</span>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">in</span>
                <span className="font-semibold text-slate-900 dark:text-white">LinkedIn</span>
              </div>
            </a>
          </div>
        </section>
      </Container>
    </main>
  );
}