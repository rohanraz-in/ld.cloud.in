import { FeaturedPost, PostCard } from '@/components/post-card'
import { posts } from '@/lib/posts'

export default function HomePage() {
  const [featured, ...rest] = posts

  return (
    <div className="mx-auto max-w-5xl px-5">
      <section className="py-14 md:py-20">
        <p className="mb-3 text-sm font-medium text-primary">একটি বাংলা ব্লগ</p>
        <h1 className="max-w-2xl font-serif text-4xl font-bold leading-tight text-balance md:text-5xl">
          জীবনের ছোট ছোট গল্প, কলমের ভাষায়।
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          স্মৃতি, ভ্রমণ, বই আর লেখালেখি নিয়ে আমার ভাবনা — এক কাপ চায়ের সঙ্গে পড়ার মতো।
        </p>
      </section>

      <section aria-label="নির্বাচিত লেখা" className="pb-16">
        <FeaturedPost post={featured} />
      </section>

      <section id="lekha" className="scroll-mt-8 border-t border-border pt-12">
        <h2 className="mb-8 font-serif text-2xl font-bold">সাম্প্রতিক লেখা</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}
