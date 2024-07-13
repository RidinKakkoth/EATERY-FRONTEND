import { useContext, useEffect, useState } from 'react'
import images from '../../assets/images'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const navigate=useNavigate()

    const[menu,setMenu]=useState("home")
    
    const{getTotalCartAmount,token,setToken,profilePic}=useContext(StoreContext)
   

    const logout=()=>{
      localStorage.removeItem("token")
      setToken("")
      navigate('/')
    }
    

  return (
    <div  className='navbar py-5 px-0 flex justify-between items-center'>
       <Link to='/'> <img src={images.logo} alt="logo" className="logo w-[150px]" /></Link>
        <ul id='navbar-menu'  className=" flex list-none gap-[20px] text-bluegrey text-[18px]">
            <Link to='/' onClick={()=>{setMenu("home")}} className={menu=="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>{setMenu("menu")}} className={menu=="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>{setMenu("mobile-app")}} className={menu=="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>{setMenu("contact-us")}} className={menu=="contact-us"?"active":""}>contact-us</a>
        </ul>
        <div id='navbar-right' className=" flex items-center gap-10">
            <img src={images.search} alt=""  />
            <div className=" relative ">
               <Link to='/cart'> <img src={images.basket} alt="" className="" /></Link>
                {getTotalCartAmount()>0?<div className=" absolute min-w-[10px] min-h-[10px] bg-eatery border rounded-full top-[-8px] right-[-8px] "></div>:<></>}
            </div>
            {!token? 
            <button onClick={()=>setShowLogin(true)} className='text-[16px] text-bluegrey border border-solid border-eatery rounded-full px-[30px] py-[10px] cursor-pointer hover:bg-[#fff4f2]'>sign in</button>
          :<div className="relative group ">
          <img src={profilePic?profilePic:images.profile} className='w-9 h-9  rounded-full' alt="Profile" />
          <ul className="absolute hidden  right-0 z-10 group-hover:flex flex-col gap-[10px] bg-[#fff2ef] py-3 px-8 rounded-[4px] border border-eatery outline outline-2 outline-white">
            <Link to='/myorders'>
            <li className="flex cursor-pointer  justify-center items-center gap-[10px] hover:text-eatery">
              <img className='w-5' src={images.bag} alt="Orders" />
              Orders
            </li>
            </Link>
            <hr />
            <li onClick={logout} className="flex cursor-pointer  justify-center items-center gap-[10px] hover:text-eatery">
              <img className='w-5' src={images.logout} alt="Logout" />
              <p>Logout</p>
            </li>
          </ul>
             </div>}
        </div>
    </div>
  )
}

export default Navbar
