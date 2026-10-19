import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Produkt from './components/Produkt.jsx'
import Galeria from './components/Galeria.jsx'
import WyborKoloru from './components/WyborKoloru.jsx'
import Formularz from "./components/Formularz.jsx";
import ListaZakupow from "./components/ListaZakupow.jsx"
import FormularzZapisu from "./components/FormularzZapisu.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Produkt />
    <Produkt />
      <h1>Rozdział 7</h1>
      <Galeria />
      <h1>Rozdział 8</h1>
      <WyborKoloru />
      <h1>Rozdział 9</h1>
      <Formularz />
      <h1>Rozdział 10</h1>
      <ListaZakupow />
      <h1>Rozdział 11</h1>
    <FormularzZapisu/>
  </StrictMode>,
)
