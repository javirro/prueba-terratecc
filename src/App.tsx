import React from 'react'
import Header from './components/Header'
import './App.css'
import AsideNavbar from './components/AsideNavbar'
import MainSection from './components/MainSection'

function App() {
  return (
    <>
     <AsideNavbar />
    
      <main className="app">
        <Header />
        <MainSection />
      </main>
    </>
  )
}

export default App
