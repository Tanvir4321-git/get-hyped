import React, { useRef } from 'react';
import { LuArrowUpRight } from "react-icons/lu"

const Content = () => {
    const videoRef = useRef(null);
const handleHover = () => videoRef.current.play();
const handleLeave = () => {
    
    videoRef.current.pause();
   
    videoRef.current.currentTime = 0; 
}


    return (
        <section className='max-w-345 mx-auto mt-160 md:mt-170 px-4.25 md:px-7.5'>

            <div className='md:ml-28.75'>

                <h1 className='font-bold text-[49px] md:text-[91px] leading-12.25 md:leading-23 mb-4 text-[#161616] '>Content <br /> dat scoort.</h1>

                <p className='font-semibold text-[23px] leading-7.5  mb-4 text-[#161616]'>Wij vertellen jouw verhaal. Op <br /> een manier die écht past bij jouw <br />doelgroep. Metcreatieve content <br />  die werkt en het verschil maakt.</p>

                <button className="flex items-center gap-2  border rounded-lg px-1.5 py-1.5 text-[13px] font-semibold text-black bg-white  cursor-pointer group hover:-rotate-6 hover:scale-105 transition-transform duration-300 ease-in-out">
                    Bekijk al ons werk
                    <span className="flex items-center justify-center w-7.5 h-7.5 bg-black rounded-md group-hover:-rotate-4 group-hover:scale-105 ease-in-out  transition-all duration-300">
                        <svg className=" text-white transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </span>
                </button>


                <div className='mt-12 cursor-pointer group hover:-rotate-2 transition-all duration-500 ease-in-out' >

                    <video ref={videoRef} onMouseEnter={handleHover}
  onMouseLeave={handleLeave} className='w-86 h-112.5    border-8 border-[#fa5424] object-fill rounded-3xl' muted autoPlay loop src="https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4"></video>


                    
                    <div className='relative z-50 -mt-50 ml-5.5'>

                        <svg className='-mb-15 ' xmlns="http://www.w3.org/2000/svg" width='26%' viewBox="0 0 429 174" fill="none"><path d="M428.625 35.0943V136.589C428.625 152.326 428.625 167.249 428.625 173.088L1.03513e-06 173.082C-1.56688e-05 170.148 0.000175319 166.808 0.000175319 159.068V77.9695C0.000175319 70.9826 5.03458 65.0132 11.904 63.8674L388.605 1.00885C409.565 -2.47661 428.625 13.7568 428.625 35.0862" fill="#fa5424"></path></svg>

                        <div className='bg-[#fa5424] w-[300px] -mt-1 rounded-b-2xl p-3'>
                            <h3 className='font-semibold text-[23px] mb-3 text-white leading-6.25'>Van nul naar vol,<br /> binnen 3 weken

                            </h3>
                            <button className='font-medium text-white bg-white/40 p-2 rounded-lg text-[14px]'>
                                Built
                            </button>

<button className='absolute top-2 left-63'>

                            <span className="flex items-center justify-center  w-10 h-10 bg-white rounded-full  overflow-hidden relative  z-50">
                                <svg className='-rotate-45 absolute transition-all duration-300 ease-in-out group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0' xmlns="http://www.w3.org/2000/svg" height={16} width={16} viewBox="0 0 28 27" fill="none" ><path d="M14.9554 26.0653L12.2003 23.337L20.4522 15.0851L0.404297 15.0851L0.404297 11.0996L20.4522 11.0996L12.2003 2.86109L14.9554 0.119385L27.9284 13.0923L14.9554 26.0653Z" fill="#161616"></path></svg>

                                
                                <svg className='-rotate-45 absolute -translate-x-6 translate-y-6  opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100' xmlns="http://www.w3.org/2000/svg" height={16} width={16} viewBox="0 0 28 27" fill="none" ><path d="M14.9554 26.0653L12.2003 23.337L20.4522 15.0851L0.404297 15.0851L0.404297 11.0996L20.4522 11.0996L12.2003 2.86109L14.9554 0.119385L27.9284 13.0923L14.9554 26.0653Z" fill="#161616"></path></svg>
                            </span>
</button>


                        </div>

                    </div>

                    


                </div>


            </div>

        </section>
    );
};

export default Content;