import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import FoodItem from "../FoodItem/FoodItem"

const FoodDisplay = ({category}) => {
  
    const {food_list}=useContext(StoreContext)

    return (
    <div className="mt-[30px] ">
        <h2 className="text-2xl font-medium text-[max(2vw,24px)] ">Top dishes near you</h2>
        {food_list?
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-[30px] gap-[30px] gap-y-[40px]  ">
        {food_list?.map((item,index)=>{
            if(category==="All"||category===item.category){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            }

        })}
    </div>:
        <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-eatery animate-spin">
        </div>
    </div>}
    </div>
  )
}

export default FoodDisplay
