import Link from "next/link";

export default function Nav() {
  return (
    <nav className="px-4">
      <div className="container mx-auto flex items-center justify-between">
      <div className="font-bold text-lg">
        {/* TODO: replace text Link with favicon? make size smaller e.g. text-md? */}
        <Link href="/">ka.</Link>
      </div>
      <div className="flex items-center">
        {/* note: no need to remove list styles as Tailwind has Preflight as its CSS reset. */}
        <ul className="flex gap-6">
          <li><Link href="/about">about</Link></li>
          <li><Link href="/work">work</Link></li>
          <li><Link href="/writing">writing</Link></li>
          <li><Link href="/contact">contact</Link></li>
        </ul>
      </div>
      </div>
    </nav>
  );
}
