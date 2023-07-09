import { CartState } from "../../context/Context"
import { useEffect, useState } from "react"

const Cart = () => {
  const { 
    state: {cart}, 
    dispatch 
  } = CartState()

  const [ total, setTotal ] = useState()

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + +curr.price, 0))
  }, [cart])

  return (
    <div className="flex flex-col">
    <div className="flex flex-row p-2 font-light">
      
      <div className="flex flex-row w-full space-x-2">

        <div className="w-4/6 p-2">
          <ul className="flex flex-col space-y-2">
            {cart.map(product => (
              <span key={product.id} className="flex flex-row items-center justify-between border border-black/40 rounded-md p-2">
                {product.name}
              </span>
            ))}
          </ul>
        </div>

        <div className="flex flex-col p-2 w-2/6 h-full rounded-md bg-slate-600/95 text-white">
          <span className="text-2xl mb-5">Subtotal ({cart.length}) { cart.length < 2 ? "item" : "items" }</span>

          <span className="text-lg text-white mb-5">Total: {total} RSD </span>

          <button className="p-1.5 w-full rounded-md bg-blue-500 hover:bg-blue-600 text-white transition-all">Go to Checkout</button>
        </div>
      </div>
    
    </div>
    </div>
  )
}

export default Cart