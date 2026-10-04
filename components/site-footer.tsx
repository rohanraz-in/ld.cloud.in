import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-serif font-semibold text-foreground">কলমকথা</span> — মনের কথা, কলমের ভাষায়।
        </p>
        <p>
          © ২০২৬ · <Link href="/about" className="underline-offset-4 hover:underline">আমার কথা</Link>
        </p>
      </div>
    </footer>
  )
}
