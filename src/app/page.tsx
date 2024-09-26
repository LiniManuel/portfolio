import Head from "next/head";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manuel Lini | Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Manuel Lini, a frontend developer skilled in React, Next.js, and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100">
        <Navbar />
        <main>
          <Hero />
          <AboutMe />
          <Skills />
        </main>
        <Footer />
      </div>
    </>
  );
}
