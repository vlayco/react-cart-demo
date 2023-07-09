import { CartState } from "../../context/Context"

const Cart = () => {
  const { 
    state: {cart}, 
    dispatch 
  } = CartState()

  const itemsCount = 1

  return (
    <div className="flex flex-row p-2 font-light">
      
      <div className="flex flex-row w-full space-x-2"> 
        <div className="w-4/6 p-2">Products list preview</div>
        <div className="flex flex-col p-2 w-2/6 rounded-md bg-slate-600/95 text-white">
          <span className="text-2xl mb-5">Subtotal {itemsCount} { itemsCount < 2 ? "item" : "items" }</span>

          <span className="text-lg text-white mb-5">Total: </span>

          <button className="p-1.5 w-full rounded-md bg-blue-500 hover:bg-blue-600 text-white transition-all">Go to Checkout</button>
        </div>
      </div>
    
    </div>
  )
}

export default Cart