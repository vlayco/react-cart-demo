import { CartState } from "../../context/Context"
import SideBar from "../SideBar"
import ProductCard from "../product/ProductCard"

const Home = () => {
  const { state: {products} } = CartState()

  console.log(products)

  return (
    <div className="container mx-auto mt-2 flex flex-row">
        <SideBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 flex-wrap justify-around p-4">
        {products.map((product) => {
          return <ProductCard product={product} key={product.uuid} />
        })}
      </div>
    </div>
  )
}

export default Home