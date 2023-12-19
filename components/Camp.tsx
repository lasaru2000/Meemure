"use client";

import { useState,useEffect } from 'react';
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage : string;
  title : string;
  subtitle : string;
  reviews : string
}


const campsites = [
  {
    backgroundImage: 'bg-bg-img-1',
    title: 'Meemure Village',
    subtitle: 'Meemure, Sri Lanka',
    reviews: '40+ Good reviews'
  },
  {
    backgroundImage: 'bg-bg-img-2',
    title: 'Meemure Village',
    subtitle: 'Meemure, Sri Lanka',
    reviews: '30+ Good reviews'
  },
  {
    backgroundImage: 'bg-bg-img-3',
    title: 'Meemure Village',
    subtitle: 'Meemure, Sri Lanka',
    reviews: '70+ Good reviews'
  },
  {
    backgroundImage: 'bg-bg-img-4',
    title: 'Meemure Village',
    subtitle: 'Meemure, Sri Lanka',
    reviews: '90+ Good reviews'
  },
  {
    backgroundImage: 'bg-bg-img-5',
    title: 'Meemure Village',
    subtitle: 'Meemure, Sri Lanka',
    reviews: '50+ Good reviews'
  },
  {
    backgroundImage: 'bg-bg-img-6',
    title: 'Meemure Village',
    subtitle: 'Meemure, Sri Lanka',
    reviews: '60+ Good reviews'
  },
  {
    backgroundImage: 'bg-bg-img-7',
    title: 'Meemure Village',
    subtitle: 'Meemure, Sri Lanka',
    reviews: '50+ Good reviews'
  },
  // Add more campsite objects as needed
];


const CampSite = ({backgroundImage,title,subtitle,reviews}: CampProps) =>{


  return(
    <div className={`flex  h-[250px] w-[380px] md:h-[350px] md:w-[680px] lg:h-[600px] lg:w-[1100px] ${backgroundImage} bg-cover bg-no-repeat rounded-3xl lg:rounded-5xl 2xl:rounded-5xl lg:pr-[50] mx-auto`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex justify-center items-center">
        <div className="rounded-full bg-green-50 p-2 lg:p-3">
          <Image
          src="/folded-map.svg"
          alt="map"
          width={28}
          height={28}
          />
        </div>
        <div className="flex flex-col">
          <h4 className="bold-18 text-white pl-2 ">{title}</h4>
          <p className="regular-14 text-white pl-2">{subtitle}</p>

        </div>
        </div>

        <div className="flex justify-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
              />

            ))}

          </span>
          <p className="bold-16 md:bold-20 text-white">
           {reviews}
          </p>

        </div>
      </div>
      </div>

  )
}


const camp = () => {
  const [currentCampIndex, setCurrentCampIndex] = useState(0);
  

  
  const nextCamp = () => {
    setCurrentCampIndex((prevIndex) => (prevIndex + 1) % campsites.length);
  };
  
  useEffect(() => {
    const interval = setInterval(nextCamp, 5000); // Change campsites every 5 seconds (adjust as needed)
    return () => clearInterval(interval);
  }, [currentCampIndex])

  return (
    <section className=" 2xl:max-container relative flex flex-col  lg:mb-10 lg:py-20 xl:mb-20">
      <div className=" relative  flex h-[340px] items-start justify-start  lg:h-[400px] xl:h-[640px]">
      <CampSite 
          backgroundImage={campsites[currentCampIndex].backgroundImage}
          title={campsites[currentCampIndex].title}
          subtitle={campsites[currentCampIndex].subtitle}
          reviews={campsites[currentCampIndex].reviews}
        />
        
      </div>
      <div className=' lg:absolute  md:mt-[40px] pl-10 lg:mt-[400px]  lg:ml-[720px] lg:mr-6'>
        <div className='bg-green-50  p-8 lg:w-[500px] lg:h-[300px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-l-3xl '>
          <h2 className=' regular-16 md:regular-20 2xl:regular-64 capitalize text-white'> <strong>Hello !!</strong> Are you ready for the next adventure? </h2>
          <p className='regular-14 xl:regular-14 mt-1 text-white w-full'>
          Let's head down to the picturesque waters of Suriya Arana and partake in a series of water-based activities, including Stream Sliding, Swimming and Confidence Jumps.
Meals are always a highlight at Meemure, and you can enjoy a delightful buffet lunch made with care.
          </p>
          <Image
          src="/quote.svg"
          alt='camp-2'
          width={186}
          height={219}
          className='camp-quote'
          />
        </div>

      </div>
      
    </section>
  )
}

export default camp