import { useState } from 'react'
import images from '../../assets/images'
import './Navbar.css'
const Navbar = () => {


    const[menu,setMenu]=useState("home")



  return (
    <div className='navbar py-5 px-0 flex justify-between items-center'>
        <img src={images.logo} alt="logo" className="w-[150px]" />
        <ul className="flex list-none gap-5 text-bluegrey text-[18px]">
            <li onClick={()=>{setMenu("home")}} className={menu=="home"?"active":""}>home</li>
            <li onClick={()=>{setMenu("menu")}} className={menu=="menu"?"active":""}>menu</li>
            <li onClick={()=>{setMenu("mobile-app")}} className={menu=="mobile-app"?"active":""}>mobile-app</li>
            <li onClick={()=>{setMenu("contact-us")}} className={menu=="contact-us"?"active":""}>contact-us</li>
        </ul>
        <div className="flex items-center gap-10">
            <img src={images.search} alt="" className="search" />
            <div className=" relative ">
                <img src={images.basket} alt="" className="basket" />
                <div className=" absolute min-w-[10px] min-h-[10px] bg-eatery border rounded-full top-[-8px] right-[-8px] "></div>
            </div>
            <button className='text-[16px] text-bluegrey border border-solid border-eatery rounded-full px-[30px] py-[10px] cursor-pointer hover:bg-[#fff4f2]'>signin</button>
        </div>
    </div>
  )
}

export default Navbar
