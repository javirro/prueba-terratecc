import { useState } from 'react'
import Header from './components/Header'
import AsideNavbar from './components/AsideNavbar'
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  return (
    <main className="app-container">
      <AsideNavbar isHovered={isHovered} setIsHovered={setIsHovered} />
      <section className={ !isHovered  ? 'middle-section-container' : 'middle-section-container-to-right' }>
        <Header />
        <MainSection />
        <Footer />
      </section>
    </main>
  )
}

export default App
