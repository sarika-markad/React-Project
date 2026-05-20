import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { getRandomCatFact } from './services/catService'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import FactPage from './pages/FactPage'
import NavBar from './components/NavBar'
import { CatFactsProvider } from './context/CatFactsContext'
import FavouritesPage from './pages/FavouritesPage'

function App() {


  return (
    <>
      <CatFactsProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<FactPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>

        </BrowserRouter>
      </CatFactsProvider>

    </>
  )
}

export default App