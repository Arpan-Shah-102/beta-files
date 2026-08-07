import { useState } from 'react'
import { Routes, Route } from 'react-router';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { Favorite } from './pages/Favorite';
import { Contact } from './pages/Contact';
import { ErrorPage } from './pages/ErrorPage';
import './App.css';

function App() {
  const favoriteItems = useState(JSON.parse(localStorage.getItem('favoriteItems') || []));

  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
            favoriteItems={favoriteItems}
            />
          }
        />
        <Route 
          path="/favorite" 
          element={
          <Favorite
            favoriteItems={favoriteItems}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
