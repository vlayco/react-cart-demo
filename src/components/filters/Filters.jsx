import Rating from "./Rating"
import { CartState } from "../../context/Context"

const Filters = () => {
  const { productState: {
    byStock,
    byFastDelivery,
    byRating,
    sort,
  }, productDispatch } = CartState();

  console.log(byStock, byFastDelivery, byRating, sort)

  return (
    <div>
      <form className="flex flex-col space-y-3 font-light">
        <span className="text-xl tracking-tight font-light">Narrow down the list of products</span>
        <span className="space-x-1">
          <input type="checkbox" id="ascending" value="some-value"
            onChange={() => 
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "low-to-high"
              })
            }
            checked={sort === "low-to-high" ? true : false}
          />
          <label htmlFor="ascending">Ascending</label>
        </span>
        <span className="space-x-1">
          <input type="checkbox" id="descending" value="some-value"
            onChange={() => 
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "high-to-low"
              })
            }
            checked={sort === "high-to-low" ? true : false}
          />
          <label htmlFor="descending">Descending</label>
        </span>
        <span className="space-x-1">
          <input type="checkbox" id="incl-out-of-stock" value="some-value" 
            onChange={() => 
              productDispatch({
                type: "FILTER_BY_STOCK",
              })
            }
            checked={byStock}
          />
          <label htmlFor="incl-out-of-stock">Include Out of Stock</label>
        </span>
        <span className="space-x-1">
          <input type="checkbox" id="fast-delivery" value="some-value"
            onChange={() => 
              productDispatch({
                type: "FILTER_BY_DELIVERY",
              })
            }
            checked={byFastDelivery}
          />
          <label htmlFor="fast-delivery">Fast delivery</label>
        </span>
        <span className="flex flex-row space-x-1.5 items-center pb-4">
          <label>Choose Rating:</label>
          <Rating rating={byRating} 
            onClick={(i) => 
              productDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
              })  
            } 
            style='cursor-pointer' />
        </span>
        <span className="flex justify-center">
          <span className="p-2 w-fit rounded-md text-lg bg-blue-800 hover:bg-blue-600 text-slate-100 transition-all cursor-pointer"
            onClick={
              () =>
                productDispatch({
                type: "CLEAR_FILTERS",
              })
            }
          >Reset Filters</span>
        </span>
      </form>
    </div>
  )
}

export default Filters