import Link from "next/link"

export default function MyHeader() {
    return (
        <header className="top-0 w-full z-50 py-3 bg-foreground">
          <nav className="flex items-center justify-center ">
            <ul className="flex flex-row gap-16 text-background">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#about-me">About me</Link>
              </li>
              <li>
                <Link href="/explore/#projects">Projects</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
              <li>Explore</li>
            </ul>
          </nav>
        </header>
    )
}