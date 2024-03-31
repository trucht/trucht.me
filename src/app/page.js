import Hero from '@/app/components/Hero';
import Header from '@/app/components/Header';
import About from '@/app/components/About';
import Skills from '@/app/components/Skills';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import Experience from '@/app/components/Experience';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Skills />
      <Experience/>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
