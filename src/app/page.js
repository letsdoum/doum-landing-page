'use client'
import React, { useEffect, useRef, useState } from 'react'
import Hero from './components/Hero'
import ClientWrapper from './components/ClientWrapper'
import Navbar from './components/Navbar'

function page() {
  const prevHeight = useRef(window.innerHeight);
  useEffect(() => {
    // Force scroll to top on any kind of refresh or route change
    window.scrollTo(0, 0);

    const handleResize = () => {
      const currentHeight = window.innerHeight;
      if (currentHeight !== prevHeight.current) {
        // Option 1: Soft refresh (faster, preserves state)
        window.location.reload();
        
        // Option 2: Hard refresh (slower, clears cache)
        // window.location.href = window.location.href;
        
        prevHeight.current = currentHeight;
      }
    };

    // Add event listener for beforeunload to ensure scroll reset
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    // Add event listener for popstate (browser back/forward)
    const handlePopState = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    // Cleanup listeners
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  return (
    <div className='w-screen'>

      <div className='w-1/2 ml-[3%] md:ml-[25%]'><Navbar/> </div>
     
    <Hero/>
    </div>
   
  )
}

export default page