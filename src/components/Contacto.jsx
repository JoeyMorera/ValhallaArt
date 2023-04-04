import React from 'react'

const Contacto = () => {
  return (
    <>
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
    </>
  )
}

export default Contacto