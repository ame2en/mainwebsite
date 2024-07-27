import React from 'react';
import "./nav.css";
import { Link } from 'react-router-dom';
import logo1 from "../assets/topbarlogos/linkedin.svg"
import logo2 from "../assets/topbarlogos/whatsapp.svg"
import logo3 from "../assets/topbarlogos/insta.svg"
import logo4 from "../assets/topbarlogos/X.svg"
import logo from "../assets/mainlogo1.png";
// import logo from "../assets/logo1.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';



const NavBar = () => {


  

  return (
    // <header className="fixed w-full z-10 bg-blue-900 text-white h-[90px]">
    //   <div className="flex justify-between items-center h-full px-4">
    //     <div className="flex items-center space-x-2">
    //       <div className="skewed bg-blue-800 rounded-l-lg px-4 py-2">
    //         <div className="transform -skew-x-[-20deg]">NPD</div>
    //       </div>
    //       <span className="font-bold text-xl">TGNPDCL</span>
    //     </div>m
    //     <div className="flex space-x-2">
    //       <a href="#linkedin" className="social-link">LinkedIn</a>
    //       <a href="#whatsapp" className="social-link">WhatsApp</a>
    //       <a href="#other1" className="social-link">Other1</a>
    //       <a href="#instagram" className="social-link">Instagram</a>
    //     </div>
    //   </div>
    //   <div className="bg-white text-blue-900 flex justify-between items-center px-4 py-2 shadow-md skew-x-2">
    //     <img src="/path-to-logo.png" alt="Logo" className="h-10" />
    //     <nav className="flex space-x-4">
    //       <Link to="/" className="nav-link">Home</Link>
    //       <Link to="/about-us" className="nav-link">About Us</Link>
    //       <Link to="/consumer-info" className="nav-link">Consumer Info</Link>
    //       <Link to="/tariffs-regulations" className="nav-link">Tariffs & Regulations</Link>
    //       <Link to="/downloads" className="nav-link">Downloads</Link>
    //       <Link to="/consumer-forms" className="nav-link">Consumer Forms</Link>
    //       <Link to="/media-portal" className="nav-link">Media Portal</Link>
    //       <Link to="/employee-portal" className="nav-link">Employee Portal</Link>
    //       <Link to="/careers" className="nav-link">Careers</Link>
    //       <Link to="/contact-us" className="nav-link">Contact Us</Link>
    //     </nav>
    //   </div>
    // </header>

    <header className='z-[100] fixed bg-white shadow-xl h-[50px] md:h-[60px] lg:h-[80px] w-full '>
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
          
          <nav className=" relative text-white  h-full w-full pl-[1rem] md:pl-[2rem] pr-[1.2rem] md:pr-[1.5rem] flex justify-between items-center text-[7px] md:text-[10px] lg:text-[12px] xl:text-base">
            <Link to="/" className="nav-link   py-2">Home</Link>
            <Link to="/about-us" className="nav-link  py-2">About Us <FontAwesomeIcon icon={faCaretDown} /></Link>
            <Link to="/consumer-info" className="nav-link py-2">Consumer Info <FontAwesomeIcon icon={faCaretDown} /></Link>
            <Link to="/tariffs-regulations" className="nav-link py-2">Tariffs & Regulations <FontAwesomeIcon icon={faCaretDown} /></Link>
            <Link to="/downloads" className="nav-link py-2">Downloads <FontAwesomeIcon icon={faCaretDown} /></Link>
            <Link to="/consumer-forms" className="nav-link py-2">Consumer Forms <FontAwesomeIcon icon={faCaretDown} /></Link>
            <Link to="/media-portal" className="nav-link py-2">Media Portal <FontAwesomeIcon icon={faCaretDown} /></Link>
            <Link to="/employee-portal" className="nav-link py-2">Employee Portal <FontAwesomeIcon icon={faCaretDown} /></Link>
            <Link to="/careers" className="nav-link py-2">Careers</Link>
            <Link to="/contact-us" className="nav-link py-2">Contact Us</Link>
        </nav>

        </div>
        

      </div>

    
      
    </header>
  );
}

export default NavBar;
