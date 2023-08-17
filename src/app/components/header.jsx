import logo from '../assets/Leveragelogo.jpg';
import Image from 'next/image';

export default function header() {
  return (
    <div className='flex justify-around mt-2'>
    <Image src={logo} alt='logo' height='80' width='80' className='bg-black'/>
    <div className='flex justify-around gap-x-5 -mr-24 '>
      <p className='transition duration-400 ease-in-out hover:scale-110'>Study Abroad</p>
      <p className='transition duration-400 ease-in-out hover:scale-110'>Accomodation</p>
      <p className='transition duration-400 ease-in-out hover:scale-110'>Test Prep</p>
      <p className='transition duration-400 ease-in-out hover:scale-110'>Finance</p>
      <p className='transition duration-400 ease-in-out hover:scale-110'>Community</p>
      <p className='transition duration-400 ease-in-out hover:scale-110'>Products</p>
      <p className='transition duration-400 ease-in-out hover:scale-110'>More</p>
      <span className='border-white border-2 rounded-lg p-1.5'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
      </span>
      <span className='border-white border-2 rounded-lg p-1.5'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
      </span>
      <span className='border-white border-2 rounded-lg p-1.5'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
      </span>
    </div>
    </div>
  )
}

