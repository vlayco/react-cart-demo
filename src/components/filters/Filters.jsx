import Rating from "./Rating"
import { useState } from "react"

const Filters = () => {
  const [rate, setRate] = useState(4)

  return (
    <div>
      <form className="flex flex-col space-y-3 font-light">
        <span className="text-xl tracking-tight font-light">Narrow down the list of products</span>
        <span className="space-x-1">
          <input type="radio" id="ascending" value="some-value" />
          <label htmlFor="ascending">Ascending</label>
        </span>
        <span className="space-x-1">
          <input type="radio" id="descending" value="some-value" />
          <label htmlFor="descending">Descending</label>
        </span>
        <span className="space-x-1">
          <input type="checkbox" id="incl-out-of-stock" value="some-value" />
          <label htmlFor="incl-out-of-stock">Include Out of Stock</label>
        </span>
        <span className="space-x-1">
          <input type="checkbox" id="fast-delivery" value="some-value" />
          <label htmlFor="fast-delivery">Fast delivery</label>
        </span>
        <span className="flex flex-row space-x-1.5 items-center pb-4">
          <label>Choose Rating:</label>
          <Rating rating={rate} onClick={(i) => setRate(i+1)} style='cursor-pointer' />
        </span>
        <span className="flex justify-center">
          <button className="p-2 w-fit rounded-md text-lg bg-blue-800 hover:bg-blue-600 text-slate-100 transition-all">Reset Filters</button>
        </span>
      </form>
    </div>
  )
}

export default Filters