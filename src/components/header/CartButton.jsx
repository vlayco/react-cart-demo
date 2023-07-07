import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const CartButton = () => {
  const count = 2;

  return (
    <div>
      <Link to="/cart" className="group transition-all flex flex-row items-center justify-evenly space-x-1.5 bg-orange-500 hover:bg-orange-400 text-black/60 px-4 py-2 rounded-lg">
        <span className="transition-all px-3 rounded-full bg-black/80 group-hover:bg-black/90 text-orange-400">{count}</span>
        <span className="font-medium text-xl tracking-tight text-black/80">Cart</span>
        <AiOutlineShoppingCart color="black" fontSize="25px" />
      </Link>
    </div>
  )
}

export default CartButton;
