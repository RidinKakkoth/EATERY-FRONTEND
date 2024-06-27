import axiosInstanceWithInterceptor from "./axios";

const adminAxiosInstance = axiosInstanceWithInterceptor();

export const addFood = async (formData) => {
  try {
    const { data } = await adminAxiosInstance.post("api/food/add", formData);
    return data;
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    }
  }
}

export const fetchList=async()=>{
  try {
    const{data}=await adminAxiosInstance.get('api/food/list')
    return data
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    }
  }
}

export const listStatus=async(id)=>{
  try {
    const{data}=await adminAxiosInstance.patch(`api/food/listed/${id}`)
    return data
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    }
  }
}
