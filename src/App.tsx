import { Header } from "./components/Header"
import { Experience } from "./components/Experience"
import { ProjectSection } from "./components/Projects"
import { AboutMe } from "./components/AboutMe"
import { Hero } from "./components/HeroSection"
import { Footer } from "./components/Footer"



function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Experience></Experience>
      <ProjectSection></ProjectSection>
      <AboutMe></AboutMe>
      <Footer></Footer>
    </>
  )
}

export default App