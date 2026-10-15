import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Produkt from './components/Produkt.jsx'
import Galeria from './components/Galeria.jsx'
import WyborKoloru from './components/WyborKoloru.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Produkt />
    <Produkt />
      <h1>Rozdział 7</h1>
      <Galeria />
      <h1>Rozdział 8</h1>
      <WyborKoloru />
  </StrictMode>,
)
