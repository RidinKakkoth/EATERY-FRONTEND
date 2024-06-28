import {  useEffect, useState } from "react"
import { fetchOrdersCall } from "../../config/userEndpoints"
import images from "../../assets/images"

const MyOrders = () => {

    const[data,setData]=useState([])

    const fetchOrders=async()=>{
        const response=await fetchOrdersCall()
      
        if(response.success){

            setData(response.data)
        }
    }

    useEffect(()=>{fetchOrders()},[data])

  return (
    <div className="my-[50px]">
      {data.length>0?<h2 className="font-semibold">My Orders</h2>:""}
      <div className="flex flex-col gap-5 mt-8">
        {data.length?
        data?.map((order,index)=>{
            return (
                <div key={index} className="grid grid-cols-[1fr_2fr_1fr] gap-y-[5px] md:gap-y-0  md:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-[30px] py-[10px] px-5 text-[#454545] border-2  ">
                    <img className="w-[50px]" src={images.parcel} alt="" />
                    <p>{order.items.map((item,index)=>{
                        if(index===order.items.length-1){
                            return item.name+" x "+item.quantity
                        }else{
                            return item.name+" x "+item.quantity +", "
                        }
                    })}</p>
                    <p><b>₹</b> {order.amount}.00</p>
                    <p>Items: {order.items.length}</p>
                    <p className="text-[16px]"><span className="mr-1 text-eatery "> &#x25cf; </span><b className="text-[#454545]">{order.status}</b></p>
                    <button className=" text-[12px] md:text-[16px]  px-0 py-3 rounded-md bg-[#ffe1e1] cursor-pointer text-[#454545] text-wrap">Track Order</button>
                </div>
            )
        }):
<div className="w-full flex flex-col gap-5 items-center justify-center">
<img className=" w-[30%] md:w-[20%]" src={images.no_order} alt="" />
<p className=" text-center w-[50%]">Looks like you haven't made your order yet</p>
</div>
}
      </div>
    </div>
  )
}

export default MyOrders
