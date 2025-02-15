'use client'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { RiMenu3Fill } from "react-icons/ri";


function Navbar() {
    const barRef = useRef()
    const divRef = useRef()
    const linksRef = useRef([])
    const mobRef = useRef([])
    const mobBarRef = useRef()
    const mobNavRef =useRef([])
    const panelRef = useRef()
    const tl2 = gsap.timeline({paused:true})
    let flag = false
    

    useEffect(() => {
        const tl = gsap.timeline()
       

        tl.from(barRef.current, {
            y: -1000,
            duration: 1,
            delay: 0.5,
            opacity: 0
        })
        tl.from(divRef.current, {
            y: -70,
            opacity: 0,
            duration: 0.4,
            
            
        })
        tl.from(linksRef.current, {
            y: 400,
            opacity: 0,
            duration: 0.2,
            
            stagger: 0.2
        })
    }, [])

    useEffect(()=>{
        
        tl2.to(panelRef.current,{
            right:10,
            duration:1,
            
            opacity: 1
        })
        tl2.to(mobRef.current,{
            opacity: 1,
            duration:0.3,
           
            X:60,
            stagger:0.2
        })

    })
    useEffect(()=>{
         const tl3= gsap.timeline()

         tl3.from(mobBarRef.current,{
                y:-1000,
                opacity:0,
                duration:0.7,
                
         })
         tl3.from(mobNavRef.current,{
                y:-700,
                opacity:0,
                duration:0.4,
                
                stagger:0.2

         }
            
         )
    })

    
     
       
       

        

    return (
        <>
        <div ref={barRef} className='hidden md:flex h-[15vh] w-[50vw] rounded-full bg-[#bbd7f47a] justify-center items-center drop-shadow-2xl fixed top-12 left-1/20 z-20 object-contain gap-6 backdrop-blur-xl min-w-[320px] overflow-hidden'>
            <Link href='#services' className='text-sm h-1/4 w-1/8 text-[#18375d] font-bold my-6 font-glacial navitem ' ref={el => linksRef.current[0] = el}>Services</Link>
            <Link href='#howItWorks' className='text-sm h-1/4 w-1/8 text-[#18375d] font-bold my-6 font-glacial navitem' ref={el => linksRef.current[1] = el}>How it works</Link>
            <a  href='/Blog'className='text-sm h-1/4 w-1/8 text-[#18375d] font-bold my-6 font-glacial navitem' ref={el => linksRef.current[2] = el}>Blogs</a>
            <div ref={divRef} className='h-full w-1/6' style={{ backgroundImage: 'url(/DOUM-logo-removebg-preview.webp)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', mixBlendMode: 'multiply' }}></div>
            <Link href='#whyUs' className='text-sm h-1/4 w-1/8 text-[#18375d] font-bold my-6 font-glacial navitem' ref={el => linksRef.current[3] = el}>Why us</Link>
            <Link href='#faq' className='text-sm h-1/4 w-1/8 text-[#18375d] font-bold my-6 font-glacial navitem' ref={el => linksRef.current[4] = el}>FAQs</Link>
            <Link href='#waitlist' className='text-sm h-1/4 w-1/8 text-[#18375d] font-bold my-6 font-glacial navitem' ref={el => linksRef.current[5] = el}>Join Waitlist</Link>
        </div>
       
        <div ref={mobBarRef} className='flex md:hidden h-[10vh] w-[95%] fixed rounded-full bg-[#bbd7f47a] backdrop-blur-xl flex justify-between items-center top-4 fixed z-[200]'>
            <div ref={el => mobNavRef.current[0] = el} className=' w-2/5 h-[60%] ' style={{backgroundImage:'url(/DOUM-logo-removebg-preview.webp)', backgroundSize:"contain", backgroundRepeat:"no-repeat",backgroundPosition:"center"}}></div>
            <div ref={el => mobNavRef.current[1] = el} className='relative right-12 text-2xl font-extrabold font-[#18375d]'><button onClick={()=>{
                if(flag === false){
                    tl2.play()
                    flag = true
                }
                else{
                    tl2.reverse()
                    flag = false
                }
                
            }}><RiMenu3Fill color='#18375d' /></button></div>
        </div>
        <div ref={panelRef} className='flex flex-col h-[85vh] w-[90vw] justify-evenly bg-[#bbd7f47a] rounded-3xl backdrop-blur-xl fixed right-[-100vw] mr-[3vw] top-[13vh] z-[200] opacity-0 text-[#18375d]'>
            <Link href='/' className='mx-16 text-2xl font-bold h-1/12 font-glacial opacity-0'ref={el => mobRef.current[0] = el}>Services</Link>
            <Link href='/' className='mx-16 text-2xl font-bold h-1/12 font-glacial opacity-0'ref={el => mobRef.current[1] = el}>How it Works</Link>
            <a href='/Blog' className='mx-16 text-2xl font-bold h-1/12 font-glacial opacity-0'ref={el => mobRef.current[2] = el}>Blog</a>
            <Link href='/' className='mx-16 text-2xl font-bold h-1/12 font-glacial opacity-0'ref={el => mobRef.current[3] = el}>Why Us</Link>
            <Link href='/' className='mx-16 text-2xl font-bold h-1/12 font-glacial opacity-0'ref={el => mobRef.current[4] = el}>FAQs</Link>
            <Link href='/' className='mx-16 text-2xl font-bold h-1/12 font-glacial opacity-0'ref={el => mobRef.current[5] = el}>Join Waitlist</Link>
        </div>
        </>
    )
}

export default Navbar