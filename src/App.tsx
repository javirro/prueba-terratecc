
import Header from './components/Header'
import AsideNavbar from './components/AsideNavbar'
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <main className="app-container">
      <AsideNavbar />
      <section className="app">
        <Header />
        <MainSection />
        <Footer />
      </section>
    </main>
  )
}

export default App
