import { useEffect, useState } from "react"
import './App.css'

function App() {

  const [estrellas, setEstrellas] = useState(0)
  const [luna, setLuna] = useState(0)
  const [monAtras, setMonAtras] = useState(0)
  const [monDel, setMonDel] = useState(0)
  const [titulo, setTitulo] = useState(0)
  const [btn, setBtn] = useState(0)
  const [nav, setNav] = useState(0)



  window.addEventListener('scroll', () => {
    setEstrellas(window.scrollY)
    setLuna(window.scrollY)
    setMonAtras(window.scrollY * 0.2)
    setMonDel(window.scrollY * 0)
    setTitulo(window.scrollY * 1.5)
    setBtn(window.scrollY)
    setNav(window.scrollY * 0.3)
  })




  return (
    <>
      <div className="bg-gradient-to-b from-[#2b1055] to-[#7597de] min-h-screen overflow-x-hidden" >
        <header className="absolute top-0 left-0 w-full flex py-4 px-0 md:px-20 xl:px-44 justify-center md:justify-between md:items-center font-bold text-sm sm:text-xl md:text-2xl z-50" style={{ top: `${nav}px` }} >
          <div className="">
            <a href="#" className="text-white font-bold md:text-4xl uppercase md:tracking-[.25em]"><img src="../src/assets/logo.svg" alt="logo" className="md:mt-1 w-10 md:w-28 " /></a>
          </div>
          <ul className="flex justify-center items-center" >
            <li className="ml-4"><a href="#" className="py-2 sm:px-4  text-white rounded-3xl md:hover:bg-white md:hover:text-[#2b1055]">Inicio</a></li>
            <li className="ml-4"><a href="#Nosotros" className="py-2 sm:px-4  text-white rounded-3xl md:hover:bg-white md:hover:text-[#2b1055]">Nosotros</a></li>
            <li className="ml-4"><a href="#Productos" className="py-2 sm:px-4   text-white rounded-3xl md:hover:bg-white md:hover:text-[#2b1055]">Productos</a></li>
            <li className="ml-4"><a href="#Contacto" className="py-2 sm:px-4   text-white rounded-3xl md:hover:bg-white md:hover:text-[#2b1055]">Contacto</a></li>
          </ul>
        </header>
        <section className="relative w-full h-screen p-24 flex justify-center items-center 
                            before:absolute before:bottom-0 before:w-full before:h-24 before:bg-gradient-to-b from-transparent to-[#1c0522] before:z-50 overflow-hidden">
          <img src="../src/assets/bg/stars.png" alt="" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" style={{ left: `${estrellas}px` }} />
          <img src="../src/assets/bg/moon.png" alt="" className="absolute top-0 left-0 w-full h-full object-cover mix-blend-screen pointer-events-none" style={{ top: `${luna}px` }} />
          <img src="../src/assets/bg/mountains_behind.png" alt="" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" style={{ top: `${monAtras}px` }} />
          <h2 className="absolute text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl 
            xl:text-9xl  2xl:text-[115px] z-10 font-bold mb-20" style={{ marginRight: `${titulo}px`, marginTop: `${titulo}px` }}>Valhalla <span className="flex 2xl:inline-flex px-9 sm:px-16  md:px-20 lg:px-24 xl:px-36   2xl:px-0">Art</span></h2>
          <img src="../src/assets/bg/mountains_front.png" alt="" className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none " style={{ top: `${monDel}px` }} />
        </section>

        <div className="relative p-10 sm:p-16 lg:p-24 bg-[#1c0522] 2xl:h-screen w-full flex justify-center">
          <div className="w-full xl:w-2/3 text-center">
            <h2 className="text-white mb-2 sm:mb-16 md:mb-0 lg:mb-3 text-5xl sm:text-6xl font-bold py-10 sm:py-0  md:py-10 x:py-24" id="Nosotros"> Nosotros</h2>
            <p className="text-white text-sm sm:text-[15px] md:text-lg lg:text-xl">Nuestra empresa se dedica a la creación de adornos y accesorios utilizando resina epoxi.
              En nuestra empresa, nos apasiona la creación de piezas únicas y hermosas que reflejen la belleza de la resina epoxi.
              <br />
              <br />
              Nuestro equipo está formado por artistas talentosos y apasionados que tienen una gran experiencia en la creación de joyería de alta calidad.
              Creemos que la joyería es una forma de expresión personal y que cada pieza debe ser única y significativa para quien la use. Por eso, nos enfocamos en la creación de piezas que sean exclusivas y reflejen la personalidad de quien las usa.
              <br />
              <br />
              Utilizamos materiales de alta calidad y técnicas innovadoras en nuestro proceso de creación de joyería y accesorios. Nos aseguramos de que cada pieza sea duradera y esté diseñada para durar mucho tiempo.
              Nos enorgullece crear piezas hermosas y significativas para nuestros clientes. <br />
              <br />
              Nos encantaría trabajar contigo para crear una pieza de joyería que refleje tu estilo y personalidad. No dudes en contactarnos si tienes alguna pregunta o si te gustaría hablar sobre un proyecto de joyería personalizado.</p>
          </div>
        </div>

        <div className="w-full h-20 sm:h-40 md:h-52 lg:h-72 xl:h-80 relative bg-fixed bg-cover bg-clip-border fondo">
          <img src="../src/assets/bg/mont.png" alt="rio" className="bg-fixed absolute top-[-30px] object-cover" />
          <img src="../src/assets/bg/Trees.png" alt="rio" className="bg-cover bg-clip-border absolute top-[-50px] bottom-0 object-cover" />
        </div>

        <div className="relative py-24 px-10 md:px-20 lg:px-40 bg-[#1c0522] text-center  w-full text-white">
          <div className="inline-block justify-center">
            <h2 className="text-white mb-2 sm:mb-16 md:mb-0 xl:mb-3 text-5xl sm:text-6xl font-bold py-10 sm:py-0  md:py-10 x:py-24" id="Productos">Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20 w-full">
              <div className="inline-block ">
                <div className=" bg-white w-ful h-full">
                  <div className="producto1 bg-cover w-ful h-full"></div>
                  {/* <img src="../src/assets/productos/llaveros.png" alt="producto" /> */}
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Titulo</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src="../src/assets/productos/corazon.png" alt="producto" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Titulo</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src="../src/assets/productos/domino.png" alt="producto" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Titulo</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src="../src/assets/productos/triangulo1.png" alt="producto" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Titulo</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src="../src/assets/productos/joyero.png" alt="producto" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Titulo</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src="../src/assets/productos/triangulo2.png" alt="producto" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Titulo</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src="../src/assets/productos/lapicero.png" alt="producto" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Titulo</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src="../src/assets/productos/llaveros2.png" alt="producto" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Titulo</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src="../src/assets/productos/portavasos.png" alt="producto" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Titulo</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src="../src/assets/productos/separa.png" alt="producto" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Titulo</p>
                </div>
              </div>
              <div className="inline-block ">
                <div className=" bg-white ">
                  <img src="../src/assets/productos/triangulo3.png" alt="producto" />
                </div>
                <div className="p-6 sm:p-10 text-2xl sm:text-2xl">
                  <p>Titulo</p>
                </div>
              


            </div>
          </div>
        </div>
      </div>



      <div className="p-10 md:p-24 bg-[#4C4D92] text-center h-screen w-full fondo-contacto text-white bg-cover ">
        <div>
          <h2 className="text-white mb-2 sm:mb-16 md:mb-0 xl:mb-3 text-5xl sm:text-6xl font-bold py-10 sm:py-0 md:py-10 xl:py-24" id="Contacto">Contacto</h2>
        </div>
        <div className="xl:flex w-full xl:justify-center px-1 2xl:px-56 sm:inline-flex sm:justify-center">
          <div className="text-left text-sm md:text-xl lg:text-2xl pr-2 md:pr-24 md:w-2/4">
            <p className="pb-8 2xl:pb-10">Estar en contacto es fácil!</p>
            <p className="pb-8 2xl:pb-10">Escribenos sobre cualquier proyecto. <br /> Nos encantaria trabajar contigo</p>
            <p className="pb-2 xl:pb-16 2xl:pb-20">(506) 7012-7120</p>
            

            <p className="pb-4 2lg:pb-6">Encuéntranos aquí!</p>

            <p className="pb-4 lg:pb-6">valhalla.artcr@gmail.com</p>
            <div>
              <div className="flex justify-start">
                <div className="md:px-4 pb-10 md:pb-0 ">
                  <a href="https://www.instagram.com/valhalla_art_cr/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg></a>
                </div>
                <div className="px-4">
                  <a href="https://www.facebook.com/valhallaartcr" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-2/4">
            <form action="https://formsubmit.co/valhalla.artcr@gmail.com" method="post" className="flex flex-col text-black">
              <input type="text" placeholder="Nombre" className="mb-10 w-full h-10 p-4" name="name" required />
              <input type="email" placeholder="Correo" className="mb-10 w-full h-10 p-4" name="email" required />
              <textarea name="message" id="" cols="30" rows="10" placeholder="Mensaje" className="mb-10 xl:mb-14 p-4 h-28" required type="text" ></textarea>
              <button className=" bg-white rounded-full w-40 h-10" type="submit">Enviar</button>
            </form>
          </div>
        </div>

      </div>


      <footer className="bg-[#1C0522] text-white font-bold pt-40 pb-10 w-full" >
        <div className="lg:flex lg:justify-around ">
          <div>
            <h2 className="text-center tracking-widest text-4xl lg:text-5xl md:text-6xl">Valhalla Art</h2>
          </div>
          <div className="flex items-center text-md md:text-lg lg:text-xl justify-center mt-5 lg:mt-0">
            <ul className="flex ">
              <li className=" px-2 "><a href="#">Inicio</a></li>
              <li className=" px-2 "><a href="#Nosotros">Nosotros</a></li>
              <li className=" px-2 "><a href="#Productos">Productos</a></li>
              <li className=" px-2 "><a href="#Contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
        <hr className="border-white m-10" />
        <div>
          <div className="pt-0 md:pt-6 text-center text-md font-normal">
            <p>Valhalla Art 2023 © All rights reserved</p>
            <p>Developed by Jocsan Morera</p>
          </div>
        </div>
      </footer>
    </div >
    </>
  )
}

export default App
