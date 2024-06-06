import menu_list from "../../assets/menuList"
import './ExploreMenu.css'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      <h1 className="text-4xl font-medium text-[#262626]">Explore our menu</h1>
      <p id="explore-menu-text" className="max-w-[60%] text-[#808080] ">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delecious meal at a time.</p>
      <div className="flex justify-between items-center gap-[30px] text-center mx-0 my-[20px] overflow-x-scroll no-scrollbar">
        {menu_list.map((item,index)=>{
            return(
                <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} >
                    <img className={category===item.menu_name?"w-[7.5vw] min-w-[80px] cursor-pointer border-[4px] border-solid border-[tomato] rounded-full [transition:0.2s] p-[2px]  ":"w-[7.5vw] min-w-[80px] cursor-pointer border rounded-full [transition:0.2s]"} src={item.menu_image} alt="" />
                    <p className="mt-[10px] text-[#747474] text-[max(1.4vw,16px)]  cursor-pointer">{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr className="mx-0 my-5  bg-[#e2e2e2] h-[2px] border-none" />
    </div>
  )
}

export default ExploreMenu
