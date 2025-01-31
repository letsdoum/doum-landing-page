'use client'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { FaArrowCircleRight } from "react-icons/fa";
import Link from 'next/link'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mesh, TextureLoader } from 'three';
gsap.registerPlugin(ScrollTrigger)
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Model() {

   useEffect(()=>{
    const tlM= gsap.timeline({
      scrollTrigger:{
        trigger: modelRef.current,
        scroller:'body',
        scrub:1,
        markers:true,
        start: 'top 80%',
        end: 'bottom 200%'
      }
    })

    tlM.fromTo(modelRef.current.rotation, {  x:-Math.PI/6,y:Math.PI}, {x:Math.PI,y:0,z:Math.PI, duration: 10 , ease:'linear'},'abc')
      tlM.fromTo(modelRef.current.scale, { x: 3.5, y: 3.5, z: 3.5 }, { x: 1, y: 1, z: 1, duration: 10 }, 0,'abc') // Animate scale
      tlM.fromTo(modelRef.current.position, { x: 0.2, y: -7, z: 2 }, { x: 0, y: 0, z: 0, duration: 10 }, 0) // Animate position
   })
  const result = useLoader(GLTFLoader,'/IP 4.glb')
  const modelRef = useRef()
  return(
  <mesh ref={modelRef} className='fixed '>
    <primitive object={result.scene}/>
  </mesh>
  ) 


}


