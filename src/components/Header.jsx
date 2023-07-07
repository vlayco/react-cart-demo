import Brand from "./header/Brand";
import CartButton from "./header/CartButton";
import Search from "./header/Search";

const Header = () => {
  return (
    <div className="bg-slate-600/95">
      <nav className="container mx-auto py-5 flex flex-row items-center justify-between">
        <Brand />
        <div className="flex flex-row items-center justify-between space-x-20 w-fit">
          <Search />
          <CartButton />
        </div>
      </nav>
    </div>
  )
}

export default Header