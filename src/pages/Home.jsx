import React from 'react';
import "./home.css";
import image1 from "../assets/coverimages/image1.jpg";
import image2 from "../assets/coverimages/image2.png";
import image3 from "../assets/coverimages/image3.jpg";
import image4 from "../assets/coverimages/image4.jpg";
import image5 from "../assets/coverimages/image5.jpg";
import image6 from "../assets/coverimages/image6.jpg";
import image7 from "../assets/coverimages/image7.jpg";
import image8 from "../assets/coverimages/image8.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alert1 from "../assets/alert1.svg"
import alert2 from "../assets/alert2.svg"
import MarqueeComponent from '../components/MarqueeComponent.jsx';
import building1 from "../assets/building1.png"
import vision from "../assets/vision.jpg";
import mission from "../assets/mission.jpg";
import Ourservicessec from '../components/Ourservicessec.jsx';
import Footer from '../components/Footer.jsx';
import Impthighlights from '../components/Impthighlights.jsx';


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
    <div className='absolute top-[50px] md:top-[60px] lg:top-[90px]  w-full '>
    {/* <div className='mt-[50px] md:mt-[60px] lg:mt-[80px]  w-full '> */}
      <div className=' w-full'>
        <div className="slider-container w-full h-[70vh] relative">
          <Slider {...settings}>
            <div className='relative '>
              <img src={image1} alt="Slide 1" className="slider-image " />
              <div> </div>
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
            <div className='relative '>
              <img src={image5} alt="Slide 3" className="slider-image" />
            </div>
            <div className='relative '>
              <img src={image6} alt="Slide 3" className="slider-image" />
            </div>
            <div className='relative '>
              <img src={image7} alt="Slide 3" className="slider-image" />
            </div>
            <div className='relative '>
              <img src={image8} alt="Slide 3" className="slider-image" />
            </div>
          </Slider>
          {/* <div className='absolute bottom-0 w-full  h-[20%] text-white bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] flex justify-center items-center'></div> */}
        </div>


        <div className="alert-section w-full h-[20px] sm:h-[25px] md:h-[30px] lg:h-10 bg-[#0C223D] flex items-center ">
          <div className='relative h-full w-[5%]'>

            <img src={alert1} alt="" className='h-[100%] shadow-lg w-full object-cover object-right-center'/>
            <span className=' absolute pl-2 h-full left-0 top-0 flex items-center font-bold text-start'>
              Alert
            </span>

          </div>
          
          
          <div className=' w-[90%] h-full  overflow-hidden px-4 text-white '> <span className='h-full flex items-center '><MarqueeComponent  /></span>  </div>

          
          <div className='relative h-full w-[5%]'>

            <img src={alert2} alt="" className='h-[100%] shadow-lg w-full object-cover object-left-center'/>
            <span className=' absolute pr-1 h-full right-0 top-0 flex items-center text-sm font-bold text-end'>
              <a href="">View All</a>
            </span>

          </div>
        </div>



        <div className='aboutus-section flex flex-col md:flex-row  justify-center items-center flex-wrap w-full mt-12 md:mt-16'>

        <div className=' w-[80%]  md:w-[40%] py-10 flex flex-col gap-8 md:gap-16 px-8 md:px-10'>

        <div className=' text-[24px] md:text-[36px]  font-extrabold text-[#0C223D]'>About Us <span className='text-[#960E0E]'>|</span></div>
        <div  className=' text-base font-[600] md:text-lg  ' style={{textIndent:"100px"}}>Northern Power Distribution Company of Telangana Ltd (TGNPDCL) was under the Companies Act,1956 as a Public Limited Company  30-03-2000 with head quarters at Warangal to carryout  distribution business as part of the unbundling of A.P.S.E.B.</div>
        <div className=' text-end '> <button className=' bg-[#0C223D] text-white md:text-base text-sm p-1 md:p-2 px-6 md:px-12 rounded-lg'>Read More</button></div>
        </div>
        <div className='  w-[80%] md:w-[40%]  '>  
            <img src={building1} className='mx-auto w-[90%] h-[90%] object-cover rounded-xl shadow-lg' alt="" />
        </div>
        </div>

        <div className='h-[10vh] w-full'></div>


        <div className=' w-full  py-1'>
          <div className='  bg-slate-600 w-[90%]   mx-auto my-20 bg-gradient-to-tr from-[#970E0E] to-[#0D213D] flex flex-col gap-30'>

            <div className=' flex justify-center w-full '>
              <div className='-mt-[50px] flex justify-center w-full '>

              <div className='w-[40%] relative  '><img src={vision} alt=""  className= ' absolute translate-y-[10%] -right-10 w-[80%] h-[80%]  z-100 bg-slate-200 object-cover rounded-xl shadow-custom'/></div>
              <div className= ' w-[40%] bg-white shadow-custom  pl-[130px] pr-[70px] pb-[70px]  '> 
                
                <div className=' text-[36px] font-extrabold mt-[30px] text-end '> <span className='gradient-text mr-10'>VISION</span></div>
                <p className=' text-[20px] text-[#3D3D3D] font-medium mt-[30px] '>NPDCL shall become one of the best Power Distribution Utilities in the Country, with high customer focus, financial strength and operational efficiency.</p>

              </div>

              </div>
            </div>

            <div className=' flex justify-center w-full mt-20'>
              <div className='-mb-[50px] flex justify-center w-full '>

              <div className= ' w-[40%] bg-white shadow-custom  pr-[130px] pl-[70px] pb-[70px]  '> 
                
                <div className=' text-[36px] font-extrabold mt-[30px] '> <span className='gradient-text ml-8'>MISSION</span></div>
                <p className=' text-[20px] text-[#3D3D3D] font-medium mt-[30px] '>Provide safe, reliable, uninterrupted and quality power to all its customers at a competitive cost and a reasonable return to all its stakeholders duly following sound commercial practices and business ethics.</p>

              </div>
              <div className='w-[40%] relative  '><img src={mission} alt=""  className= ' absolute translate-y-[10%] -left-10 w-[80%] h-[80%]  z-100 bg-slate-200 object-cover rounded-xl shadow-custom'/></div>

              </div>
            </div>
          </div>
        </div>


        <div className='h-[10vh] w-full'></div>

        <Ourservicessec/>

        <div className='h-[10vh] w-full'></div>

        <Impthighlights/>

        <div className='h-[10vh] w-full'></div>

        <Footer />

      </div>
    </div>
  );
}

export default Home;