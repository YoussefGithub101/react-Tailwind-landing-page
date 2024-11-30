import React, { useEffect } from "react";
import AOS from "aos";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the element's top to start the animation
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <section className="mt-40">
        <h1 data-aos="fade-right" className="font-semibold text-center text-3xl md:text-3xl lg:text-4xl text-Neutral-Black max-w-[887px] mx-auto leading-[4.75rem] dark:text-Neutral-White">
          Pellentesque suscipit fringilla libero eu.
        </h1>

        <button data-aos="fade-left" className="text-base text-white bg-Brand-Primary hover:bg-Primary_color focus:border-2 focus:border-gray-800 font-medium rounded-md py-[0.88rem] px-[2rem] text-center mt-8 mx-auto block">
          Get a Demo →
        </button>
      </section>
      <footer className="~px-6/36 py-16 bg-Neutral-Black mt-8">
        <div className="flex flex-col md:flex-row  gap-x-[125px] gap-y-8 justify-center ">
          <div className="flex flex-col text-center md:text-left gap-10   md:w-[350px] ">
            <div className="flex justify-center gap-2 md:justify-normal">
              <img src="/Icon.svg" alt="" />
              <img src="/Nexcent.svg" alt="" />
            </div>
            <p className="text-sm text-Neutral-Silver dark:text-Neutral-Grey">
              Copyright © 2020 Nexcent ltd. <br />
              All rights reserved
            </p>
            <div className="flex gap-4 items-center justify-center md:justify-normal">
              <div className="flex justify-center items-center rounded-full bg-Neutral-D_Grey w-8 h-8 ">
                <svg
                  className="w-6 h-6 text-Neutral-Silver "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div className="flex justify-center items-center rounded-full bg-Neutral-D_Grey w-8 h-8 ">
                <svg
                  className="w-6 h-6 text-Neutral-Silver"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div className="flex justify-center items-center rounded-full bg-Neutral-D_Grey w-8 h-8 ">
                <svg
                  className="w-6 h-6 text-Neutral-Silver"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div className="flex justify-center items-center rounded-full bg-Neutral-D_Grey w-8 h-8 ">
                <svg
                  className="w-6 h-6 text-Neutral-Silver"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-8 justify-center md:justify-between">
            <nav className="md:w-40 text-center md:text-left">
              <h4 className="text-Neutral-White font-semibold text-xl">Company</h4>
              <ul className="flex flex-col gap-3 mt-6">
                <li className="text-Neutral-Silver dark:text-Neutral-Grey text-sm">
                  <a href="">About us</a>
                </li>
                <li className="text-Neutral-Silver dark:text-Neutral-Grey text-sm">
                  <a href="">Blog</a>
                </li>
                <li className="text-Neutral-Silver dark:text-Neutral-Grey text-sm">
                  <a href="">Contact us</a>
                </li>
                <li className="text-Neutral-Silver dark:text-Neutral-Grey text-sm">
                  <a href="">Pricing</a>
                </li>
                <li className="text-Neutral-Silver dark:text-Neutral-Grey text-sm">
                  <a href="">Testimonials</a>
                </li>
              </ul>
            </nav>

            <nav className="md:w-40 text-center md:text-left">
              <h4 className="text-Neutral-White font-semibold text-xl">Support</h4>
              <ul className="flex flex-col gap-3 mt-6">
                <li className="text-Neutral-Silver dark:text-Neutral-Grey text-sm">
                  <a href="">Help center</a>
                </li>
                <li className="text-Neutral-Silver dark:text-Neutral-Grey text-sm">
                  <a href="">Terms of service</a>
                </li>
                <li className="text-Neutral-Silver dark:text-Neutral-Grey text-sm">
                  <a href="">Legal</a>
                </li>
                <li className="text-Neutral-Silver dark:text-Neutral-Grey text-sm">
                  <a href="">Privacy policy</a>
                </li>
                <li className="text-Neutral-Silver dark:text-Neutral-Grey text-sm">
                  <a href="">Status</a>
                </li>
              </ul>
            </nav>

            <div className="md:w-40 text-center md:text-left">
              <h4 className="text-Neutral-White font-semibold text-xl">
                Stay up to date
              </h4>

              <div className="relative mt-6 max-w-64 h-10">
                <input
                  type="text"
                  id="simple-search"
                  className=" bg-Neutral-D_Grey rounded-lg text-gray-300 text-sm  focus:black block dark:bg-gray-700 dark:border-gray-600  placeholder-gray-300 dark:text-white "
                  placeholder="Your email address"
                  required
                />

                <div className="absolute inset-y-0   -right-7 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_492_867)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.0303 0.969691C17.2341 1.17342 17.3031 1.47584 17.2079 1.74778L11.9579 16.7478C11.8563 17.038 11.5878 17.2369 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43538C0.91439 7.31049 0.738092 7.02671 0.750627 6.71945C0.763163 6.41219 0.961991 6.14371 1.25224 6.04213L16.2522 0.792127C16.5242 0.696948 16.8266 0.765962 17.0303 0.969691ZM9.14456 9.91612L11.1671 14.4667L14.7064 4.35429L9.14456 9.91612ZM13.6457 3.29362L3.53331 6.83297L8.0839 8.85546L13.6457 3.29362Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_492_867">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
