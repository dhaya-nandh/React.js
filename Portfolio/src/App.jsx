import styles from "./App.module.css"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About/About"
import Education from "./components/Education/Education"
import Technicalskills from "./components/Education/Technicalskills"
import Project from "./components/Project/Project"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Technicalskills/>
      <Project/>
      <Contact/>
      </div>
  )
}

export default App