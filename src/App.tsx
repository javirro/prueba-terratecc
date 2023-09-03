import React from 'react'
import Header from './components/Header'
import './App.css'
import AsideNavbar from './components/AsideNavbar'
import MainSection from './components/MainSection'

function App() {
  return (
     <main className="app">
     <AsideNavbar />
        <Header />
        <MainSection />
      </main>
  )
}

export default App
