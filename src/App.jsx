import './App.css'

import Home from "./components/Home"
import Nosotros from "./components/Nosotros"
import Divisor from "./components/Divisor"
import Productos from "./components/Productos"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#2b1055] to-[#7597de] min-h-screen overflow-x-hidden" >
        <Home />
        <Nosotros />
        <Divisor />
        <Productos />
        <Contacto />
        <Footer />
      </div >
    </>
  )
}

export default App
