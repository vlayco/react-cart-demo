import Filters from "./filters/Filters"

const SideBar = () => {
  return (
    <div className="flex flex-col w-72 min-w-fit h-fit bg-slate-300 rounded-lg px-3 py-2">
      <div className="">
        <Filters />
      </div>
    </div>
  )
}

export default SideBar
