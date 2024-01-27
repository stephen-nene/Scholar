import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered, FaMoon, FaRegSun, FaSchool } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";



import { setDarkMode } from "../store/actions/appAction";



function Navbar({loggedin=true}) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigationRef = useRef();

  const darkMode = useSelector(state => state.app.darkMode);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navigationRef.current &&
        !navigationRef.current.contains(event.target)
      ) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
    className={`bg-gray-100 fixed top-0 w-full ${ isScrolled ? "" : "bg-transparent"
    } bg-opacity-40 backdrop-blur-xl  duration-300 ease-in-out mb-22`}
  >
      <nav>
        <div className="max-w-9xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-7">
              {/* logo */}
              <div>
                <Link
                  href="/"
                  className="flex gap-1 font-bold text-gray-950 items-center "
                >
                  <FaSchool className="h-6 w-6 text-primary" />
                  <span>Scholar</span>
                </Link>
              </div>
              {/* primary */}
              <div className="hidden lg:flex items-center gap-8 ">
                <Link to="#" className="text-black">
                  Home
                </Link>
                <Link className="text-black" to="#">Shop</Link>
                <Link className="text-black" to="#">Contact Us</Link>
                <Link className="text-black" to="#">Profile</Link>
                <button>
                  {loggedin?<Link>Dashboard</Link>:<Link>Get-Started</Link>}
                  
                  
                  </button>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">

              <div className="flex items-center gap-3">
                <button className={`${darkMode?'bg':''}`} onClick={()=>dispatch(setDarkMode(!darkMode))}>
                  {!darkMode ? <FaMoon size={25} /> : <FaRegSun size={25} />}
                </button>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center gap-2">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  {!toggleMenu? <FaBarsStaggered size={20}/>:<IoClose size={20}  />}
                
                
                
                  {/* <Bars3Icon /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full ${darkMode?'bg-gray-900':'bg-gray-200'}  overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-300 ${
            !toggleMenu ? "h-0" : "h-"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#" className="hover:text-rose-500">
                Features
              </a>
              <a href="#">Pricing</a>
              <a href="#">Download</a>
              <a href="#">Classic</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
