import { useContext, useEffect, useState } from "react"
import { StoreContext } from "../../context/StoreContext"
import { fetchOrdersCall } from "../../config/userEndpoints"

const MyOrders = () => {

    const{token}=useContext(StoreContext)
    const[data,setData]=useState([])

    const fetchOrders=async()=>{
        const response=await fetchOrdersCall()
        if(response.success){
            setData(response.data)
        }
    }

    useEffect(()=>{token?fetchOrders():""},[token])

  return (
    <div>
      
    </div>
  )
}

export default MyOrders
