import Link from 'next/link'

export default function Nav() {
    return (
        // JSX here
        <nav>
            {/* TODO: give better classNames */}
            <div className="logo"> 
                <Link href="/">ka.</Link>
                {/* TODO: replace text Link with favicon? */}
            </div>
            <div className="nav-links">
                <Link href="/about">about</Link>
                <Link href="/work">work</Link>
                <Link href="/writing">writing</Link>
                <Link href="/contact">contact</Link>
            </div>
            
        </nav>
        
    );
}