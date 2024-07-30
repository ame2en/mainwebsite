import React from 'react';
import "./home.css";
import image1 from "../assets/coverimages/image1.jpg";
import image2 from "../assets/coverimages/image2.png";
import image3 from "../assets/coverimages/image3.jpg";
import image4 from "../assets/coverimages/image4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alert1 from "../assets/alert1.svg"
import alert2 from "../assets/alert2.svg"
import MarqueeComponent from '../components/MarqueeComponent.jsx';
import building1 from "../assets/building1.png"



const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    cssEase: "linear",
    fade: true, 
    arrows: false 
  };

  return (
    <div className='absolute top-[50px] md:top-[60px] lg:top-[80px]  w-full '>
    {/* <div className='mt-[50px] md:mt-[60px] lg:mt-[80px]  w-full '> */}
      <div className='  h-[200vh] w-full'>
        <div className="slider-container w-full relative">
          <Slider {...settings}>
            <div className='relative '>
              <img src={image1} alt="Slide 1" className="slider-image " />
            </div>
            <div className='relative '>
              <img src={image2} alt="Slide 2" className="slider-image " />
            </div>
            <div className='relative '>
              <img src={image3} alt="Slide 3" className="slider-image" />
            </div>
            <div className='relative '>
              <img src={image4} alt="Slide 3" className="slider-image" />
            </div>
          </Slider>
          <div className='absolute bottom-0 w-full mx-auto h-[50%] text-white bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)] flex justify-center items-center'></div>
        </div>


        <div className="alert-section w-full h-[20px] sm:h-[25px] md:h-[30px] lg:h-10 bg-[#0C223D] flex items-center ">
          <div className='relative h-full w-[5%]'>

            <img src={alert1} alt="" className='h-[100%] shadow-lg w-full object-cover object-right-center'/>
            <span className='text-sm md:text-base absolute pl-2 h-full left-0 top-0 flex items-center font-bold'>
              Alert
            </span>

          </div>
          
          
          <div className=' w-[90%] h-full  overflow-hidden px-4 text-white '> <span className='h-full flex items-center '><MarqueeComponent  /></span>  </div>

          
          <div className='relative h-full w-[5%]'>

            <img src={alert2} alt="" className='h-[100%] shadow-lg w-full object-cover object-left-center'/>
            <span className='text-[12px] md:text-base absolute pr-1 h-full right-0 top-0 flex items-center font-bold'>
              <a href="">View All</a>
            </span>

          </div>
        </div>



        <div className='aboutus-section flex flex-col md:flex-row  justify-center items-center flex-wrap w-full mt-12 md:mt-16'>

        <div className=' w-[80%]  md:w-[40%] py-10 flex flex-col gap-8 md:gap-16 px-8 md:px-10'>

        <div className=' text-[24px] md:text-[36px]  font-extrabold text-[#0C223D]'>About Us <span className='text-[#960E0E]'>|</span></div>
        <div  className=' text-base font-[600] md:text-lg  ' style={{textIndent:"100px"}}>                     Northern Power Distribution Company of Telangana Ltd (TGNPDCL) was under the Companies Act,1956 as a Public Limited Company  30-03-2000 with head quarters at Warangal to carryout  distribution business as part of the unbundling of  A.P.S.E.B.</div>
        <div className=' text-end '> <button className=' bg-[#0C223D] text-white md:text-base text-sm p-1 md:p-2 px-6 md:px-12 rounded-lg'>Read More</button></div>
        </div>
        <div className='  w-[80%] md:w-[40%]  '>  
            <img src={building1} className='mx-auto w-[90%] h-[90%] object-cover rounded-xl shadow-lg' alt="" />
        </div>
        </div>


        <div className=' w-full'>
          
        </div>


       
      </div>
    </div>
  );
}

export default Home;