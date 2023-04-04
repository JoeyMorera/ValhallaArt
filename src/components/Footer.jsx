import React from 'react'

const Footer = () => {
  return (
    <>
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
    </>
  )
}

export default Footer