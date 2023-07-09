import { CartState } from "../../context/Context"
import SideBar from "../SideBar"
import ProductCard from "../product/ProductCard"

const Home = () => {
  const { 
    state: {products}, 
    productState: {
      sort,
      searchQuery,
      byRating,
      byStock,
      byFastDelivery
    }
  } = CartState()

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) => (
        sort === 'low-to-high' ? a.price - b.price : b.price - a.price
      ))
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((product) => product.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((product) => product.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((product) => product.ratings >= byRating);
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((product) => product.name.toLowerCase().includes(searchQuery));
    }

    return sortedProducts;
  }

  return (
    <div className="container mx-auto mt-2 flex flex-row">
        <SideBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 flex-wrap justify-around p-4">
        {transformProducts().map((product) => {
          return <ProductCard product={product} key={product.uuid} />
        })}
      </div>
    </div>
  )
}

export default Home
