import React, { useState,useRef,useEffect } from 'react';
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
  const dropdownRef = useRef(null);

  const handleDropdownClick = (menu) => {
    setDropdown((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown({});
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



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
                  <div className='absolute  left-0  w-48 mt-2'>
                    <div className='mt-1 bg-[#0D213D]  rounded-lg '>
                    <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200">About NPDCL</NavLink>
                    <NavLink to="/consumer/info2" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200">Vision & Mission</NavLink>
                    <NavLink to="/consumer/info3" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Board Of Directors</NavLink>
                    <NavLink to="/consumer/info3" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Organization Chart</NavLink>
                    <NavLink to="/consumer/info3" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Quarterly Finalized Results</NavLink>
                    <NavLink to="/consumer/info3" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Annual Reports</NavLink>
                    <NavLink to="/consumer/info3" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Annual Returns</NavLink>
                    <NavLink to="/consumer/info3" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Corporate Policies</NavLink>
                    <NavLink to="/consumer/info3" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Awards and Recognition</NavLink>
                    </div>
                  </div>
                )}
             </div>



            <div className="nav-link py-2  relative" onClick={() => handleDropdownClick('consumer')}>
            <NavLink  >Consumer Info  {!dropdown.consumer ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}</NavLink>
                {dropdown.consumer && (
                  <div className='absolute  left-0  w-56 mt-2'>
                  <div className='mt-1 bg-[#0D213D] rounded-lg flex flex-col'>
                  <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Citizen Charter</NavLink>
                  <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Service Request</NavLink>
                  <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">NPDCL Service at MEE SEVA Centers</NavLink>
                  <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Safety Measures</NavLink>
                  <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Green Tips</NavLink>
                  <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Power Shutdown Notifications</NavLink>
                  <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Category & Load Wise Charges</NavLink>
                  <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Calculate Development Charges & Security Deposit</NavLink>
                  </div>
                </div>
                )}
            </div>



            <div className="nav-link py-2 relative" onClick={() => handleDropdownClick('tariffs')}>
            <NavLink  >Tariffs & Regulations {!dropdown.tariffs ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}</NavLink>
            {dropdown.tariffs && (
              <div className='absolute  left-0 w-48 mt-2 '>
                    <div className='mt-1 bg-[#0D213D] rounded-lg '>
                    <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Regulations</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Proceedings</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Directives</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Orders</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Filings</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Replies to Objections </NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Standards of Performance</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Consumer Grivances Redressal Forums</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Biling Procedure</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Terms and Conditions(GTCS)</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Electricity Act 2003</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">cost Data</NavLink>
                    </div>
                  </div>
                )}
            </div>


            <div className="nav-link py-2 relative" onClick={() => handleDropdownClick('downs')}>

            <NavLink  >Downloads {!dropdown.downs ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}</NavLink>
            {dropdown.downs && (
                  <div className='absolute  left-0 w-48 mt-2 '>
                    <div className='mt-1 bg-[#0D213D] rounded-lg '>
                    <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Application Forums</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-1 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">RTI Manual</NavLink>
                    </div>
                  </div>
                )}
            </div>



                <div className="nav-link py-2 relative" onClick={() => handleDropdownClick('forums')}>
            <NavLink >Consumer Forms {!dropdown.forums ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}</NavLink>
            {dropdown.forums && (
                  <div className='absolute  right-0 w-52 mt-2 '>
                    <div className='mt-1 bg-[#0D213D] rounded-lg '>
                    <NavLink to="/consumer/info1" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">About CGRF</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Consumer Complaint Registration</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">CGRF Orders</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">CGRF Quarterly Reports</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Compensations Paid</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">APERC Directive on CGRF orders Implementation</NavLink>
                    </div>
                  </div>
                )}
                </div>



            <div className="nav-link py-2 relative" onClick={() => handleDropdownClick('media')}>
              
            <NavLink  >Media Portal {!dropdown.media ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}</NavLink>
            {dropdown.media && (
              <div className='absolute  left-0 w-36 mt-2 '>
                    <div className='mt-1 bg-[#0D213D] rounded-lg '>
                    <NavLink to="/consumer/info1" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Press Releases</NavLink>
                    <NavLink to="/consumer/info1" className="block px-4 py-2 hover:translate-x-2 hover:font-semibold ease-in-out duration-200 ">Photo Gallery</NavLink>
                    </div>
                  </div>
                )}

            </div>



            <NavLink to="/employee-portal" className="nav-link py-2">Employee Portal </NavLink>




            <NavLink to="/careers" className="nav-link py-2">Careers</NavLink>
            <NavLink to="/contact-us" className="nav-link py-2">Contact Us</NavLink>
        </nav>

        </div>
        

      </div>

    
      
    </header>
  );
}

export default NavBar;
