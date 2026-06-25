import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-accent">404</h1>
        <p className="text-xl mb-8 text-muted">Page not found</p>
        <Link
          href="/"
          className="inline-block py-3 px-6 rounded-lg border border-[#333] font-semibold transition-all duration-200 hover:border-accent hover:text-accent"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
