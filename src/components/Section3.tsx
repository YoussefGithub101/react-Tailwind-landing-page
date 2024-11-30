import { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';

import AOS from "aos";

export default function Section3() {
  const [values, setValues] = useState([0, 0, 0, 0]); // Initial state for all values

  useEffect(() => {
    const timeouts = [2245341, 46328, 828867, 1926436];

    timeouts.forEach((timeoutValue, index) => {
      setTimeout(() => {
        setValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = timeoutValue;
          return newValues;
        });
      }, 500);
    });

    return () => {
      // Clear all timeouts (not strictly necessary here since they all resolve at the same time)
    };
  }, []);
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the element's top to start the animation
      once: false, // Whether animation should happen only once
    });

 
  }, []);


  return (
    <>
      <section className="flex flex-col lg:flex-row justify-center  items-center mt-20 py-12 ~px-6/36">
        <img data-aos="fade-right" className="w-[442px] " src="/rafiki.png" alt="Illustration" />
        <div  className="max-w-[400px] lg:w-[601px]">
          <h2 data-aos="fade-left" className="text-3xl font-semibold  text-Neutral-D_Grey">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p data-aos="fade-left" className="text-sm text-Neutral-Grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button data-aos="fade-left" className="text-base text-white bg-Brand-Primary hover:bg-Primary_color focus:border-2 focus:border-gray-800 font-medium rounded-md py-[0.88rem] px-[2rem] text-center  mt-8">
            Learn More
          </button>
        </div>
      </section>

      <section className="bg-Neutral-Silver">
        <div className="grid lg:grid-cols-2 items-center gap-y-8 py-16 ~px-6/36">
          <div className="mx-auto max-w-[408px]">
            <h2 data-aos="fade-right" className="text-3xl leading-9 font-semibold text-Neutral-D_Grey">
              Helping a local{" "}
              <span className="text-Brand-Primary">
                business reinvent itself
              </span>
            </h2>
            <p data-aos="fade-right" className="text-Text-Gray-900 text-base">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="grid sm:grid-cols-2 items-center justify-center gap-y-10">
            <div data-aos="fade-down-right" className="flex gap-4 sm:mx-auto lg:mx-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="float-left"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M5.5 16.5V17H6H42H42.5V16.5V14.25C42.5 13.1228 42.0522 12.0418 41.2552 11.2448C40.4582 10.4478 39.3772 10 38.25 10H9.75C8.62283 10 7.54183 10.4478 6.7448 11.2448C5.94777 12.0418 5.5 13.1228 5.5 14.25V16.5ZM42.5 19.5V19H42H6H5.5V19.5V33.75C5.5 34.8772 5.94777 35.9582 6.7448 36.7552C7.54183 37.5522 8.62283 38 9.75 38H38.25C39.3772 38 40.4582 37.5522 41.2552 36.7552C42.0522 35.9582 42.5 34.8772 42.5 33.75V19.5ZM3.5 14.25C3.5 12.5924 4.15848 11.0027 5.33058 9.83058C6.50268 8.65848 8.0924 8 9.75 8H38.25C39.9076 8 41.4973 8.65848 42.6694 9.83058C43.8415 11.0027 44.5 12.5924 44.5 14.25V33.75C44.5 35.4076 43.8415 36.9973 42.6694 38.1694C41.4973 39.3415 39.9076 40 38.25 40H9.75C8.0924 40 6.50268 39.3415 5.33058 38.1694C4.15848 36.9973 3.5 35.4076 3.5 33.75V14.25ZM31.5 29H36C36.2652 29 36.5196 29.1054 36.7071 29.2929C36.8946 29.4804 37 29.7348 37 30C37 30.2652 36.8946 30.5196 36.7071 30.7071C36.5196 30.8946 36.2652 31 36 31H31.5C31.2348 31 30.9804 30.8946 30.7929 30.7071C30.6054 30.5196 30.5 30.2652 30.5 30C30.5 29.7348 30.6054 29.4804 30.7929 29.2929C30.9804 29.1054 31.2348 29 31.5 29Z"
                  fill="#4CAF4F"
                  stroke="#4CAF4F"
                />
              </svg>
              <div >
                  
                <h2 className="text-2xl text-Neutral-D_Grey leading-9">
                <Odometer value={values[0]} />
                </h2>
                <p className="text-base text-Neutral-D_Grey leading-6">
                  Members
                </p>
              </div>
            </div>

            <div data-aos="fade-down-left" className="flex   gap-4 sm:mx-auto  lg:mx-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="float-left"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M5.5 16.5V17H6H42H42.5V16.5V14.25C42.5 13.1228 42.0522 12.0418 41.2552 11.2448C40.4582 10.4478 39.3772 10 38.25 10H9.75C8.62283 10 7.54183 10.4478 6.7448 11.2448C5.94777 12.0418 5.5 13.1228 5.5 14.25V16.5ZM42.5 19.5V19H42H6H5.5V19.5V33.75C5.5 34.8772 5.94777 35.9582 6.7448 36.7552C7.54183 37.5522 8.62283 38 9.75 38H38.25C39.3772 38 40.4582 37.5522 41.2552 36.7552C42.0522 35.9582 42.5 34.8772 42.5 33.75V19.5ZM3.5 14.25C3.5 12.5924 4.15848 11.0027 5.33058 9.83058C6.50268 8.65848 8.0924 8 9.75 8H38.25C39.9076 8 41.4973 8.65848 42.6694 9.83058C43.8415 11.0027 44.5 12.5924 44.5 14.25V33.75C44.5 35.4076 43.8415 36.9973 42.6694 38.1694C41.4973 39.3415 39.9076 40 38.25 40H9.75C8.0924 40 6.50268 39.3415 5.33058 38.1694C4.15848 36.9973 3.5 35.4076 3.5 33.75V14.25ZM31.5 29H36C36.2652 29 36.5196 29.1054 36.7071 29.2929C36.8946 29.4804 37 29.7348 37 30C37 30.2652 36.8946 30.5196 36.7071 30.7071C36.5196 30.8946 36.2652 31 36 31H31.5C31.2348 31 30.9804 30.8946 30.7929 30.7071C30.6054 30.5196 30.5 30.2652 30.5 30C30.5 29.7348 30.6054 29.4804 30.7929 29.2929C30.9804 29.1054 31.2348 29 31.5 29Z"
                  fill="#4CAF4F"
                  stroke="#4CAF4F"
                />
              </svg>
              <div>
                <h2 className="text-2xl text-Neutral-D_Grey leading-9">
                <Odometer value={values[1]} />
                </h2>
                <p className="text-base text-Neutral-D_Grey leading-6">Clubs</p>
              </div>
            </div>
            <div data-aos="fade-up-right" className="flex gap-4  sm:mx-auto  lg:mx-0">
              <img src="/Icon.svg" alt="" className="float-left" />
              <div>
                <h2 className="text-2xl text-Neutral-D_Grey leading-9">
                <Odometer value={values[2]} />
                </h2>
                <p className="text-base text-Neutral-D_Grey leading-6">
                  Event Bookings
                </p>
              </div>
            </div>
            <div data-aos="fade-up-left" className="flex gap-4  sm:mx-auto  lg:mx-0">
              <img src="/Icon.svg" alt="" className="float-left" />
              <div>
                <h2 className="text-2xl text-Neutral-D_Grey leading-9">
                <Odometer value={values[3]} />
                </h2>
                <p className="text-base text-Neutral-D_Grey leading-6">
                  Payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
