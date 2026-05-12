import Link from "next/link";

export default function Nav() {
  return (
    // JSX here
    <nav className="flex items-center">
      {/* TODO: give better classNames */}
      <div className="font-bold text-lg">
        {/* TODO: replace text Link with favicon? make size smaller e.g. text-md? */}
        <Link href="/">ka.</Link>
      </div>
      <div className="nav-links flex items-center justify-between">
        {/* TODO: might be more semantic to have as a list with ul... */}
        <Link href="/about">about</Link>
        <Link href="/work">work</Link>
        <Link href="/writing">writing</Link>
        <Link href="/contact">contact</Link>
      </div>
    </nav>
  );
}
