import { createContext, useReducer, useContext } from "react"
import { cartReducer, productReducer } from "./reducers"
import { faker } from "@faker-js/faker"

const Cart = createContext()

faker.seed(50)

const Context = ({ children }) => {

  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlLoremFlickr({width: 800, height: 800, category: 'technics'}),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }))

  const initialState = {
    products: products,
    cart: []
  }

  const [state, dispatch] = useReducer(cartReducer, initialState)

  const [productState, productDispatch] = useReducer(productReducer, {
    searchQuery: "",
    byRating: 0,
    byStock: false,
    byFastDelivery: false,
  });

  return <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>{children}</Cart.Provider>
}

export default Context

export const CartState = () => {
  return useContext(Cart)
}
