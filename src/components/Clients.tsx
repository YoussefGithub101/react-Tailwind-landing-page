import { useEffect } from "react";
import AOS from "aos";
 

export default function Clients() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the element's top to start the animation
      once: false, // Whether animation should happen only once
    });
  }, []);


  
  return (
    <>
    <section className='text-center ~px-6/36 mt-10'>
    <h2 data-aos="fade-down" className='text-Neutral-D_Grey text-3xl font-semibold '>Our Clients</h2>
    <p data-aos="fade-down" className='text-Neutral-Grey font-normal text-base'>We have been working with some Fortune 500+ clients</p>

    <div className='marquee overflow-hidden relative h-52'>

    <div className='marquee__item block w-[200%] absolute overflow-hidden animate-[iconMarquee_30s_linear_infinite]'>
    <section className=' flex flex-row justify-between mt-[3.12rem] items-center  '>
    <img src="/Logo1.svg" className='w-[40px] h-[40px]'/>
    <img src="/Logo2.svg"className='w-[40px] h-[40px]'/>
    <img src="/Logo3.svg"className='w-[40px] h-[40px]'/>
    <img src="/Logo4.svg"className='w-[40px] h-[40px]'/>
    <img src="/Logo5.svg"className='w-[40px] h-[40px]'/>
    <img src="/Logo6.svg"className='w-[40px] h-[40px]'/>
    <img src="/Logo7.svg"className='w-[40px] h-[40px]'/>
    <img src="/Logo1.svg" className='w-[40px] h-[40px]'/>
    <img src="/Logo2.svg"className='w-[40px] h-[40px]'/>
    <img src="/Logo3.svg"className='w-[40px] h-[40px]'/>
    <img src="/Logo4.svg"className='w-[40px] h-[40px]'/>
    <img src="/Logo5.svg"className='w-[40px] h-[40px]'/>
    <img src="/Logo6.svg"className='w-[40px] h-[40px]'/>
    <img src="/Logo7.svg"className='w-[40px] h-[40px]'/>
    </section>
 
    </div>
 
 

 
    </div>
 

    <div data-aos="fade-down" className='mt-10 md:w-[542px] mx-auto '>
    <h3 className='text-Neutral-D_Grey  text-xl sm:text-2xl md:text-3xl font-semibold'>Manage your entire community in a single system</h3>
    <p className='text-Neutral-Grey font-normal text-base'>Who is Nextcent suitable for?</p>
    </div>
         {/*  --------------------------------------------------- */}


    <div className='grid gap-y-10 md:grid-cols-3 items-center mt-10 '>

      <section data-aos="fade-up-right" className='flex flex-col justify-center mx-auto text-center max-w-[299px]'> 
      <div className="relative mx-auto z-20">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
<path d="M23.99 10C20.4187 10 17.5114 12.9339 17.5114 16.5203C17.5114 18.7892 18.6765 20.7925 20.4358 21.9602C18.3109 22.6706 16.4723 23.9985 15.1238 25.7357C14.3782 25.1622 13.5451 24.701 12.647 24.3705C14.0089 23.3595 14.8989 21.7353 14.8989 19.91C14.8989 16.8682 12.4388 14.3782 9.41547 14.3782C6.39215 14.3782 3.93208 16.8682 3.93208 19.91C3.93208 21.7364 4.82277 23.3613 6.18579 24.3723C2.57721 25.7039 0 29.1903 0 33.2933V36.1754C0.000369347 36.3951 0.0882567 36.6056 0.244089 36.7604C0.39992 36.9155 0.610779 37.0019 0.830496 37.0011H13.4755C13.5061 37.0045 13.5368 37.0063 13.5674 37.0059H34.4133C34.4439 37.0063 34.4749 37.0045 34.5052 37.0011H47.1511C47.6057 36.9993 47.9739 36.6304 47.975 36.1754V33.2933C47.975 29.1903 45.4022 25.7039 41.7955 24.3719C43.1585 23.3613 44.0492 21.736 44.0492 19.9096C44.0492 16.8679 41.5892 14.3778 38.5658 14.3778C35.5426 14.3778 33.0824 16.8679 33.0824 19.9096C33.0824 21.735 33.9728 23.3594 35.3346 24.3701C34.4347 24.7014 33.6013 25.1641 32.8546 25.739C31.5067 24.0008 29.6707 22.6711 27.5459 21.9602C29.3047 20.7925 30.4703 18.7892 30.4703 16.5203C30.4703 12.9339 27.5614 10 23.9902 10H23.99ZM23.99 11.6544C26.661 11.6544 28.8142 13.822 28.8142 16.5203C28.8142 19.1976 26.6945 21.3442 24.0531 21.3786C24.0321 21.3786 24.0114 21.3756 23.99 21.3756C23.9686 21.3756 23.9483 21.3786 23.9268 21.3786C21.2854 21.3446 19.1672 19.1977 19.1672 16.5203C19.1672 13.8217 21.3186 11.6544 23.9896 11.6544H23.99ZM9.41556 16.0324C11.5348 16.0324 13.2446 17.7525 13.2446 19.9099C13.2446 22.0528 11.557 23.7655 9.45763 23.7887C9.4436 23.7887 9.42994 23.7873 9.41553 23.7873C9.4015 23.7873 9.38784 23.7887 9.37344 23.7887C7.2741 23.7655 5.58647 22.0524 5.58647 19.9099C5.58647 17.7526 7.29623 16.0324 9.4155 16.0324H9.41556ZM38.5653 16.0324C40.6846 16.0324 42.3944 17.7525 42.3944 19.9099C42.3944 22.0528 40.7067 23.7655 38.6074 23.7887C38.5934 23.7887 38.5797 23.7873 38.5653 23.7873C38.5513 23.7873 38.5376 23.7887 38.5232 23.7887C36.4239 23.7655 34.7363 22.0524 34.7363 19.9099C34.7363 17.7526 36.446 16.0324 38.5653 16.0324H38.5653ZM23.9266 23.0328C23.9477 23.0332 23.9684 23.0358 23.9898 23.0358C24.0108 23.0358 24.0315 23.0328 24.0529 23.0328C29.3502 23.0668 33.5896 27.3427 33.5896 32.6952L33.5892 35.3511H14.3911V32.6952C14.3911 27.3422 18.6293 23.0669 23.9259 23.0328H23.9266ZM9.35223 25.445C9.37327 25.4454 9.39395 25.4479 9.41537 25.4479C9.43679 25.4479 9.4571 25.445 9.47852 25.445C11.2702 25.4594 12.9054 26.0772 14.2074 27.1108C13.2757 28.7593 12.7369 30.6621 12.7369 32.6957V35.3452H1.65369V33.2932C1.65369 28.9431 5.07396 25.4789 9.35203 25.4446L9.35223 25.445ZM38.502 25.445C38.5234 25.4454 38.5437 25.4479 38.5652 25.4479C38.5866 25.4479 38.6069 25.445 38.6283 25.445C42.9064 25.479 46.3266 28.9435 46.3266 33.2935V35.3452H35.2377L35.2374 32.6957C35.2374 30.6632 34.7001 28.7618 33.7702 27.1137C35.0726 26.0787 36.7089 25.4594 38.5021 25.445H38.502Z" 
fill="#103E13"/>
</svg>
  <span className="absolute w-[3.125rem] h-[3.0625rem] rounded-tl-[1.125rem] rounded-tr-[0.3125rem] rounded-br-[0.625rem] rounded-bl-[0.3125rem] bg-Tint-T5  top-1 left-3 -z-10"></span>
</div>
      <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-Neutral-D_Grey mt-4'>Membership Organisations</h3> 
      <p className='text-sm font-normal text-Neutral-Grey  md:w-[251px] mx-auto mt-2'>Our membership management software provides full automation of membership renewals and payments</p>
      </section>

      <section  data-aos="fade-up"  className='flex flex-col justify-center mx-auto text-center max-w-[299px]'> 
      <div className="relative mx-auto z-20">
  <img src="/building.svg" alt="people"  />
  <span className="absolute w-[3.125rem] h-[3.0625rem] rounded-tl-[1.125rem] rounded-tr-[0.3125rem] rounded-br-[0.625rem] rounded-bl-[0.3125rem] bg-Tint-T5  top-1 left-3 -z-10"></span>
</div>
      <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-Neutral-D_Grey mt-4'>Membership Organisations</h3> 
      <p className='text-sm font-normal text-Neutral-Grey  md:w-[251px] mx-auto mt-2'>Our membership management software provides full automation of membership renewals and payments</p>
      </section>

      <section data-aos="fade-up-left" className='flex flex-col justify-center mx-auto text-center max-w-[299px]'> 
      <div className="relative mx-auto z-20">
  <img src="/hands.svg" alt="people"  />
  <span className="absolute w-[3.125rem] h-[3.0625rem] rounded-tl-[1.125rem] rounded-tr-[0.3125rem] rounded-br-[0.625rem] rounded-bl-[0.3125rem] bg-Tint-T5  top-1 left-3 -z-10"></span>
</div>
      <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-Neutral-D_Grey mt-4'>Membership Organisations</h3> 
      <p className='text-sm font-normal text-Neutral-Grey  md:w-[251px] mx-auto mt-2'>Our membership management software provides full automation of membership renewals and payments</p>
      </section>
 

 
    </div>

    </section>
    </>
  )
}