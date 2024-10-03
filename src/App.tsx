
import './App.css'
import { Hero } from './components/layout/Hero/Hero'
import Navbar from './components/layout/NavBar/Navbar'
import FeaturesSection from './components/layout/Hero/FeaturesSection'
import Footer from './components/layout/Hero/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection/>
      <Footer></Footer>
    </>
  )
}

export default App
