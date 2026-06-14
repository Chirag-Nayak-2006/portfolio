import Link from "next/link"

export default function MyFooter() {
    return (
        <footer className="w-full py-2">
          <section id="contact" className="flex items-center justify-center">
            <ul className="flex flex-row gap-15 px-5 py-0.5 bg-foreground rounded-lg text-background">
              <li>
                <Link href="https://github.com/Chirag-Nayak-2006" target="_blank">GitHub</Link>
              </li>
              <li>mchiragnayak@gmail.com</li>
              <li>
                <Link href="https://www.linkedin.com/in/chirag-m-nayak/" target="_blank">LinkedIn</Link>
              </li>
              
            </ul>
          </section>
        </footer>
    )
}