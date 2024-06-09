import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import './Cart.css'

const Cart = () => {


   const {food_list,cartItem,removeFromCart,getTotalCartAmount}=useContext(StoreContext)

  return (
    <div className="mt-24">
      <div >
        <div className="cart-items-title text-gray-500">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
            if(cartItem[item._id]>0){
              return (
                <>
                <div key={index} className="cart-items-title my-[10px] mx-0 text-black ">
                  <img className="w-[50px]" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹ {item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>₹ {cartItem[item._id]*item.price}</p>
                  <p className="cursor-pointer" onClick={()=>removeFromCart(item._id)}>x</p>

                </div>
                <hr className="h-[1px] bg-[#e2e2e2] " />
                </>
              )
            }
        })}
      </div>
      <div id="cart-bottom" className="mt-20  flex  justify-between gap-[max(12vw,20px)] ">
        <div className="flex flex-1  flex-col gap-5   ">
          <h2 className="text-2xl font-medium">Cart Totals</h2>
          <div >
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <hr className="my-[10px] mx-0" />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹ {2}</p>
            </div>
            <hr className="my-[10px] mx-0" />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹ {getTotalCartAmount()+2}</b>
            </div>
          </div>
            <button className="bg-eatery text-white w-[max(15vw,200px)] py-3 px-0 rounded-md   ">PROCEED TO CHECKOUT</button>
        </div>
        <div id="promocode" className=" flex-1">
          <div>
            <p className="text-[#555]">If you have promo code, Enter it here</p>
            <div className="mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-md ">
              <input className="bg-transparent border-none outline-none pl-[10px] " type="text" placeholder="promo code" />
              <button className="w-[max(10vw,150px)] py-3 px-[5px] text-white bg-black rounded-md ">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
