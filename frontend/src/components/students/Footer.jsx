import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.logo_dark} alt='logo'/>
          <p className='text-white/80 mt-6 text-center md:text-left text-sm'>Our 2025 Global Learning & Skills Trends Report is out now! Find out how to build the skills to keep pace with change.</p>
        </div>
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Contact us</a></li>
            <li><a href='#'>Privacy policy</a></li>
            <li><a href='#'>Help and Support</a></li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-start w-full'>
         <h2 className='font-semibold text-white mb-5'>Subscribe</h2>
         <p className='text-white/80 text-sm'>The latest new,articles and resources,sent to your email inbox weekly</p>
         <div className='flex items-center gap-2 pt-4'>
          <input className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-nonew-64 h-9 rounded px-2 text-sm' 
            type='email' 
            placeholder='Enter your email'
          />
          <button className='bg-white text-red-500 w-24 h-9 rounded'>Subscribe</button>
         </div>
        </div>

      </div>
      <p className='py-4 text-center text-xs md:text-sm text-red-500'>CopyRight 2025 © Abhishek. All Rights Reserved</p>
    </footer>
  )
}

export default Footer
