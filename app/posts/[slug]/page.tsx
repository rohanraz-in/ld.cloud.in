import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PostCard, PostMeta } from '@/components/post-card'
import { getPost, posts } from '@/lib/posts'

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <div className="mx-auto max-w-5xl px-5">
      <article className="mx-auto max-w-2xl py-12 md:py-16">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
          ← সব লেখা
        </Link>
        <header className="mt-6 flex flex-col gap-4">
          <PostMeta post={post} />
          <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-5xl">
            {post.title}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{post.excerpt}</p>
        </header>
        <div className="relative my-10 aspect-[16/10] overflow-hidden rounded-lg">
          <Image
            src={post.image || '/placeholder.svg'}
            alt={post.imageAlt}
            fill
            priority
            sizes="(min-width: 768px) 672px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 text-lg leading-loose">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <section className="border-t border-border pt-12">
        <h2 className="mb-8 font-serif text-2xl font-bold">আরও পড়ুন</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
