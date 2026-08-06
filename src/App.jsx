// import { useState } from 'react'
import { Routes, Route } from 'react-router';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { Favorite } from './pages/Favorite';
import { Contact } from './pages/Contact';
import { ErrorPage } from './pages/ErrorPage';
import './App.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
