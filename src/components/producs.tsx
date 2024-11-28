import type { CustomFlowbiteTheme } from "flowbite-react";
 

import { Carousel } from "flowbite-react";

const customTheme: CustomFlowbiteTheme['carousel'] = {
   
    indicators: {
      active: {
        off: "bg-Brand-Primary opacity-30 bg-Brand-Primary ",
        on: "bg-Brand-Primary dark:bg-gray-800",
      },
    },
    root:{
        base: "relative h-full w-full ",
    leftControl: "hidden",
    rightControl: "hidden"
    }
  };

export default function Producs() {
  return (
    <>

<div className="h-[550px]  md:[1400px] lg:[1000px] pt-24  xl:h-[600px]  bg-Neutral-Silver ~px-6/36">
      <Carousel slide={false} theme={customTheme}>
  
            <section className='flex flex-row items-center justify-center gap-[104px] py-24'>
                <div className="flex flex-col justify-center text-center md:text-left">
                <h1 className='text-Neutral-D_Grey text-3xl md:text-3xl lg:text-4xl font-semibold leading-tight md:leading-[3.5rem] lg:leading-[4.75rem]'>Lessons and insights <br /><span className='text-Brand-Primary'>from 8 years</span></h1>
                <p className='text-base text-Neutral-Grey'>Where to grow your business as a photographer: site or social media?</p>
                <button className="w-[128px] mx-auto md:mx-0 text-base text-white bg-Brand-Primary hover:bg-Primary_color focus:border-2 focus:border-gray-800 font-medium rounded-md py-[0.88rem] px-[2rem] text-center  mt-8">Register</button>
                </div>
                <img className=' hidden lg:block' src="/Illustration.png" alt="Illustration" />
            </section>
            <section className='flex flex-row items-center justify-center gap-[104px] py-24'>
                <div className="flex flex-col justify-center text-center md:text-left">
                <h1 className='text-Neutral-D_Grey text-3xl md:text-3xl lg:text-4xl font-semibold leading-tight md:leading-[3.5rem] lg:leading-[4.75rem]'>Lessons and insights <br /><span className='text-Brand-Primary'>from 8 years</span></h1>
                <p className='text-base text-Neutral-Grey'>Where to grow your business as a photographer: site or social media?</p>
                <button className="w-[128px] mx-auto md:mx-0 text-base text-white bg-Brand-Primary hover:bg-Primary_color focus:border-2 focus:border-gray-800 font-medium rounded-md py-[0.88rem] px-[2rem] text-center  mt-8">Register</button>
                </div>
                <img className=' hidden lg:block' src="/Illustration.png" alt="Illustration" />
            </section>
            <section className='flex flex-row items-center justify-center gap-[104px] py-24'>
                <div className="flex flex-col justify-center text-center md:text-left">
                <h1 className='text-Neutral-D_Grey text-3xl md:text-3xl lg:text-4xl font-semibold leading-tight md:leading-[3.5rem] lg:leading-[4.75rem]'>Lessons and insights <br /><span className='text-Brand-Primary'>from 8 years</span></h1>
                <p className='text-base text-Neutral-Grey'>Where to grow your business as a photographer: site or social media?</p>
                <button className="w-[128px] mx-auto md:mx-0 text-base text-white bg-Brand-Primary hover:bg-Primary_color focus:border-2 focus:border-gray-800 font-medium rounded-md py-[0.88rem] px-[2rem] text-center  mt-8">Register</button>
                </div>
                <img className=' hidden lg:block' src="/Illustration.png" alt="Illustration" />
            </section>
  
 

 

 
 

         
 
      </Carousel>
    </div>






{/*     
    <section className='bg-[#F5F7FA]  '>

    
<div id="default-carousel" className=" container mx-auto relative w-full pt-[180px]" data-carousel="slide ">
    
    <div className="relative h-[600px] overflow-hidden rounded-lg md:h-[600px]  ">
       
        <div className="hidden duration-700 ease-in-out " data-carousel-item>
            <section className='flex flex-row  flex-wrap items-center jusify justify-center gap-[104px]'>
                <div>
                <h1 className='text-4xl font-semibold leading-[4.75rem]'>Lessons and insights <br /><span className='text-Brand-Primary'>from 8 years</span></h1>
                <p className='text-base'>Where to grow your business as a photographer: site or social media?</p>
                <button className="text-base text-white bg-Brand-Primary hover:bg-Primary_color focus:border-2 focus:border-gray-800 font-medium rounded-md py-[0.88rem] px-[2rem] text-center  mt-8">Register</button>
                </div>
                <img className='w-[391px] ' src="/Illustration.png" alt="Illustration" />
            </section>
 

        </div>
         
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <h1>lol2</h1>
        <h1>lol2</h1>
        <h1>lol2</h1>
  
        </div>
  
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <h1>lol3</h1>
        </div>
     
 
    </div>
 
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full bg-Primary_color" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full opacity-30 bg-Primary_color" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full opacity-30 bg-Primary_color" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
      
    </div>
    
</div>
</section> */}
    </>
  )
}
