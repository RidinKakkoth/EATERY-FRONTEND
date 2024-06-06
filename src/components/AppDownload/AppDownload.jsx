import images from "../../assets/images"

const AppDownload = () => {
  return (
    <div className="m-auto mt-[100px] text-[max(3vw,20px)] font-medium text-center ">
        <p>For Better Experience Download <br /> Eatery App</p>
        <div className="flex justify-center gap-[max(2vw,10px)] mt-[40px] ">
            <img className="w-[max(30vw,120px)] max-w-[180px] cursor-pointer [transition:0.5s] hover:scale-105 " src={images.playstore} alt="" />
            <img className="w-[max(30vw,120px)] max-w-[180px] cursor-pointer [transition:0.5s] hover:scale-105 " src={images.appstore} alt="" />
        </div>
    </div>
  )
}

export default AppDownload
