import { CartState } from "../../context/Context"
import { useEffect, useState } from "react"
import Rating from "../filters/Rating"
import { AiFillDelete } from 'react-icons/ai'

const Cart = () => {

  const { 
    state: {cart}, 
    dispatch,
  } = CartState()

  const [ total, setTotal ] = useState()

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + +curr.price * curr.qty, 0)
    );
  }, [cart])

  return (
    <div className="flex flex-col">
    <div className="flex flex-row p-2 font-light">
      
      <div className="flex flex-row w-full space-x-2 mx-2 my-1">

        <div className="w-4/6">
          <ul className="flex flex-col space-y-2">
            {cart.map(product => (

              <div key={product.id} className="flex flex-row justify-between items-center border border-black/40 rounded-md">
                <div className="flex flex-row items-center justify-between space-x-5">
                  <span>
                  <img 
                      src={product.image}
                      className="w-40 h-40"
                      alt={product.name}
                    />
                  </span>
                  <span>{product.name}</span>
                </div>

                <div className="flex flex-row justify-between items-center space-x-20">
                  <span><Rating rating={product.ratings} style={"mx-1"} /></span>

                  {/* Dropdown qty form input */}
                  <span className="w-10">
                    <select name="qty" id="qty" className="w-full p-1 rounded-md"
                    onChange={(evt) => 
                      dispatch({
                        type: "CHANGE_PRODUCT_QTY",
                        payload: {
                          id: product.id,
                          qty: evt.target.value,
                        }
                      })
                    }  
                  >
                      {[...Array(product.inStock).keys()].map((q) => (
                        <option key={q + 1}>{q + 1}</option>
                      ))}
                    </select>
                  </span>

                  <span>
                    <AiFillDelete
                      fontSize="25px"
                      style={{ cursor: "pointer", marginRight: "25px" }}
                      onClick={() => 
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: product
                        })
                      }
                    />
                  </span>
                </div>
              </div>

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