import Intro from '@/app/components/Intro';
import Navbar from '@/app/components/Navbar';
import About from '@/app/components/About';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
