import Image from 'next/image';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main>
        <section className="py-20 text-center bg-gray-100 dark:bg-gray-900"> {}
        <div className="mb-8">
            <Image
              src="/profilePic.png"
              alt="Luise Haller"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
          </div>
          <h1 className="text-5xl font-bold mb-2">Luise Haller</h1> {}
          <p className="text-xl text-gray-600 dark:text-gray-400">Electrical Engineering Student | Robotics & Quantum Computing Enthusiast</p>
        </section>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}