import images from '../../assets/images'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className=' py-5 px-0 flex justify-between items-center'>
        <img src={images.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <li className='bg-yellow-500 text-white'>home</li>
            <li>menu</li>
            <li>mobile-app</li>
            <li>contact-us</li>
        </ul>
        <div className="navbar-right">
            <img src={images.search} alt="" className="search" />
            <div className="navbar-search-icon">
                <img src={images.basket} alt="" className="basket" />
                <div className="dot"></div>
            </div>
            <button>signin</button>
        </div>
    </div>
  )
}

export default Navbar
