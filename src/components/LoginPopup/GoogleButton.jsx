import { GoogleLogin } from "@react-oauth/google";

import { googleLogin } from "../../config/userEndpoints";
import { toast } from "react-toastify";

const GoogleButton = ({setShowLogin,setToken,setProfilePic}) => {
  const onSuccess = async (response) => {
    try {
      const { credential } = response;
      
      const res=await googleLogin(credential)

      if (res.success) {
    
        let token=res.token
        setToken(token)
        localStorage.setItem("token",token)
        setProfilePic(res.user.picture)
        setShowLogin(false)
      } else {
        toast.error(res.message)
      }
    } catch (error) {
      console.error("Login error", error);
    }
  };

  const onFailure = (error) => {
    console.error("Google Login failed", error);
  };

  return (
    <div className="mx-auto">
      <GoogleLogin onSuccess={onSuccess} onFailure={onFailure} />
    </div>
  );
};

export default GoogleButton;
