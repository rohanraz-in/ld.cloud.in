import Link from 'next/link'

const links = [
  { href: '/', label: 'প্রচ্ছদ' },
  { href: '/#lekha', label: 'লেখা' },
  { href: '/about', label: 'আমার কথা' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-5">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight">
          কলম<span className="text-primary">কথা</span>
        </Link>
        <nav aria-label="প্রধান মেনু">
          <ul className="flex items-center gap-4 text-sm sm:gap-6 sm:text-base">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
