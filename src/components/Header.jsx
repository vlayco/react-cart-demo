import Brand from "./header/Brand";
import CartButton from "./header/CartButton";
import Search from "./header/Search";
import { CartState } from "../context/Context";

const Header = () => {
  const { state: { cart }, dispatch } = CartState();

  console.log(cart)

  return (
    <div className="bg-slate-600/95">
      <nav className="container mx-auto py-5 flex flex-row items-center justify-between">
        <Brand />
        <div className="flex flex-row items-center justify-between space-x-20 w-fit">
          <Search />
          <CartButton cartItemsCount={cart.length} cartItems={cart} dispatch={dispatch} />
        </div>
      </nav>
    </div>
  )
}

export default Header