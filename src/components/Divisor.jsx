import trees from '../../src/assets/bg/Trees.png'
import mont from '../../src/assets/bg/mont.png'

const Divisor = () => {
  return (
    <>
        <div className="w-full h-20 sm:h-40 md:h-52 lg:h-72 xl:h-80 relative bg-fixed bg-cover bg-clip-border fondo">
          <img src={mont} alt="rio" className="bg-fixed absolute top-[-30px] object-cover" />
          <img src={trees} alt="rio" className="bg-cover bg-clip-border absolute top-[-50px] bottom-0 object-cover" />
        </div>
    </>
  )
}

export default Divisor