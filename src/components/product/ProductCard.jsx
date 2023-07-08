import { CartState } from "../../context/Context"
import Rating from "../filters/Rating"

const ProductCard = ({ product, key }) => {

  const { state: { cart }, dispatch } = CartState()

  return (
    <div className="flex flex-col space-y-1 pb-2 items-center border border-black/30 rounded-md" key={key}>
      {/* Image */}
      <span className="mb-2">
        <div className="flex items-center justify-center">
          <img className="object-fit w-fit duration-100 hover:scale-105" src={product.image} alt={product.name} />
        </div>
      </span>

      {/* Title */}
      <span className="text-xl font-light tracking-tight">
        {product.name}
      </span>

      {/* Price */}
      <div>
        <span className="text-2xl mr-1">{product.price.split(".")[0]}</span>
        <span>USD</span>
      </div>

      {/* Fast delievry */}
      <span className="text-sm text-blue-600">
        {product.fastDelivery ? (
          <span>Fast Delivery</span>
        ) : (
          <span>7 days delivery period</span>
        )}
      </span>

      {/* Ratings component */}
      <Rating rating={product.ratings} />

      {/* Add to and remove from buttons */}
      <span className="flex flex-col md:flex-col lg:flex-row items-center space-x-3">
        
        { cart.some(p => p.id === product.id) ? (
          <button onClick={ () => {
            dispatch({
              type: 'REMOVE_FROM_CART',
              payload: product
            })
          } } className="px-2 py-1 bg-red-500 hover:bg-red-600 hover:scale-105 transition-all rounded-md text-white">Remove</button>
        ) : (
          <button onClick={ () => {
            dispatch({
              type: 'ADD_TO_CART',
              payload: product
            })
          } } className="px-2 py-1  bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all rounded-md text-white">{!product.inStock ? "Out of Stock" : "Add to Cart"}</button>
        )}

      </span>

    </div>
  )
}

export default ProductCard