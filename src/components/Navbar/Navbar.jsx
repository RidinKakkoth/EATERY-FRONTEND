import { useState } from 'react'
import images from '../../assets/images'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = ({setShowLogin}) => {


    const[menu,setMenu]=useState("home")



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
                <div className=" absolute min-w-[10px] min-h-[10px] bg-eatery border rounded-full top-[-8px] right-[-8px] "></div>
            </div>
            <button onClick={()=>setShowLogin(true)} className='text-[16px] text-bluegrey border border-solid border-eatery rounded-full px-[30px] py-[10px] cursor-pointer hover:bg-[#fff4f2]'>signin</button>
        </div>
    </div>
  )
}

export default Navbar
