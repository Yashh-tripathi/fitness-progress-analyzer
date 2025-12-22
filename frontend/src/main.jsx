import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FitnessProvider } from './context/FitnessContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FitnessProvider>
      <App />
    </FitnessProvider>
  </BrowserRouter>,
)
