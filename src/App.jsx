import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StarField from './components/StarField'
import './App.css'

function App() {
  return (
    <>
      <StarField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Leadership />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