function Hero() {
  const heroRef = useRef()
  const paraRef = useRef()
  const getRef = useRef([])
  const starRef = useRef([])
  const h4Ref = useRef([])

  
  

  const tl = gsap.timeline()
  useEffect(() => {
    tl.from(heroRef.current, {
      opacity: 0,
      y: 1000,
      duration: 1,
      delay: 0.2,
    })
    tl.from(starRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "elastic.out(1,0.3)",
      stagger: 0.2
    }, 'hello')
    tl.from(paraRef.current, {
      opacity: 0,
      y: 600,
      duration: 0.4,
    }, 'hello')
    tl.from(getRef.current[0], {
      opacity: 0,
      y: 400,
      duration: 0.4,
      delay: 0.1
    }, 'hi')
    tl.from(getRef.current[1], {
      opacity: 0,
      y: 400,
      duration: 0.4,
      delay: 0.1
    }, 'hi')
    tl.from(h4Ref.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.05,
    }, 'wave')
  }, [])
  const [style, setStyle] = useState({});

  useEffect(() => {
    const updateStyle = () => {
        const width = window.innerWidth;
        if (width >= 768) { // Desktop breakpoint
            setStyle({
                
                backgroundImage: "url('/deskotp-platform.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                mixBlendMode: 'multiply'
                
                
                
            });
        } else { // Mobile breakpoint
            setStyle({
                
                backgroundImage: "url('/mobile-platform.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundSize: 'contain',
                mixBlendMode: 'multiply'
                
            });
        }
    };

    updateStyle(); // Initial call to set styles
    window.addEventListener('resize', updateStyle);

    return () => window.removeEventListener('resize', updateStyle);
  }, []);
  
  const scrollRef = useRef([])
  const conRef = useRef()
  
  
  // useEffect(() => {
  //   const scrollingContent = scrollRef.current
  //   const contentWidth = scrollingContent.scrollWidth
  //   const wrapperWidth = scrollingContent.parentElement.clientWidth

  // //   gsap.to(scrollingContent, {
  // //     x: -contentWidth,
  // //     duration: 20,
  // //     ease: 'steps(9)', // Steps easing with 9 steps
  // //     repeat: -1,
  // //     modifiers: {
  // //       x: gsap.utils.unitize(x => parseFloat(x) % contentWidth)
  // //     }
  // //   })
  // // }, [])
  useEffect(() => {
    const scrollele = conRef.current
    const xval = scrollele.scrollWidth

    gsap.fromTo(scrollele, 
      { x: window.innerWidth }, // Start from outside the screen
      {
        x: -xval,
        duration: 20,
        ease: 'linear',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % xval)
        }
      }
    )
  }, [])


   const s1Ref = useRef()
   const s2Ref = useRef()
   const s3Ref = useRef()
   const s4Ref = useRef()
   const s5Ref = useRef()
  
   useEffect(() => {
    gsap.from(s1Ref.current, {
      y: 100,
      duration: 0.7,
      
      opacity: 0,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: s1Ref.current,
        scroller: 'body',
        
        scrub: 4,
        start: 'top 35%',
        end: 'bottom 90%'
      }
    })
    gsap.from(s2Ref.current, {
      y: 100,
      duration: 0.7,
      
      opacity: 0,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: s2Ref.current,
        scroller: 'body',
        
        scrub: 4,
        start: 'top 35%',
        end: 'bottom 90%'
      }
    })
    gsap.from(s3Ref.current, {
      y: 100,
      duration: 0.7,
      
      opacity: 0,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: s3Ref.current,
        scroller: 'body',
        
        scrub: 4,
        start: 'top 35%',
        end: 'bottom 90%'
      }
    })
    gsap.from(s4Ref.current, {
      y: 100,
      duration: 0.7,
      
      opacity: 0,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: s4Ref.current,
        scroller: 'body',
        
        scrub: 4,
        start: 'top 35%',
        end: 'bottom 90%'
      }
    })
    gsap.from(s5Ref.current, {
      y: 100,
      duration: 0.7,
      
      opacity: 0,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: s5Ref.current,
        scroller: 'body',
        
        scrub: 4,
        start: 'top 35%',
        end: 'bottom 90%'
      }
    })


   
  }, [])


  return (
    <>

    {/*3d model*/}

    <div className='fixed top-0 left-0 w-full h-full z-50'>
           <Canvas className='size-full '  gl={{ alpha: true }}>

           <ambientLight intensity={1} />
           <directionalLight position={[10, 10, 5]} intensity={1} />
                <Model/>
             
           </Canvas>
           </div>       
          
     {/* hero */}
    <div className=' md:h-[300vh] w-full bg-[#e1eefd] relative flex flex-col items-center justify-start gap-4' ref={heroRef}>
      <div className='h-12 w-12 absolute top-[75vh] left-[15vw] invisible md:visible' style={{ backgroundImage: "url(/star.png)", backgroundSize: 'contain', mixBlendMode:"multiply" }} ref={el => starRef.current[0] = el}></div>
      
      <div className='h-12 w-12  absolute top-[20vh] left-[80vw]' style={{ backgroundImage: "url(/star.png)", backgroundSize: 'contain', backgroundRepeat: "no-repeat", backgroundPosition: 'center', mixBlendMode:"multiply" }} ref={el => starRef.current[1] = el}></div>
      <div className='mt-[0vh] md:mt-[20vh] h-[40vh] md:h-[10%] w-[50vw] min-w-[320px]' style={{ backgroundImage: 'url(/Hero-text.png)', backgroundSize: 'contain', backgroundRepeat: "no-repeat", backgroundPosition: 'center', mixBlendMode: 'multiply' }}></div>
      <div className='mt-[-7vh] md:mt[0vh]  h-16 w-400 overflow-hidden'><h4 className='text-xl md:text-2xl lg:text-3xl text-[#18375d] font-semibold font-glacial'>
        {"All Your Home Services, One Tap Away!".split(" ").map((letter, index) => (
          <span key={index} ref={el => h4Ref.current[index] = el} className='inline-block mr-1'>{letter}</span>
        ))}
      </h4></div>
      <div className='w-[50vw] h-[25vh] flex flex-col md:flex-row justify-between items-center'>
        <div className='w-full md:w-[45%] h-[45%] md:h-full rounded-3xl' style={{ backgroundImage: 'url(/playstore.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', mixBlendMode: 'multiply' }} ref={el => getRef.current[0] = el}></div>
        <div className='w-full md:w-[45%] h-[45%] md:h-full rounded-3xl' style={{ backgroundImage: 'url(/applestore.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', mixBlendMode: 'multiply' }} ref={el => getRef.current[1] = el}></div>
      </div>
    </div>
    {/* platform */}
    <div className='w-full h-[150rem] md:h-[112.5rem] relative z-10 mt-[0vh] md:mt-[-220vh] flex flex-col justify-center items-center 'style={style} >
        <div className='w-[70%] md:w-[40%] h-[10%] mt-[-80rem] md:mt-[0rem] ' style={{ backgroundImage: "url(/platform-text-removebg-preview_upscayl_4x_realesrgan-x4plus.png)", backgroundSize: 'contain', backgroundRepeat: "no-repeat", backgroundPosition: 'center' }}  >
             {/*scroller*/}
             <div className='scrollContainer w-[550vw] md:w-[250vw] h-[35vh] md:h-[70vh] relative ml-[-15vw] md:ml-[-30vw] mt-[25vh] md:mt-[40vh] flex items-center justify-center gap-12' ref={conRef} >
                    <div className='scrollingContent h-[90%] w-[25%] bg-red-500 rounded-2xl'ref={el => scrollRef.current[0] = el}></div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-red-500 rounded-2xl'ref={el => scrollRef.current[1] = el}></div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-red-500 rounded-2xl'ref={el => scrollRef.current[2] = el}></div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-red-500 rounded-2xl'ref={el => scrollRef.current[3] = el}></div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-red-500 rounded-2xl'ref={el => scrollRef.current[4] = el}></div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-red-500 rounded-2xl'ref={el => scrollRef.current[5] = el}></div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-red-500 rounded-2xl'ref={el => scrollRef.current[6] = el}></div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-red-500 rounded-2xl'ref={el => scrollRef.current[7] = el}></div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-red-500 rounded-2xl'ref={el => scrollRef.current[8] = el}></div>
             </div>
          </div>
    </div>
        

   

    {/* services */}
    <div className='h-[600vh] w-full bg-[#e1eefd] relative flex flex-col items-center justify-start gap-4'>
      {/* service1*/}
        <div ref={s1Ref} className='service1 h-[100vh] w-full flex mt-[-170vh] md:mt-[0vh] items-center justify-between'>
            <div className='left flex flex-col items-start justify-center h-full w-[50%] ml-[-5vw] md:ml-[0] mt-0 md:mt-[-20vh]'>
                <h1 className=' font-light h-[10vh] md:h-[20vh] w-[40vw] md:w-[35vw] ml-12 text-2xl md:text-4xl text-[#18375d] absolute'>Finding Skilled Experts Just Got Easier!</h1>
            <div className='flex flex-row w-[15rem] md:w-80 h-16 text-xl md:text-3xl font-light items-center ml-[-3vw] md:ml-[-1vw] whitespace-nowrap justify-start absolute mt-[20vh] md:mt-[20vh]'><Link href='/' className='flex mx-16 items-center gap-4 text-[#18375d] p-0'>Join Waitlist <FaArrowCircleRight color='#18375d' /> </Link></div> 
            <div className='imageContainer h-[27vh] w-[48vw] mt-[7vh] md:mt-[65vh] ml-[55vw] md:ml-0 rounded-xl' style={{ backgroundImage: 'url(/services1.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <p className='text-[#18375d] font-glacial ml-[55vw] md:ml-[13vw] mt-[-15vw] md:mt-0 whitespace-nowrap'>Anytime, Anywhere...</p>
            </div>
            <div className='right  h-[20vh] md:h-[35vh] x-[60vw] md:w-[20vw] font-glacial text-lg md:text-xl text-[#18375d] mr-0 md:mr-[5vw] mt-[20vh] md:mt-[40vh] text-right invisible md:visible'>
                       <p>
                       With DOUM, access certified and verified professionals instantly. Say goodbye to long searches and unreliable services—get the right expert for your needs in no time, right at your doorstep
                       </p>
            </div>
            </div>
      {/*service2*/}
      <div ref={s2Ref} className='service2 h-[100vh] w-full flex mt-[30vh] md:mt-[0vh] items-center justify-between'>
              <div className='left h-[20vh] md:h-[35vh] x-[60vw] md:w-[20vw] font-glacial text-lg md:text-xl text-[#18375d] ml-0 md:ml-[5vw] mt-[20vh] md:mt-[40vh] text-left invisible md:visible'>
              <p>
              Our user-friendly app ensures hassle-free bookings. Choose your desired service, customize your requirements, and confirm your slot—all with just a few clicks. Convenience and efficiency made seamless for you
             </p>
              </div>
              <div className='right h-[100%] w-[50%]'>
                <div className='headinCon w-full h-[25%] flex flex-col text-right items-end justify-around mt-[7vh] md:mt-[30vh] pr-2 '>
                  <h1 className=' font-light h-[5vh] md:h-[20vh] w-[40vw] md:w-[35vw] mr-0 md:mr-12 text-2xl md:text-4xl text-[#18375d] '>Book Services in Just a Few Taps!</h1>
                <div className='flex flex-row w-[15rem] md:w-80 h-16 text-xl md:text-3xl font-light items-center mr-[-10vw] md:mr-[-2vw] whitespace-nowrap justify-start  mt-[-10vh] md:mt-[10vh]'><Link href='/' className='flex mx-16 items-center gap-4 text-[#18375d] p-0'>Join Waitlist <FaArrowCircleRight color='#18375d' /> </Link></div> 
              </div>
              

            <div className='imageContainer h-[27vh] w-[48vw] md:w-[30vw] mt-[-20vh] md:mt-[15vh] ml-[-50vw] md:ml-[15vw] rounded-xl  md:relative' style={{ backgroundImage: 'url(/services2.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <p className='text-[#18375d] font-glacial ml-[-50vw] md:ml-[19vw] mt-[-15vw] md:mt-0 whitespace-nowrap  md:relative '>A Few Steps...</p>
              </div>
      </div>
      {/* service 3 */}
      <div ref={s3Ref} className='service1 h-[100vh] w-full flex mt-[-40vh] md:mt-[0vh] items-center justify-between'>
            <div className='left flex flex-col items-start justify-center h-full w-[50%] ml-[-5vw] md:ml-[0] mt-0 md:mt-[-20vh]'>
                <h1 className=' font-light h-[10vh] md:h-[20vh] w-[40vw] md:w-[35vw] ml-12 text-2xl md:text-4xl text-[#18375d] absolute'>Track Real-Time Updates for Every Booking!</h1>
            <div className='flex flex-row w-[15rem] md:w-80 h-16 text-xl md:text-3xl font-light items-center ml-[-3vw] md:ml-[-1vw] whitespace-nowrap justify-start absolute mt-[20vh] md:mt-[20vh]'><Link href='/' className='flex mx-16 items-center gap-4 text-[#18375d] p-0'>Join Waitlist <FaArrowCircleRight color='#18375d' /> </Link></div> 
            <div className='imageContainer h-[27vh] w-[48vw] mt-[7vh] md:mt-[65vh] ml-[55vw] md:ml-0 rounded-xl' style={{ backgroundImage: 'url(/services3.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <p className='text-[#18375d] font-glacial ml-[55vw] md:ml-[13vw] mt-[-15vw] md:mt-0 whitespace-nowrap'>Real-Time Tracking</p>
            </div>
            <div className='right  h-[20vh] md:h-[35vh] x-[60vw] md:w-[20vw] font-glacial text-lg md:text-xl text-[#18375d] mr-0 md:mr-[5vw] mt-[20vh] md:mt-[40vh] text-right invisible md:visible'>
                       <p>
                       Stay informed every step of the way. Track your service provider's location, estimated arrival time, and job progress in real time, ensuring transparency and peace of mind throughout the process.
                       </p>
            </div>
            </div>
      {/*service4*/}
      <div ref={s4Ref} className='service2 h-[100vh] w-full flex mt-[60vh] md:mt-[0vh] items-center justify-between'>
              <div className='left h-[20vh] md:h-[35vh] x-[60vw] md:w-[20vw] font-glacial text-lg md:text-xl text-[#18375d] ml-0 md:ml-[5vw] mt-[20vh] md:mt-[40vh] text-left invisible md:visible'>
              <p>
              No hidden costs or surprises!DOUM provides clear, upfront pricing for every service.Choose your preferred payment method—cashless or cash—and enjoy a smooth, worry-free transaction experience every time.
             </p>
              </div>
              <div className='right h-[100%] w-[50%]'>
                <div className='headinCon w-full h-[40vh] md:h-[25%] flex flex-col text-right items-end justify-around mt-[7vh] md:mt-[30vh] pr-2 '>
                  <h1 className=' font-light h-[5vh] md:h-[20vh] w-[40vw] md:w-[35vw] mr-0 md:mr-12 text-2xl md:text-4xl text-[#18375d] '>Transparent Pricing and Hassle-Free Payments!</h1>
                <div className='flex flex-row w-[15rem] md:w-80 h-16 text-xl md:text-3xl font-light items-center mr-[-10vw] md:mr-[-2vw] whitespace-nowrap justify-start  mt-[-10vh] md:mt-[10vh]'><Link href='/' className='flex mx-16 items-center gap-4 text-[#18375d] p-0'>Join Waitlist <FaArrowCircleRight color='#18375d' /> </Link></div> 
              </div>
              

            <div className='imageContainer h-[27vh] w-[48vw] md:w-[30vw] mt-[-32vh] md:mt-[15vh] ml-[-50vw] md:ml-[15vw] rounded-xl  md:relative' style={{ backgroundImage: 'url(/services4.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <p className='text-[#18375d] font-glacial ml-[-50vw] md:ml-[19vw] mt-[-15vw] md:mt-0 whitespace-nowrap  md:relative '>Transparent Pricing</p>
              </div>
      </div>
      {/*services 5*/}
      <div ref={s5Ref} className='service1 h-[100vh] w-full flex mt-[-40vh] md:mt-[0vh] items-center justify-between'>
            <div className='left flex flex-col items-start justify-center h-full w-[50%] ml-[-5vw] md:ml-[0] mt-0 md:mt-[-20vh]'>
                <h1 className=' font-light h-[10vh] md:h-[20vh] w-[40vw] md:w-[35vw] ml-12 text-2xl md:text-4xl text-[#18375d] absolute'>Expert Services, Anytime, Anywhere!</h1>
            <div className='flex flex-row w-[15rem] md:w-80 h-16 text-xl md:text-3xl font-light items-center ml-[-3vw] md:ml-[-1vw] whitespace-nowrap justify-start absolute mt-[20vh] md:mt-[20vh]'><Link href='/' className='flex mx-16 items-center gap-4 text-[#18375d] p-0'>Join Waitlist <FaArrowCircleRight color='#18375d' /> </Link></div> 
            <div className='imageContainer h-[27vh] w-[48vw] mt-[7vh] md:mt-[65vh] ml-[55vw] md:ml-0 rounded-xl' style={{ backgroundImage: 'url(/services5.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <p className='text-[#18375d] font-glacial ml-[55vw] md:ml-[13vw] mt-[-15vw] md:mt-0 whitespace-nowrap'>Get Top-notch services instantly...</p>
            </div>
            <div className='right  h-[20vh] md:h-[35vh] x-[60vw] md:w-[20vw] font-glacial text-lg md:text-xl text-[#18375d] mr-0 md:mr-[5vw] mt-[20vh] md:mt-[40vh] text-right invisible md:visible'>
                       <p>
                       Our skilled professionals are always ready to help, whether it’s fixing appliances or deep cleaning your home. From big cities to small towns, DOUM ensures expert services are accessible everywhere,anytime.
                       </p>
            </div>
            </div>
     

    </div>

    </>
  )
}

export default Hero