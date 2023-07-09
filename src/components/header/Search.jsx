import { CartState } from "../../context/Context"

const Search = () => {
  const { productDispatch } = CartState();

  return (
    <div>
      <input className="h-9 px-4 rounded-lg outline-none w-96" type="text" placeholder="Search for a product..."
        onChange={(e) => {
          productDispatch({
            type: "FILTER_BY_SEARCH",
            payload: e.target.value,
          });
        }}
      ></input>
    </div>
  )
}

export default Search;