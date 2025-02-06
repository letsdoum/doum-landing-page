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
            delay:0.2,
            opacity: 1
        })
        tl2.to(mobRef.current,{
            opacity: 1,
            duration:0.7,
            delay:0.2,
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
                delay:0.2
         })
         tl3.from(mobNavRef.current,{
                y:-700,
                opacity:0,
                duration:0.4,
                delay:0.1,
                stagger:0.2

         }
            
         )
    })

    
     
       
       

        

    return (
        <>
        <div ref={barRef} className='hidden md:flex h-[15vh] w-[50vw] rounded-full bg-[#bbd7f47a] justify-center items-center drop-shadow-2xl fixed top-12 left-1/20 z-20 object-contain gap-6 backdrop-blur-xl min-w-[320px] overflow-hidden'>
            <Link href='/' className='text-sm h-1/4 w-1/8 text-[#18375d] font-bold my-6 font-glacial navitem ' ref={el => linksRef.current[0] = el}>Services</Link>
            <Link href='/' className='text-sm h-1/4 w-1/8 text-[#18375d] font-bold my-6 font-glacial navitem' ref={el => linksRef.current[1] = el}>How it works</Link>
            <div ref={divRef} className='h-full w-1/6' style={{ backgroundImage: 'url(/DOUM-logo-removebg-preview.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', mixBlendMode: 'multiply' }}></div>
            <Link href='/' className='text-sm h-1/4 w-1/8 text-[#18375d] font-bold my-6 font-glacial navitem' ref={el => linksRef.current[2] = el}>Why us</Link>
            <Link href='/' className='text-sm h-1/4 w-1/8 text-[#18375d] font-bold my-6 font-glacial navitem' ref={el => linksRef.current[3] = el}>FAQs</Link>
            <Link href='/' className='text-sm h-1/4 w-1/8 text-[#18375d] font-bold my-6 font-glacial navitem' ref={el => linksRef.current[4] = el}>Join Waitlist</Link>
        </div>
        {/* <div className='flex md:hidden h-[10vh] w-full bg-[#bbd7f47a] justify-between items-center fixed top-0'>
            <div className='w-[40%] h-full filxed left-2' style={{ backgroundImage: 'url(/DOUM-logo-removebg-preview.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', mixBlendMode: 'multiply' }} ></div>
            <button className='bg-transparent border w-[60%] h-full fixed right-2' onClick={()=>{tl2.play()}}> <div className='fixed right-8 top-10 text-2xl font-extrabold text-[#18375d]'>
            <RiMenu3Fill />
            </div></button>

        </div>
        <div ref={panelRef} className='flex md:hidden h-[80vh] w-[80vw] bg-white flex-col gap-4 px-8'>
           <button onClick={()=>{
                     tl2.reverse()
           }
           }> <div className='h-8 w-8 flex justify-center items-center text-center bg-slate-300 text-[#18375d] rounded-full text-sm font-bold absolute right-12'>
                X
            </div></button>
           
            <Link href='/' className='mt-32 text-lg px-8 h-1/12 w-1/8 text-[#18375d] font-bold my-6 font-glacial navitem ' ref={el => mobRef.current[0] = el}>Services</Link>
            <Link href='/' className='text-lg px-8 h-1/12 w-1/8 text-[#18375d] font-bold my-6 font-glacial navitem' ref={el => mobRef.current[1] = el}>How it works</Link>
            <Link href='/' className='text-lg px-8 h-1/12 w-1/8 text-[#18375d] font-bold my-6 font-glacial navitem' ref={el => mobRef.current[2] = el}>Why us</Link>
            <Link href='/' className='text-lg px-8 h-1/12 w-1/8 text-[#18375d] font-bold my-6 font-glacial navitem' ref={el => mobRef.current[3] = el}>FAQs</Link>
            <Link href='/' className='text-lg px-8 h-1/12 w-1/8 text-[#18375d] font-bold my-6 font-glacial navitem' ref={el => mobRef.current[4] = el}>join waitlist</Link>
        </div> */}
        <div ref={mobBarRef} className='flex md:hidden h-[10vh] w-[95%] fixed rounded-full bg-[#bbd7f47a] backdrop-blur-xl flex justify-between items-center top-4 fixed z-[200]'>
            <div ref={el => mobNavRef.current[0] = el} className=' w-2/5 h-[60%] ' style={{backgroundImage:'url(/DOUM-logo-removebg-preview.png)', backgroundSize:"contain", backgroundRepeat:"no-repeat",backgroundPosition:"center"}}></div>
            <div ref={el => mobNavRef.current[1] = el} className='relative right-12 text-2xl font-extrabold font-[#18375d]'><button onClick={()=>{
                if(flag === false){
                    tl2.play()
                    flag = true
                }
                else{
                    tl2.reverse()
                    flag = false
                }
                
            }}><RiMenu3Fill /></button></div>
        </div>
        <div ref={panelRef} className='flex flex-col h-[90vh] w-[90vw] justify-evenly bg-[#bbd7f47a] rounded-lg backdrop-blur-xl fixed right-[-100vw] top-[10vh] z-[200] opacity-0'>
            <Link href='/' className='mx-16 text-lg font-bold h-1/12 font-glacial opacity-0'ref={el => mobRef.current[0] = el}>Services</Link>
            <Link href='/' className='mx-16 text-lg font-bold h-1/12 font-glacial opacity-0'ref={el => mobRef.current[1] = el}>How it works</Link>
            <Link href='/' className='mx-16 text-lg font-bold h-1/12 font-glacial opacity-0'ref={el => mobRef.current[2] = el}>why us</Link>
            <Link href='/' className='mx-16 text-lg font-bold h-1/12 font-glacial opacity-0'ref={el => mobRef.current[3] = el}>FAQs</Link>
            <Link href='/' className='mx-16 text-lg font-bold h-1/12 font-glacial opacity-0'ref={el => mobRef.current[4] = el}>Join waitlist</Link>
        </div>
        </>
    )
}

export default Navbar