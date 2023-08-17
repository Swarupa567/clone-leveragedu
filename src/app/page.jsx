"use client";
import Header from './components/header';
import Banner from './components/Banner';
import {motion} from 'framer-motion';
import {useRef, useState, useEffect} from 'react';
import images from './components/images';
import Image from 'next/image';
import whatsapp from './assets/whatsapp.png';
import Lottie from 'lottie-react';
import animation from './assets/animation_llf6wmcy.json';

export default function Home() {
  const[width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[])

  return (
    <main>
       <p className='bg-blue-950 block w-full text-center py-2' >Leverage edu scholarships worth 7,00,000<button className='border-solid border-2 rounded p-2 border-white-500 p-0.5 px-2.5 rounded-xl ml-2'>Apply Now</button></p>
        <Header />
        <span className='flex'>
        <Banner /> &nbsp;&nbsp;
        <motion.div ref={carousel} className='carousel' >
          <motion.div drag ='x' dragConstraints={{right:0, left: -width}} className='inner-carousel'>
            {images.map(image => {
              return(
                <motion.div className='item' key={image}>
                  <Image src={image} alt='images' height='200' width='200'/>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
        </span>
        <Lottie animation={animation} />
        <Image src={whatsapp} alt='Whatsapp' height='30' width='30' className='float-right	mr-24 -mt-32'/>
    </main>

  )
}
