import images from "../../assets/images";
import './Footer.css'

const Footer = () => {
  return (
    <div id="footer" className="text-[#d9d9d9] bg-[#323232] flex flex-col gap-5 items-center py-5 px-[8vw] mt-24 " >
      <div id="footer-content" className="w-full  grid grid-cols-[2fr_1fr_1fr] gap-20 ">
        <div className="flex flex-col items-start  gap-5  ">
          <img src={images.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
            voluptate aperiam consequatur aliquam sed necessitatibus blanditiis
            magnam recusandae quisquam nostrum, dicta voluptas praesentium. Illo
            labore nostrum quam, voluptas provident ipsum?
          </p>
          <div className="flex   ">
            <img className="w-10 mr-[15px] " src={images.facebook} alt="" />
            <img className="w-10 mr-[15px] " src={images.twitter} alt="" />
            <img className="w-10 mr-[15px] " src={images.linkedin} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-start  gap-5  ">
          <h2 className="text-white font-medium text-2xl ">COMPANY</h2>
          <ul>
            <li className="list-none mb-[10px] cursor-pointer">Home</li>
            <li className="list-none mb-[10px] cursor-pointer">About us</li>
            <li className="list-none mb-[10px] cursor-pointer">Delivery</li>
            <li className="list-none mb-[10px] cursor-pointer">Privacy policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5  ">
          <h2 className="text-white font-medium text-2xl ">GET IN TOUCH</h2>
          <ul>
            <li className="list-none mb-[10px] cursor-pointer">+91-9895774042</li>
            <li className="list-none mb-[10px] cursor-pointer">contact@eatery.com</li>
          </ul>
        </div>
      </div>
      <hr className="bg-gray-500 border-none w-full h-[2px] mx-0 my-5 " />
      <p id="copyright">© 2024 RK Eatery . All rights reserved.</p>
    </div>
  );
};

export default Footer;
