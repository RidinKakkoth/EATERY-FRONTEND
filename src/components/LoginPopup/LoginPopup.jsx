import { useContext, useState } from "react"
import images from "../../assets/images"
import { login, register } from "../../config/userEndpoints"
import { StoreContext } from "../../context/StoreContext"
import GoogleButton from "./GoogleButton"

const LoginPopup = ({setShowLogin}) => {

    const[currentState,setCurrentState]=useState("Login")
    
    const{setToken,setProfilePic}=useContext(StoreContext)

    const[data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler=(event)=>{

        event.preventDefault()

        const name=event.target.name
        const value=event.target.value
        setData(data=>({...data,[name]:value}))
    }

    const onLogin=async(event)=>{
        event.preventDefault()

        
        const response=currentState==="Login"? await login(data): await register(data)


        if(response.success){
           
            let token=response.token
            setToken(token)
            localStorage.setItem("token",token)
            setShowLogin(false)
        }
        else{
            alert(response.message)
        }
    }
  
  return (
    <div className="absolute z-10 bg-[rgba(0,0,0,0.56)] w-full h-full grid  ">
        <form onSubmit={onLogin} className="flex flex-col place-self-center w-[max(23vw,330px)] bg-white text-[#808080] text-[14px]  gap-[25px] py-5 px-[30px] rounded-lg animate-[fadeIn_0.5s] " >
            <div className="flex justify-between items-center text-black ">
                <h2 className="font-medium text-2xl">{currentState}</h2>
                <img className="cursor-pointer w-4" onClick={()=>setShowLogin(false)} src={images.cross} alt="" />
            </div>
            <div className="flex flex-col gap-5 ">
                {currentState==="Login"?<></>:
                <input onChange={onChangeHandler} name="name" value={data.name} className="boder border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-md " type="text" placeholder="Your name"  required />}
                
                <input onChange={onChangeHandler} name="email" value={data.email} className="boder border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-md " type="email" placeholder="Your email"  required />
                <input onChange={onChangeHandler} name="password" value={data.password} className="boder border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-md " type="password" placeholder="Password"  required />
            </div>
            <button type="submit" className="p-[10px] rounded-md text-white bg-eatery text-[15px] ">{currentState==="Sign Up"?"Create account":"Login" }</button>
           
            {/* <hr className="border"/> */}
            <GoogleButton setShowLogin={setShowLogin} setProfilePic={setProfilePic} setToken={setToken} />

            <div className="flex items-start gap-2 mt-[-15px]">
               
                {/* <input className="mt-[5px] boder border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-md " type="checkbox" required /> */}
                {/* <p>By continuing, i agree to the Terms of Service and Privacy Policy</p> */}
            </div>
            
            {currentState==="Login"?<p>Create a new account? <span className="cursor-pointer text-eatery font-[500] " onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
            :<p>Already have an account <span className="cursor-pointer text-eatery font-[500] " onClick={()=>setCurrentState("Login")}>Login here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup
