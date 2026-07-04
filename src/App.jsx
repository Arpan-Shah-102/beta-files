// import { useState } from 'react'
import { Routes, Route } from 'react-router';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage'
import { ErrorPage } from './pages/ErrorPage'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
