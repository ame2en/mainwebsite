import React from 'react'
import h1 from "../assets/icons/h1.png";
import h3 from "../assets/icons/h3.png";

import CountUp from 'react-countup';
import h4 from "../assets/icons/h4.png";
import h2 from "../assets/icons/h2.svg";
import h5 from "../assets/icons/h5.svg";

const Impthighlights = () => {
  return (





        <div className='impt-highlights w-full  '> 
          <div className=' h-full w-[80%]  mx-auto rounded-[30px] objts bg-[#0D213D] py-4'>
            <p className=' text-[36px] font-bold text-white text-center'>Important Highlights <span className=' text-[#960E0E]'>|</span></p>
            <div className=' flex flex-row flex-wrap justify-around items-center  my-10'>
              <div className=' flex flex-col  justify-center gap-2 items-center flex-grow border-r-[3px]' >
                
                
                <img src={h1} alt="" className=' h-[120px] w-[120px] object-cover rounded-full border-white border-solid border-[10px]'  />
                <div className=' text-white text-[36px] font-bold'><CountUp start={0} end={1527} duration={2} /></div>
                <div className=' text-[20px] text-white font-bold'>33KV SS</div>
                
            </div>

              <div className=' flex flex-col  justify-center gap-2 items-center flex-grow border-r-[3px]' >
                
                
                <img src={h2} alt="" className=' h-[120px] w-[120px] object-cover rounded-full border-white border-solid border-[10px]'  />
                <div className=' text-white text-[36px] font-bold'>16</div>
                <div className=' text-[20px] text-white font-bold'>Districts</div>
                
            </div>

              <div className=' flex flex-col  justify-center gap-2 items-center flex-grow border-r-[3px]' >
                
                
                <img src={h3} alt="" className=' h-[120px] w-[120px] object-cover rounded-full border-white border-solid border-[10px] bg-black'  />
                <div className=' text-white text-[36px] font-bold'>64</div>
                <div className=' text-[20px] text-white font-bold'>Consumers</div>

                
            </div>

              <div className=' flex flex-col  justify-center gap-2 items-center flex-grow border-r-[3px]' >
                
                
                <img src={h4} alt="" className=' h-[120px] w-[120px] object-cover rounded-full border-white border-solid border-[10px] '  />
                <div className=' text-white text-[36px] font-bold'>693</div>
                <div className=' text-[20px] text-white font-bold'>33KV Feeders</div>
                
            </div>

              <div className=' flex flex-col  justify-center gap-2 items-center flex-grow' >
                
                
                <img src={h5} alt="" className=' h-[120px] w-[120px] object-cover rounded-full border-white border-solid border-[10px]'  />
                <div className=' text-white text-[36px] font-bold'>6613</div>
                <div className=' text-[20px] text-white font-bold'>11KV Feeders</div>
                
            </div>

               
               
               
               
               
            </div>

          </div>


        </div> 
 

  )
}

export default Impthighlights
