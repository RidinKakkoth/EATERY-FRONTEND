import images from "../../assets/images"
import './Header.css'

const Header = () => {
  return (
    <div id="header" className=" h-[34vw] my-[20px] mx-auto   bg-no-repeat bg-contain relative " style={{backgroundImage:`url(${images.header})`}}>
      <div id="header-contents" className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-[fadeIn_3s] ">
        <h2 className="text-2xl font-medium text-[max(4.5vw,22px)] text-white leading-tight">Order your favourite food here</h2>
        <p className="text-white text-[1vw]">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredient and satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button className="border-none text-[#747474] font-medium text-[max(1vw,13px)] bg-white px-[2.3vw] py-[1vw] rounded-full ">View Menu</button> 
        {/* rounded-[50px] */}
      </div>
    </div>
  )
}

export default Header
