import React from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="sticky text-xl top-0 py-10 items-center">
      <div className="container max-w-4xl mx-auto pb-2">
        <nav className="flex justify-between items-center">
          <div>
            <Link href="/">
              <a className="text-stone-200 underline decoration-stone-300/0 hover:decoration-stone-200/100 transition hover:delay-75">
                <h1>MATHEUS IMAI.</h1>
              </a>
            </Link>
          </div>

          <div className="flex justify-evenly items-center gap-10">
            <Link href="/projects">
              <a className="text-stone-200 underline decoration-stone-300/0 hover:decoration-stone-200/100 transition hover:delay-75">
                <h1>Projects</h1>
              </a>
            </Link>
          
            <Link href="https://github.com/matheusimai/website">
              <a className="text-stone-200 justify-between flex items-center gap-1 underline decoration-stone-200/0 hover:decoration-stone-200/100 transition hover:delay-75">
                <FaGithub />
                <h1>Source</h1>
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;