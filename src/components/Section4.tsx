import  { useEffect } from "react";
import AOS from "aos";

export default function Section4() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the element's top to start the animation
      once: false, // Whether animation should happen only once
      disable: 'mobile'
    });
  }, []);





  return (
        <>
                <section className='flex flex-row flex-wrap justify-center items-center mt-20 ~px-6/36'>
                <img  data-aos="fade-right" className='w-[442px]  ' src="/pana.png" alt="Illustration"  />
                <div className='w-[601px]'>
                <h2 data-aos="fade-left" className='text-3xl font-semibold  text-Neutral-D_Grey'>How to design your site footer like we did</h2>
                <p data-aos="fade-left"  className='text-sm text-Neutral-Grey'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button data-aos="fade-left"  className="text-base text-white bg-Brand-Primary hover:bg-Primary_color focus:border-2 focus:border-gray-800 font-medium rounded-md py-[0.88rem] px-[2rem] text-center  mt-8">Learn More</button>
                </div>
                </section>
           

                <section className=' bg-Neutral-Silver flex flex-col lg:flex-row my-12 justify-center gap-[78px] gap-y-7 py-8 ~px-6/36'>
                <div className='md:shrink-0'>
                <img data-aos="fade-right"  className='mx-auto  h-80 w-full object-cover lg:h-full lg:w-[326px]' src="/image 9.5.jpg" alt="Illustration" />
                </div>
                <div className='md:w-max-[601px]'>
                 <article data-aos="fade-left"  className='text-sm text-Neutral-Grey'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</article>
                 <h5 data-aos="fade-left"  className='text-Brand-Primary text-xl'>Tim Smith</h5>
                 <p  data-aos="fade-left"  className='text-Neutral-L_Grey text-base '>British Dragon Boat Racing Association</p>
                 
                    <div className='flex flex-col xl:flex-row xl:justify-between gap-y-4 mt-8 items-center overflow-hidden'>
                        <div className='flex ~gap-4/10 items-center'>
                        <img data-aos="fade-left"  src="/Logo1.svg" alt="" className='w-max-[40px]  '/>
                        <img data-aos="fade-left" src="/Logo2.svg" alt="" className='w-max-[40px] '/>
                        <img data-aos="fade-left"  src="/Logo3.svg" alt="" className='w-max-[40px] '/>
                        <img data-aos="fade-left" src="/Logo4.svg" alt="" className='w-max-[40px] '/>
                        <img data-aos="fade-left" src="/Logo5.svg" alt="" className='w-max-[40px] '/>
                        <img data-aos="fade-left" src="/Logo6.svg" alt="" className='w-max-[40px] '/>
                        </div>
                        <div data-aos="fade-left"  className='flex items-center'>
                            <h4 className=' text-Brand-Primary text-base font-semibold whitespace-nowrap mr-2'>Meet all customers </h4>
                            <img src="Right.svg" alt=""/>
                        </div> 
                 </div>

                </div>
                </section>
   


        </>
  )
}
