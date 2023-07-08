import { AiOutlineShoppingCart, AiFillDelete } from 'react-icons/ai'
import { IoChevronDownOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Menu } from '@headlessui/react'

const CartButton = ({cartItemsCount, cartItems, dispatch}) => {
  
  return (
    <Menu>
      <div className='flex flex-col relative'>
        <Menu.Button className={'group flex flex-row items-center text-black/90 font-medium text-lg bg-orange-500 hover:bg-orange-400 transition-all rounded-md p-2 w-fit'}>

          <div className='flex flex-row items-center mr-2'>
            <span className="transition-all px-3 rounded-full bg-black/80 group-hover:bg-black/90 text-orange-400">{cartItemsCount}</span>
            <AiOutlineShoppingCart color="black" fontSize="25px" />
          </div>
            Cart
          <IoChevronDownOutline color="black" fontSize="25px" />
        </Menu.Button>

        <Menu.Items className={'absolute top-12 right-0 w-96 h-fit bg-white shadow-2xl rounded-md p-2 text-center'}>

          <Menu.Item className="">
            <a
              // className={`${active && 'font-light'}`}
              // href="/account-settings"
            >
              {cartItems.length > 0 ? (
                <div className="flex flex-col">
                  {cartItems.map((item) => (
                    <span className="flex flex-row items-center justify-between mb-2" key={item.uuid}>
                      <img 
                        src={item.image}
                        className="w-24 h-24 rounded-md"
                        alt={item.name}
                      />
                        <div className="flex flex-col grow ml-2">
                          <span className="flex font-light">{item.name}</span>
                          
                          
                          <span className="flex flex-row text-xl items-baseline">{item.price.split(".")[0]}
                            <p className="text-base ml-1">USD</p>
                          </span>
                        </div>
                        <AiFillDelete
                          fontSize="25px"
                          style={{ cursor: "pointer" }}
                          onClick={() => 
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item
                            })
                          }
                        />

                      
                    </span>
                  ))}

                  <Link to="/cart" className="">
                    <button className="p-1.5 bg-blue-500 hover:bg-blue-600 transition-all font-light text-white rounded-md">Go to Cart</button>
                  </Link>
                </div>
              ) : ( 
                <span className="p-2 font-light">You do not have items in your cart yet! Start shopping!</span>
              )}
            </a>
          </Menu.Item>
        
        </Menu.Items>
      </div>
    </Menu>













    // <div>
    //   <Link to="/cart" className="group transition-all flex flex-row items-center justify-evenly space-x-1.5 bg-orange-500 hover:bg-orange-400 text-black/60 px-4 py-2 rounded-lg">
    //     <span className="transition-all px-3 rounded-full bg-black/80 group-hover:bg-black/90 text-orange-400">{count}</span>
    //     <span className="font-medium text-xl tracking-tight text-black/80">Cart</span>
    //     <AiOutlineShoppingCart color="black" fontSize="25px" />
    //   </Link>
    // </div>
  )
}

export default CartButton;
