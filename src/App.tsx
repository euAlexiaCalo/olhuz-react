import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import FunctionalitiesPage from './pages/FunctionalitiesPage/FunctionalitiesPage'
import FaqPage from './pages/FaqPage/FaqPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/funcionalidades" element={<FunctionalitiesPage />} />
        <Route path="/duvidas-frequentes" element={<FaqPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
