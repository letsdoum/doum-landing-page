'use client'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaHome } from "react-icons/fa";
import '@/app/globals.css'
function Navbar2() {
    const pathname = usePathname();
    
                        const handleClick = () => {
                          if (pathname === "/") {
                            window.location.reload(); // Refresh if already on "/"
                          } else {
                            window.location.href = "/"; // Navigate to "/"
                          }
                        };
                        const handleNavigation = (sectionId) => {
                           
                            // Redirect to / and append the hash for scrolling
                            window.location.href = `/#${sectionId}`;
                          
                        };
  return (
    <div className='h-[10vh] md:h-[15vh] w-screen  flex items-center justify-between fixed ml-[-18vw] md:ml-[-21vw] mega-shadow top-0'>
        <div  className='h-full w-1/6' style={{ backgroundImage: 'url(/DOUM-logo-removebg-preview.webp)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', mixBlendMode: 'multiply', cursor: "pointer" }}   onClick={handleClick}></div>
        <div className='h-full w-[14.2%]   flex-row items-center justify-evenly mr-[10vw] md:mr-[2vw] text-[#18375d] text-md md:text-lg font-glacial whitespace-nowrap md:whitespace-normal hidden md:flex cursor-pointer'onClick={handleClick}><FaHome size={30} /> Return Home</div>   
        <div className='h-full w-[14.2%] text-[#18375d] text-md md:text-lg   md:hidden flex items-center cursor-pointer'onClick={handleClick}><FaHome size={30} /></div>

    </div>
  )
}

export default Navbar2