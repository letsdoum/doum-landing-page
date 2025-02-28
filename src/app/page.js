'use client'
import React from 'react'
import Hero from './components/Hero'
import ClientWrapper from './components/ClientWrapper'
import Navbar from './components/Navbar'

function page() {
  return (
    <div className='w-screen'>

      <div className='w-1/2 ml-[3%] md:ml-[25%]'><Navbar/> </div>
     
    <Hero/>
    </div>
   
  )
}

export default page