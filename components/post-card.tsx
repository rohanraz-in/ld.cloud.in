import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '@/lib/posts'

export function PostMeta({ post }: { post: Post }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
      <span className="font-medium text-primary">{post.category}</span>
      <span aria-hidden="true">·</span>
      <time>{post.date}</time>
      <span aria-hidden="true">·</span>
      <span>{post.readTime} পড়া</span>
    </p>
  )
}

export function FeaturedPost({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
      <Link
        href={`/posts/${post.slug}`}
        className="relative aspect-[16/10] overflow-hidden rounded-lg md:w-3/5"
      >
        <Image
          src={post.image || '/placeholder.svg'}
          alt={post.imageAlt}
          fill
          priority
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-col gap-3 md:w-2/5">
        <PostMeta post={post} />
        <h2 className="font-serif text-3xl font-bold leading-snug text-balance md:text-4xl">
          <Link href={`/posts/${post.slug}`} className="hover:text-primary">
            {post.title}
          </Link>
        </h2>
        <p className="leading-relaxed text-muted-foreground text-pretty">{post.excerpt}</p>
        <Link
          href={`/posts/${post.slug}`}
          className="mt-1 font-medium text-primary underline-offset-4 hover:underline"
        >
          পুরোটা পড়ুন →
        </Link>
      </div>
    </article>
  )
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col gap-4">
      <Link
        href={`/posts/${post.slug}`}
        className="relative aspect-[16/10] overflow-hidden rounded-lg"
      >
        <Image
          src={post.image || '/placeholder.svg'}
          alt={post.imageAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <PostMeta post={post} />
      <h3 className="font-serif text-xl font-semibold leading-snug text-balance">
        <Link href={`/posts/${post.slug}`} className="hover:text-primary">
          {post.title}
        </Link>
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{post.excerpt}</p>
    </article>
  )
}
