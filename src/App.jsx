import { useEffect , useState } from "react"

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
    setMonDel(window.scrollY *0)
    setTitulo(window.scrollY *1.5)
    setBtn(window.scrollY)
    setBtn(window.scrollY)
    setNav(window.scrollY *0.3) 
  })



  
  return (
    <>
      <div className="bg-gradient-to-b from-[#2b1055] to-[#7597de] min-h-screen overflow-x-hidden" >
        <header className="absolute top-0 left-0 w-full flex py-4 px-44 justify-between items-center font-bold text-2xl z-50" style={{top:`${nav}px`}}>
          <div className="w-30 h-30">
            <a href="#" className="text-white font-bold text-4xl uppercase tracking-[.25em]"><img src="../src/assets/logo.svg" alt="logo"  className="mt-1" /></a>
          </div>
          <ul className="flex justify-center items-center">
            <li className="ml-4"><a href="" className="py-2 px-4  text-white rounded-3xl hover:bg-white hover:text-[#2b1055]">Home</a></li>
            <li className="ml-4"><a href="" className="py-2 px-4  text-white rounded-3xl hover:bg-white hover:text-[#2b1055]">About</a></li>
            <li className="ml-4"><a href="" className="py-2 px-4  text-white rounded-3xl hover:bg-white hover:text-[#2b1055]">Products</a></li>
            <li className="ml-4"><a href="" className="py-2 px-4  text-white rounded-3xl hover:bg-white hover:text-[#2b1055]">Contact</a></li>
          </ul>
        </header>
        <section className="relative w-full h-screen p-24 flex justify-center items-center 
                            before:absolute before:bottom-0 before:w-full before:h-24 before:bg-gradient-to-b from-transparent to-[#1c0522] before:z-50 overflow-hidden">
          <img src="../src/assets/bg/stars.png" alt="" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" style={{left:`${estrellas}px`}}/>
          <img src="../src/assets/bg/moon.png" alt="" className="absolute top-0 left-0 w-full h-full object-cover mix-blend-screen pointer-events-none" style={{top:`${luna}px`}}/>
          <img src="../src/assets/bg/mountains_behind.png" alt="" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" style={{top:`${monAtras}px`}}/>
          <h2 className="absolute text-white text-[115px] z-10 font-bold mb-40" style={{marginRight:`${titulo}px`, marginTop:`${titulo}px`}}>Valhalla Art</h2>
          <a href="#" className="py-2 px-7 rounded-3xl bg-white text-[#2b1055] text-2xl inline-block z-10  translate-y-28" style={{marginTop:`${btn}px`}}>Products</a>
          <img src="../src/assets/bg/mountains_front.png" alt="" className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none " style={{top:`${monDel}px`}}/>
        </section>
        <div className="relative p-24 bg-[#1c0522]">
          <h2 className="text-white mb-3 text-6xl font-bold">Sobre Nosotros</h2>
          <p className="text-white text-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos. <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis harum excepturi totam repudiandae libero mollitia minus illum necessitatibus nemo blanditiis, debitis suscipit magni maiores modi odio quidem aspernatur dignissimos. </p>
        </div>
        <footer>
          <p>Valhalla Art 2023 © All rights reserved</p>
          <p>Developed by Jocsan Morera</p>
        </footer>
      </div>
    </>
  )
}

export default App
