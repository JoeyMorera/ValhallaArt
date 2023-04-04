import corazon from '../../src/assets/productos/corazon.png'
import domino from '../../src/assets/productos/domino.png'
import joyero from '../../src/assets/productos/joyero.png'
import lapicero from '../../src/assets/productos/lapicero.png'
import llaveros from '../../src/assets/productos/llaveros.png'
import llaveros2 from '../../src/assets/productos/llaveros2.png'
import portavasos from '../../src/assets/productos/portavasos.png'
import separa from '../../src/assets/productos/separa.png'
import triangulo1 from '../../src/assets/productos/triangulo1.png'
import triangulo2 from '../../src/assets/productos/triangulo2.png'
import triangulo3 from '../../src/assets/productos/triangulo3.png'

const Productos = () => {
  return (
    <>
      <div className="relative py-24 px-10 md:px-20 lg:px-40 bg-[#1c0522] text-center  w-full text-white">
          <div className="inline-block justify-center">
            <h2 className="text-white mb-2 sm:mb-16 md:mb-0 xl:mb-3 text-5xl sm:text-6xl font-bold py-10 sm:py-0  md:py-10 x:py-24" id="Productos">Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20 w-full">
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src={llaveros} alt="llaveros" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Llaveros</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src={corazon} alt="corazon" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Corazon</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src={domino} alt="domino" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Domino</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src={triangulo1} alt="triangulo1" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Piramide</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src={joyero} alt="joyero" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Joyero</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src={triangulo2} alt="triangulo2" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Piramide</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src={lapicero} alt="lapicero" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Lapicero</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src={llaveros2} alt="llaveros2" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Llaveros</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src={portavasos} alt="portavasos" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Portavasos</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src={separa} alt="separa" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Separa Libros</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src={triangulo3} alt="triangulo3" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Piramide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Productos