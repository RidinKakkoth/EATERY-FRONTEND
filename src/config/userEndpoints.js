import axiosInstanceWithInterceptor from "./axios";

const userAxiosInstance=axiosInstanceWithInterceptor()

export const login=async(userData)=>{
    try {
        const{data}=await userAxiosInstance.post('api/user/login',userData)
        return data
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || error.message,
          }
    }
}
export const googleLogin=async(token)=>{
    try {
        const{data}=await userAxiosInstance.post('api/auth/google',{token:token})
        return data
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || error.message,
          }
    }
}

export const register=async(userData)=>{
    try {
        const{data}=await userAxiosInstance.post('api/user/register',userData)
        return data
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || error.message,
          }
    }
}


export const fetchFoodList=async()=>{
    try {
        const{data}=await userAxiosInstance.get('api/food/list')
        return data
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || error.message,
          }
    }
}

export const addToCartCall=async(itemId)=>{

    try {
        const{data}=await userAxiosInstance.post('api/cart/add',{itemId})
        return data
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || error.message,
          }
    } 
}
export const removeFromCartCall=async(itemId)=>{

    try {
        const{data}=await userAxiosInstance.patch('api/cart/remove',{itemId})
        return data
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || error.message,
          }
    } 
}
export const loadCartCall=async()=>{

    try {
        const{data}=await userAxiosInstance.get('api/cart/get-cart')
        return data
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || error.message,
          }
    } 
}

export const placeOrderCall=async(orderData)=>{
    try {
        const{data}=await userAxiosInstance.post('api/order/place',orderData)
        console.log(data);
        return data
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || error.message,
          }
    } 
    } 
export const verifyPay=async({success,orderId})=>{
    try {
        const{data}=await userAxiosInstance.post('api/order/verify',{success,orderId})
        console.log(data);
        return data
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || error.message,
          }
    } 
}


export const fetchOrdersCall=async()=>{
    try {
        const{data}=await userAxiosInstance.get('api/order/userorders')
        console.log(data);
        return data
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || error.message,
          }
    } 
    } 