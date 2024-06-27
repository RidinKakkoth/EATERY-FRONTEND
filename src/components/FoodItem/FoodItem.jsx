
import { useContext } from 'react'
import images from '../../assets/images'
import { StoreContext } from '../../context/StoreContext'
import { url } from '../../config/axios'

const FoodItem = ({id,name,price,description,image}) => {


    const{cartItem,addToCart,removeFromCart}=useContext(StoreContext)
    console.log(cartItem[id],"cid");

  return (
    <div className='w-full m-auto rounded-[15px] [box-shadow:0px_0px_10px_#00000015] [transition:0.3s] animate-[fadeIn_3s] '>
        <div className='relative '>
            <img className='w-full rounded-t-[15px] ' src={url+"images/"+image} alt="" />
            {
                !cartItem[id]
                ? <img className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full ' onClick={()=>addToCart(id)} src={images.add_black} alt="" />:
                <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white '> 
                    <img className='w-[30px] ' onClick={()=>removeFromCart(id)} src={images.cartremove_red} alt="" />
                    <p>{cartItem[id]}</p>
                    {console.log(cartItem[id])}
                    <img className='w-[30px] ' onClick={()=>addToCart(id)} src={images.cartadd_green} alt="" />

                </div>
            }
        </div>
        <div className='p-[20px] '> 
            <div className='flex justify-between items-center mb-[10px] '>
                <p className='text-[20px] font-medium '>{name}</p>
                <img className='w-[70px]' src={images.rating} alt="" />
            </div>
            <p className='text-[#676767] text-[12px] '>{description}</p>
            <p className='text-[tomato] text-[22px] font-medium mx-0 my-[10px] '>₹{price}</p>
        </div>
    </div>
  )
}

export default FoodItem
