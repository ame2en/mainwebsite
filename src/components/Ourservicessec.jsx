import React from 'react';
import icon1 from "../assets/services/icon1.svg";
import icon2 from "../assets/services/icon2.svg";
import icon3 from "../assets/services/icon3.svg";
import icon4 from "../assets/services/icon4.svg";
import icon5 from "../assets/services/icon5.svg";
import icon6 from "../assets/services/icon6.svg";
import icon7 from "../assets/services/icon7.svg";
import icon8 from "../assets/services/icon8.svg";
import icon9 from "../assets/services/icon9.svg";
import icon10 from "../assets/services/icon10.svg";
import icon11 from "../assets/services/icon11.svg";
import icon12 from "../assets/services/icon12.svg";
import icon13 from "../assets/services/icon13.svg";
import icon14 from "../assets/services/icon14.svg";
import icon15 from "../assets/services/icon15.svg";


const Ourservicessec = () => {
  return (
    <div className='our-services-section bg-[#E4E4E4] w-full pt-10 '>
          <div className=' w-full text-center text-[36px] font-extrabold text-[#0C223D] '>Services We Offer <span className='text-[#960E0E]'>|</span></div>


          <div className="flex justify-center items-center  ">
          <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-x-2.5 gap-y-2.5 my-[40px] ">
              <a href="https://www.google.com/">

              <div 
                className="flex flex-col justify-between items-center bg-white border  rounded-lg p-4 shadow-md card  "
                style={{ height: '170px', width: '150px', }}>
                    <div className='flex justify-center items-center h-[100px] rainbow rounded-md p-4'>

                  <img src={icon1} alt="" className='h-[100px] object-cover ' style={{}} />
                    </div>
                <div className="text-center font-[650] text-[14px] text-black text">Pay Your Bill</div>
              </div>
              </a>
              <div 
                className="flex flex-col justify-between items-center bg-white border  rounded-lg p-4 shadow-lg card"
                style={{ height: '170px', width: '150px' }}>

                    <div className='flex justify-center items-center h-[100px] rainbow rounded-md p-4'>

                  <img src={icon2} alt="" className='h-[60px] ' style={{}} />
                    </div>
                <div className="text-center font-[650] text-[14px] text-black leading-none ">New Service Connection</div>
              </div>
              <div 
                className="flex flex-col justify-between items-center bg-white border  rounded-lg p-4 shadow-md card"
                style={{ height: '170px', width: '150px' }}>
                <div className='flex justify-center items-center h-[100px] rainbow rounded-md p-4'>

                    <img src={icon3} alt="" className='h-[70px] object-cover ' style={{}} />
                </div>               
                <div className="text-center font-[650] text-[14px] text-black leading-none ">Solar Net Metering</div>
              </div>
              <div 
                className="flex flex-col justify-between items-center bg-white border  rounded-lg p-4 shadow-lg card"
                style={{ height: '170px', width: '150px' }}>
                <div className='flex justify-center items-center h-[100px] rainbow rounded-md p-4'>

                <img src={icon4} alt="" className='h-[70px] object-cover ' style={{}} />
                </div>                     
                <div className="text-center font-[650] text-[14px] text-black leading-none ">Report Electrical Accidents</div>
              </div>
              <div 
                className="flex flex-col justify-between items-center bg-white border  rounded-lg p-4 shadow-md card"
                style={{ height: '170px', width: '150px' }}>
                  <div className='flex justify-center items-center h-[100px] rainbow rounded-md p-4'>

                  <img src={icon5} alt="" className='h-[70px] object-cover ' style={{}} />
                  </div> 
                <div className="text-center font-[650] text-[14px] text-black leading-none ">Our Mobile <br />App</div>
              </div>
              <div 
                className="flex flex-col justify-between items-center bg-white border  rounded-lg p-4 shadow-md card"
                style={{ height: '170px', width: '150px' }}>
                <div className='flex justify-center items-center h-[100px] rainbow rounded-md p-4'>

                <img src={icon6} alt="" className='h-[60px] object-cover ' style={{}} />
                </div> 
                <div className="text-center font-[650] text-[14px] text-black leading-none ">Electricity complaints</div>
              </div>
              <div 
                className="flex flex-col justify-between items-center bg-white border  rounded-lg p-4 shadow-md card"
                style={{ height: '170px', width: '150px' }}>
                <div className='flex justify-center items-center h-[100px] rainbow rounded-md p-4'>
                         
                <img src={icon7} alt="" className='h-[60px] object-cover ' style={{}} />
                </div> 
                <div className="text-center font-[650] text-[14px] text-black leading-none ">Your Feedback</div>
              </div>
              <div className='brder brd1 h-[4px] rounded-sm bg-[rgba(150,14,14,0.5)]  -mx-4'></div>
              <div 
                className="flex flex-col justify-between items-center bg-white border  rounded-lg p-4 shadow-md card"
                style={{ height: '170px', width: '150px' }}>
                <div className='flex justify-center items-center h-[100px] rainbow rounded-md p-4'>

                <img src={icon8} alt="" className='h-[70px] object-cover ' style={{}} />
                </div> 
                <div className="text-center font-[650] text-[14px] text-black leading-none ">Retrospective
                Survey</div>
              </div>
              <div 
                className="flex flex-col justify-between items-center bg-white border  rounded-lg p-4 shadow-md card"
                style={{ height: '170px', width: '150px' }}>
                <div className='flex justify-center items-center h-[100px] rainbow rounded-md p-4'>
                         
                <img src={icon9} alt="" className='h-[60px] object-cover ' style={{}} />
                </div> 
                <div className="text-center font-[650] text-[14px] text-black leading-none ">Deparmental
                Credit Card</div>
              </div>
              <div 
                className="flex flex-col justify-between items-center bg-white border  rounded-lg p-4 shadow-md card"
                style={{ height: '170px', width: '150px' }}>
                <div className='flex justify-center items-center h-[100px] rainbow rounded-md p-4'>
                
                <img src={icon10} alt="" className='h-[60px] object-cover ' style={{}} />
                </div> 
                <div className="text-center font-[650] text-[14px] text-black leading-none ">AGL 
                Seniority List</div>
              </div>
              <div 
                className="flex flex-col justify-between items-center bg-white border  rounded-lg p-4 shadow-md card"
                style={{ height: '170px', width: '150px' }}>
                <div className='flex justify-center items-center h-[100px] rainbow rounded-md p-4'>
                
                <img src={icon11} alt="" className='h-[80px] object-cover ' style={{}} />
                </div> 
                <div className="text-center font-[650] text-[14px] text-black leading-none ">Ease of Doing
                Business</div>
              </div>
              <div 
                className="flex flex-col justify-between items-center bg-white border  rounded-lg p-4 shadow-md card"
                style={{ height: '170px', width: '150px' }}>
                <div className='flex justify-center items-center h-[100px] rainbow rounded-md p-4'>
                
                <img src={icon12} alt="" className='h-[60px] object-cover ' style={{}} />
                </div> 
                <div className="text-center font-[650] text-[14px] text-black leading-none ">Access your <br />
                Bill</div>
              </div>
              <div 
                className="flex flex-col justify-between items-center bg-white border  rounded-lg p-4 shadow-md card"
                style={{ height: '170px', width: '150px' }}>
                <div className='flex justify-center items-center h-[100px] rainbow rounded-md p-4'>
                
                <img src={icon13} alt="" className='h-[60px] object-cover ' style={{}} />
                </div> 
                <div className="text-center font-[650] text-[14px] text-black leading-none ">EHT Line <br />Shifting</div>
              </div>
              <div 
                className="flex flex-col justify-between items-center bg-white border  rounded-lg p-4 shadow-md card"
                style={{ height: '170px', width: '150px' }}>
                <div className='flex justify-center items-center h-[100px] rainbow rounded-md p-4'>
                
                <img src={icon14} alt="" className='h-[60px] object-cover ' style={{}} />
                </div> 
                <div className="text-center font-[650] text-[14px] text-black leading-none ">EH/HT
                New Connection</div>
              </div>
              <div className='brder h-[4px] brd2 rounded-sm bg-[rgba(150,14,14,0.5)] -mx-4'></div>
              <div 
                className="flex flex-col justify-between items-center bg-white border  rounded-lg p-4 shadow-md card"
                style={{ height: '170px', width: '150px' }}>
                <div className='flex justify-center items-center h-[100px] rainbow rounded-md p-4'>
                
                <img src={icon15} alt="" className='h-[80px] object-cover ' style={{}} />
                </div> 
                <div className="text-center font-[650] text-[14px] text-black leading-none ">Consumer Grievance Portal</div>
              </div>  
          </div>
        </div>



        </div>
  )
}

export default Ourservicessec
