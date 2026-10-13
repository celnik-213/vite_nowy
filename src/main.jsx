import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Produkt from './components/Produkt.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Produkt />
    <Produkt />
  </StrictMode>,
)
