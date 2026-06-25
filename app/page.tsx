const links = [
  {
    label: 'Blog',
    href: 'https://blog.ignaulin.com',
    icon: '📝',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/rafa-ignaulin',
    icon: '💼',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/rafaignaulin',
    icon: '🐙',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@RafaelIgnaulin',
    icon: '▶️',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rafaignaulin/',
    icon: '📸',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-[400px] text-center">
        {/* Photo placeholder — uncomment and add src when ready */}
        {/* <Image src="/photo.jpg" alt="Rafael Ignaulin" width={96} height={96} className="rounded-full mx-auto mb-6" /> */}

        <h1 className="text-3xl font-extrabold mb-2">Rafael Ignaulin</h1>
        <p className="text-muted mb-10">
          Senior Data Engineer · Building from anywhere
        </p>

        <nav className="flex flex-col gap-3" aria-label="Links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 rounded-lg border border-[#333] text-center font-semibold transition-all duration-200 hover:border-accent hover:text-accent"
            >
              <span className="mr-2">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}
