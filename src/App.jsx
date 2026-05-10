
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

function App() {

  const { scrolled, setScrolled} = useState(false);
  useEffect( ()=>{
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll",handleScroll);
  },[])

  return (
    <div className="min-h-screen bg-slate-950 m-0 p-0">
      <Navbar scrolled={scrolled}/>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
