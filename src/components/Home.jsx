import { useState } from "react"

import moon from '../../src/assets/bg/moon.png'
import stars from '../../src/assets/bg/stars.png'
import mtBeh from '../../src/assets/bg/mountains_behind.png'
import mtFront from '../../src/assets/bg/mountains_front.png'

const Home = () => {
    const [nav, setNav] = useState(0)
    const [estrellas, setEstrellas] = useState(0)
    const [luna, setLuna] = useState(0)
    const [monAtras, setMonAtras] = useState(0)
    const [monDel, setMonDel] = useState(0)
    const [titulo, setTitulo] = useState(0)

    window.addEventListener('scroll', () => {
        setNav(window.scrollY * 0.5)
        setEstrellas(window.scrollY)
        setLuna(window.scrollY)
        setMonAtras(window.scrollY * 0.2)
        setMonDel(window.scrollY * 0)
        setTitulo(window.scrollY * 1.5)
    })
    return (
        <>
            <header className="absolute top-0 left-0 w-full flex py-4 px-0 md:px-20 xl:px-44 justify-center md:justify-between md:items-center font-bold text-sm sm:text-xl md:text-2xl z-50" style={{ top: `${nav}px` }} >
                <div className="">
                    <a href="#" className="text-white font-bold md:text-4xl uppercase md:tracking-[.25em]">
                        <img src="../src/assets/logo.svg" alt="logo" className="md:mt-1 w-10 md:w-28 " />
                    </a>
                </div>
                <ul className="flex justify-center items-center" >
                    <li className="ml-4">
                        <a href="#" className="py-2 sm:px-4 text-white rounded-3xl md:hover:bg-white md:hover:text-[#2b1055]">Inicio</a>
                    </li>
                    <li className="ml-4">
                        <a href="#Nosotros" className="py-2 sm:px-4 text-white rounded-3xl md:hover:bg-white md:hover:text-[#2b1055]">Nosotros</a>
                    </li>
                    <li className="ml-4">
                        <a href="#Productos" className="py-2 sm:px-4 text-white rounded-3xl md:hover:bg-white md:hover:text-[#2b1055]">Productos</a>
                    </li>
                    <li className="ml-4">
                        <a href="#Contacto" className="py-2 sm:px-4 text-white rounded-3xl md:hover:bg-white md:hover:text-[#2b1055]">Contacto</a>
                    </li>
                </ul>
            </header>
            <section className="relative w-full h-screen p-24 flex justify-center items-center 
                            before:absolute before:bottom-0 before:w-full before:h-24 before:bg-gradient-to-b from-transparent to-[#1c0522] before:z-50 overflow-hidden">
                <img src={stars} alt="estrelals" 
                    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" 
                    style={{ left: `${estrellas}px` }} />
                <img src={moon} alt="luna" 
                    className="absolute top-0 left-0 w-full h-full object-cover mix-blend-screen pointer-events-none" 
                    style={{ top: `${luna}px` }} />
                <img src={mtBeh} alt="montaDetras" 
                    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" 
                    style={{ top: `${monAtras}px` }} />
                <h2 className="absolute text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl 
                        xl:text-9xl 2xl:text-[115px] z-10 font-bold mb-20" 
                    style={{ marginRight: `${titulo}px`, marginTop: `${titulo}px` }}>Valhalla <span className="flex 2xl:inline-flex px-9 sm:px-16  md:px-20 lg:px-24 xl:px-36   2xl:px-0">Art</span></h2>
                <img src={mtFront} alt="montaFrente" 
                    className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none " 
                    style={{ top: `${monDel}px` }} />
            </section>
        </>
    )
}

export default Home