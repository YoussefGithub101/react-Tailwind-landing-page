import  { useEffect } from "react";
import AOS from "aos";
export default function Section5() {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          offset: 100, // Offset from the element's top to start the animation
          once: false, // Whether animation should happen only once
        });
      }, []);
    



  return (
    <>
    <section className='~px-6/36'>
        <h2 data-aos="fade-down" className='text-3xl text-Neutral-D_Grey text-center font-semibold'>Caring is the new marketing</h2>
        <p data-aos="fade-down" className='text-base text-Neutral-Grey text-center max-w-[628px] mx-auto font-normal'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>

         <div className='flex flex-col xl:flex-row xl:justify-between mt-12 gap-y-40'>
        
        <div className='mx-auto w-full xl:w-auto'>

            <div data-aos="fade-up" className='relative '>

            <img src="/image 18.png" className='xl:w-[349px] md:w-[500px] w-full mx-auto' />
            <div   className='md:w-[500px] w-full p-4 bg-Neutral-Silver rounded-b-lg xl:rounded-lg shadow-2xl  mx-auto absolute inset-x-0 -bottom-20 xl:w-min '>
                <h4 className='text-xl text-center text-Neutral-Grey font-semibold leading-7 xl:w-[285px]'>Creating Streamlined Safeguarding Processes with OneRen</h4>
                <a href="#"><h4 className='mt-4 text-xl text-Brand-Primary text-center font-semibold'>Readmore →</h4></a>
            </div>
            </div>
        </div>
        <div className='mx-auto w-full xl:w-auto'>

            <div data-aos="fade-down" className='relative '>

            <img src="/image 19.png" className='xl:w-[349px] md:w-[500px] w-full mx-auto' />
            <div  className='md:w-[500px] w-full p-4 bg-Neutral-Silver rounded-b-lg xl:rounded-lg shadow-2xl  mx-auto absolute inset-x-0 -bottom-20 xl:w-min '>
                <h4 className='text-xl text-center text-Neutral-Grey font-semibold leading-7   xl:w-[285px]'>Creating Streamlined Safeguarding Processes with OneRen</h4>
                <a href="#"><h4 className='mt-4 text-xl text-Brand-Primary text-center font-semibold'>Readmore →</h4></a>
            </div>
            </div>
        </div>
        <div data-aos="fade-up" className='mx-auto w-full xl:w-auto'>

            <div className='relative '>

            <img src="/image 20.png" className='xl:w-[349px] md:w-[500px] w-full mx-auto' />
            <div className='md:w-[500px] w-full p-4 bg-Neutral-Silver rounded-b-lg xl:rounded-lg shadow-2xl  mx-auto absolute inset-x-0 -bottom-20 xl:w-min '>
                <h4 className='text-xl text-center text-Neutral-Grey font-semibold leading-7   xl:w-[285px]'>Creating Streamlined Safeguarding Processes with OneRen</h4>
                <a href="#"><h4 className='mt-4 text-xl text-Brand-Primary text-center font-semibold'>Readmore →</h4></a>
            </div>
            </div>
        </div>
      
        
 

 
 
        </div> 


{/*         <div className='mx-auto w-full xl:w-auto'>

<div className='relative '>

<img src="/image 18.png" className='xl:w-[349px] w-full ' />
<div className='w-[80%] p-4 bg-Neutral-Silver rounded-lg shadow-2xl  mx-auto absolute inset-x-0 -bottom-20 xl:w-min '>
    <h4 className='text-xl text-center text-Neutral-Grey font-semibold leading-7   xl:w-[285px]'>Creating Streamlined Safeguarding Processes with OneRen</h4>
    <a href="#"><h4 className='mt-4 text-xl text-Brand-Primary text-center font-semibold'>Readmore →</h4></a>
</div>
</div>
</div> */}
    </section>

    </>
  )
}
