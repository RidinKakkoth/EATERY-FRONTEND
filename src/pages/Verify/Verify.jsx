import {  useNavigate, useSearchParams } from "react-router-dom";
import { verifyPay } from "../../config/userEndpoints";
import { useEffect } from "react";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const navigate=useNavigate()

  const verifyPayment=async()=>{
    const response=await verifyPay({success,orderId})
    if(response.success){
        navigate('/myorders')
    }
    else{
        navigate('/')
    }
  }

  useEffect(()=>{verifyPayment()},[])

  return (
    <div className="min-h-[60vh] flex flex-col justify-center ">
      
      <div className="flex items-center justify-center h-auto">
    <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-eatery animate-spin">
        </div>
    </div>
</div>
      
    </div>
  );
};

export default Verify;
