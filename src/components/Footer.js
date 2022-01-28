import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="container max-w-4xl mx-auto">
      <div className="mb-8 border-t border-stone-500">
        <div className="flex justify-between items-center text-lg pt-5">
          <h2 className="text-stone-300">Built with Next.js and Tailwind.</h2>
            <nav className="flex gap-1 space-x-6">
              <Link href="https://github.com/matheusimai">
                <a className="text-stone-300 justify-between flex items-center gap-1 underline decoration-stone-300/0 hover:decoration-stone-300/100 transition hover:delay-75">
                  <FaGithub />
                  <h2>GitHub</h2>
                </a>

              </Link>
              <Link href="https://www.linkedin.com/in/matheus-imai">
                <a className="text-stone-300 justify-between flex items-center gap-1 underline decoration-stone-300/0 hover:decoration-stone-300/100 transition hover:delay-75">
                  <FaLinkedin />
                  <h2>LinkedIn</h2>
                </a>
              </Link>
            </nav>
        </div>
        
        <div className="flex text-sm text-stone-400 justify-center pt-5">
          <p>© {new Date().getFullYear()} Matheus Imai. All rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;