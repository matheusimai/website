import React from 'react'
import Image from 'next/image'
import profilePic from '../public/images/profile.jpg'
import Head from 'next/head'


const Home = () => {
  return (
    <>
    <Head>
      <title>Matheus Imai | Home</title>
    </Head>

    <article className="flex flex-col items-center">
      <section className="container max-w-4xl mx-auto pb-10 ">
        <div>
          <h1 className="text-3xl font-bold text-stone-200">Hello! I'm Matheus, a developer based in Brazil.</h1>
        </div>
          <p className="text-lg text-stone-200 mt-6 my-1">I'm an Architect who loves gaming, music & photograph, that just dived into the world of programming.</p>
          <p className="text-lg text-stone-200 my-1">I've started my journey by messing around with HTML and CSS, recently took a course on JavaScript and React. I'm also curious about Mobile Development!</p>
          <p></p>
        <div>

        </div>
      </section>

      <section className="justify-end mx-auto mb-4">
        <Image
          priority
          width={200}
          height={200}
          alt="avatar"
          src={profilePic}
          className="rounded-full"
        />
      </section>
    </article>
    </>
  )
}

export default Home;