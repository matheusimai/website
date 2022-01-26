import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="container max-w-4xl mx-auto pb-10">
      <h1 className="text-3xl font-bold text-stone-200">Oooops!</h1>
      <h2 className="text-xl text-stone-200">The page cannot be found.</h2>
      <p className="text-md text-stone-200">Let's go back to the <Link href="/"><a className="text-stone-200 underline decoration-stone-300/0 hover:decoration-stone-200/100 transition hover:delay-75">Homepage</a></Link>?</p>
    </div>
  )
}

export default NotFound;