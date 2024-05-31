import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

const FoodDisplay = () => {
  
    const {food_list}=useContext(StoreContext)

    return (
    <div className="">
        <h2>TOp dishes near you</h2>
    </div>
  )
}

export default FoodDisplay
