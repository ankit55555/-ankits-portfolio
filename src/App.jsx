import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Work from './components/Work.jsx'
import Background from './components/Background.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Background />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
