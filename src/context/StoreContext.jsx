import { createContext,  useEffect,  useState } from "react";
import { addToCartCall, fetchFoodList, loadCartCall, removeFromCartCall } from "../config/userEndpoints";
export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{

    const [cartItem,setCartItem]=useState({})
    const[token,setToken]=useState("")
    const[profilePic,setProfilePic]=useState(null)
    const[food_list,setFood_list]=useState([])

    useEffect(()=>{

      async function loadData(){
        await fetchFoodData();
        let local_token=localStorage.getItem("token")
        if(local_token){
            setToken(local_token,"token")
            await loadCartData()
        }
        
      }

      loadData()

    },[])

    const fetchFoodData=async()=>{
        const response=await fetchFoodList()
        if(response.success){
            setFood_list(response.data)
        }
    }
    const loadCartData=async()=>{
        const response=  await loadCartCall()
        if(response.success){
              
              setCartItem(response.cartData)
          }
      }

    const addToCart=async (itemId)=>{

        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        
        await addToCartCall(itemId)
        
    }

    const removeFromCart=async (itemId)=>{

        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        await removeFromCartCall(itemId)
    }
    
     
    const getTotalCartAmount=()=>{

        let totalAmount=0;

        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo=food_list?.find((product)=>product._id===item)
                totalAmount+=itemInfo?.price*cartItem[item]
            }
        }

        return totalAmount

    }



    const contextValue={
        food_list,
        cartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        profilePic,
        setProfilePic
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider