import disney from '../assets/hotstar.jpg';
import accenture from '../assets/accenture.png';
import amazon from '../assets/amazon.png';
import braclays from '../assets/barclays.png';
import ey from '../assets/ey.png';
import google from '../assets/google.png';
import Image from 'next/image'
import {motion} from 'framer-motion';

export default function Banner() {
  return (
    
    <div className='flex min-w-1/2 overflow-hidden'>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.75, ease:"easeInOut"}}    
    >
      
     
    <div>
        <h1 className='font-bold text-5xl mt-16 pl-24'>FIRST IN THE <br />FAMILY</h1>
        <p className='pt-6 pl-24'>They are global citizens of <br />tomorrow.Start your study<br /> abroad journey today.</p>
        <span className='flex pt-4 pl-24'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>&nbsp;<p>Live on</p>&nbsp;<Image src={disney} alt="disney" height='40' width='40' />
          </span>
          <button className='bg-gradient-to-l pl-20 mt-4'><a href="#_" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
          <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span class="relative">Get your shortlist for FREE</span>
          </a></button><br />
          <button className='mt-4 pl-24 pr-20 ml-12'><a href="#_" class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
          <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
          <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
          <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
          <span class="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Talk to an expert</span>
          </a></button>
          <p className='mt-4 pl-24 text-xs'>95% of our students get an admit in less than 4 weeks</p>
          <p className='text-xs pl-24 pt-6'>Our students finished university to work at global offices of:</p>
          <div className='flex pl-24 mt-3 justify-evenly mb-3'>
            <Image src={google} alt="Google" height='30' width ='30'/>
            <Image src={braclays} alt="barclays" height='30' width ='30'/>
            <Image src={ey} alt="ey" height='30' width ='30'/>
            <Image src={amazon} alt="amazon" height='30' width ='30'/>
            <Image src={accenture} alt="accenture" height='30' width ='30'/>
          </div>
        </div>
    </motion.div>       
        </div>
  )
}

