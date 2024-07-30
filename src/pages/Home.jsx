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

const text="";

const items = [
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quae ipsam, non hic nesciunt quisquam blanditiis provident quas, saepe ullam ea eum sapiente. Deserunt, error! Quidem officiis inventore consequuntur deserunt!',
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quae ipsam, non hic nesciunt quisquam blanditiis provident quas, saepe ullam ea eum sapiente. Deserunt, error! Quidem officiis inventore consequuntur deserunt!',
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quae ipsam, non hic nesciunt quisquam blanditiis provident quas, saepe ullam ea eum sapiente. Deserunt, error! Quidem officiis inventore consequuntur deserunt!',
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quae ipsam, non hic nesciunt quisquam blanditiis provident quas, saepe ullam ea eum sapiente. Deserunt, error! Quidem officiis inventore consequuntur deserunt!',
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quae ipsam, non hic nesciunt quisquam blanditiis provident quas, saepe ullam ea eum sapiente. Deserunt, error! Quidem officiis inventore consequuntur deserunt!',
];

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

            <img src={alert1} alt="" className='h-[100%] shadow-lg object-cover object-right'/>
            <span className=' absolute pl-2 h-full left-0 top-0 flex items-center font-bold'>
              Alert
            </span>

          </div>
          
          
          <div className=' w-[90%] h-full  overflow-hidden px-4 text-white '> <span className='h-full flex items-center '><MarqueeComponent items={items} /></span>  </div>

          
          <div className='relative h-full w-[5%]'>

            <img src={alert2} alt="" className='h-[100%] shadow-lg w-full object-cover object-left'/>
            <span className=' absolute pr-1 h-full right-0 top-0 flex items-center font-bold'>
              <a href="">View All</a>
            </span>

          </div>
        </div>



        <div className='aboutus-section'>

        


        </div>


       
      </div>
    </div>
  );
}

export default Home;