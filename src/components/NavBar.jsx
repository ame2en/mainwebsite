import React, { useState } from 'react';
import "./nav.css";
import { Link, NavLink } from 'react-router-dom';
import logo1 from "../assets/topbarlogos/linkedin.svg"
import logo2 from "../assets/topbarlogos/whatsapp.svg"
import logo3 from "../assets/topbarlogos/insta.svg"
import logo4 from "../assets/topbarlogos/X.svg"
import logo from "../assets/mainlogo1.png";
// import logo from "../assets/logo1.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown,faCaretUp } from '@fortawesome/free-solid-svg-icons';



const NavBar = () => {

  const [dropdown, setDropdown] = useState({});



  const handleDropdownClick = (menu) => {
    setDropdown((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };



  return (


    <header className='z-[100] fixed bg-white shadow-xl h-[50px] md:h-[60px] lg:h-[90px] w-full '>
      <div className='relative w-full h-full '>
        <div className='topbar absolute top-0  h-[40%] w-full flex'>         
          <div className=' relative   w-[85%] md:w-[87%] h-full  mx-[-10px]  '>
            <div className=' absolute top-0 left-0 w-full h-full bg-[#0C223D] skew-x-[-30deg] md:skew-x-[-20deg] rounded-br-md  md:rounded-br-xl shadow-lg'></div>
            <div className=' text-white absolute top-0 left-0  h-full w-full flex items-center justify-between text-[5.5px] sm:text-[8px]  md:text-[11px] lg:text-[13px] px-4 md:px-6'> 
              <div>Supply Related Complaints  18004250028 (or) 1912.(24/7)</div>
              <div className=' '>CIN:U40109TG2000SGC034119 | GSTIN:36AABCN2875L3Z1</div>
            </div>
          </div>
          <div className='  icons flex flex-row justify-center items-center  h-full  flex-grow gap-[2px] sm:gap-[3px]  md:gap-1 lg:gap-2'>
              <img src={logo1} alt="" className=' h-[60%] md:h-[70%] lg:h-[80%]'/>
              <img src={logo2} alt="" className='h-[60%] md:h-[70%] lg:h-[80%]'/>
              <img src={logo3} alt="" className='h-[60%] md:h-[70%] lg:h-[80%]'/>
              <img src={logo4} alt="" className='h-[60%] md:h-[70%] lg:h-[80%]'/>
          </div>
        </div>

        <div className=' absolute h-[60%] left-0 bottom-0  flex items-center'>
          <img src={logo} alt="" className=' h-full ml-2 md:ml-6'/>
        </div>

        <div className=' absolute bottom-0 right-0 h-[50%] w-[80%] sm:w-[80%] md:w-[85%] mr-[-1rem]'>

            <div className='absolute top-0 right-0 h-full w-full skew-x-[-40deg] md:skew-x-[-30deg] bg-[#0C223D] rounded-tl-md  md:rounded-tl-xl'></div>
          
          <nav className=" relative text-white  h-full w-full pl-[1rem] md:pl-[2rem] pr-[1.2rem] md:pr-[1.5rem] flex justify-between items-center text-[7px] md:text-[9px] lg:text-[12px] xl:text-base">
            <NavLink to="/" className="nav-link   py-2" >Home</NavLink>
            <div className="nav-link relative  py-2"  onClick={() => handleDropdownClick('aboutus')} >

           
            <NavLink  >About Us    {!dropdown.aboutus ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}   </NavLink>
            {dropdown.aboutus && (
                  <div className='absolute  left-0   '>
                    <div className='mt-1 bg-[#1b1b1b] rounded-lg '>
                    <NavLink to="/consumer/info1" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold hover:bg-[#363636] ease-in-out duration-200 relative">About NPDCL</NavLink>
                    <NavLink to="/consumer/info2" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold hover:bg-[#363636] ease-in-out duration-200 relative ">Vision & Mission</NavLink>
                    <NavLink to="/consumer/info3" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Board Of Directors</NavLink>
                    <NavLink to="/consumer/info3" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Organization Chart</NavLink>
                    <NavLink to="/consumer/info3" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Quarterly Finalized Results</NavLink>
                    <NavLink to="/consumer/info3" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Annual Reports</NavLink>
                    <NavLink to="/consumer/info3" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Annual Returns</NavLink>
                    <NavLink to="/consumer/info3" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Corporate Policies</NavLink>
                    <NavLink to="/consumer/info3" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Awards and Recognition</NavLink>
                    </div>
                  </div>
                )}
             </div>




            <NavLink to="/consumer-info" className="nav-link py-2">Consumer Info <FontAwesomeIcon icon={faCaretDown} /></NavLink>
            <NavLink to="/tariffs-regulations" className="nav-link py-2">Tariffs & Regulations <FontAwesomeIcon icon={faCaretDown} /></NavLink>
            <NavLink to="/downloads" className="nav-link py-2">Downloads <FontAwesomeIcon icon={faCaretDown} /></NavLink>
            <NavLink to="/consumer-forms" className="nav-link py-2">Consumer Forms <FontAwesomeIcon icon={faCaretDown} /></NavLink>
            <NavLink to="/media-portal" className="nav-link py-2">Media Portal <FontAwesomeIcon icon={faCaretDown} /></NavLink>
            <NavLink to="/employee-portal" className="nav-link py-2">Employee Portal <FontAwesomeIcon icon={faCaretDown} /></NavLink>
            <NavLink to="/careers" className="nav-link py-2">Careers</NavLink>
            <NavLink to="/contact-us" className="nav-link py-2">Contact Us</NavLink>
        </nav>

        </div>
        

      </div>

    
      
    </header>
  );
}

export default NavBar;
