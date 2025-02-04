'use client'
import '@/app/globals.css'
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
import { FaTools } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { MdLocalOffer } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { Form } from 'react-hook-form';
import { BsWhatsapp } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineLinkedin } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { supabase } from '../../lib/supabaseClient';

// function Model() {

//    useEffect(()=>{
//     const tlM= gsap.timeline({
//       scrollTrigger:{
//         trigger: modelRef.current,
//         scroller:'body',
//         scrub:1,
//         markers:true,
//         start: 'top 80%',
//         end: 'bottom 200%'
//       }
//     })

//     tlM.fromTo(modelRef.current.rotation, {  x:-Math.PI/6,y:Math.PI}, {x:Math.PI,y:0,z:Math.PI, duration: 10 , ease:'linear'},'abc')
//       tlM.fromTo(modelRef.current.scale, { x: 3.5, y: 3.5, z: 3.5 }, { x: 1, y: 1, z: 1, duration: 10 }, 0,'abc') // Animate scale
//       tlM.fromTo(modelRef.current.position, { x: 0.2, y: -7, z: 2 }, { x: 0, y: 0, z: 0, duration: 10 }, 0) // Animate position
//    })
//   const result = useLoader(GLTFLoader,'/IP 4.glb')
//   const containerRef = useRef() // Add container ref
//   const modelRef = useRef()
//   return (
//     <div ref={containerRef} className="h-screen w-full">
//       <mesh ref={modelRef}>
//         <primitive object={result.scene}/>
//       </mesh>
//     </div>
//   )


// }


function Hero() {
  const heroRef = useRef()
  const paraRef = useRef()
  const getRef = useRef([])
  const starRef = useRef([])
  const h4Ref = useRef([])

  const s1HeadingRef = useRef(null)
  const s1LinkRef = useRef(null)
  const s1ImageRef = useRef(null)
  const s1TextRef = useRef(null)
  const s1ParagraphRef = useRef(null)

  const s2HeadingRef = useRef(null)
  const s2LinkRef = useRef(null)
  const s2ImageRef = useRef(null)
  const s2TextRef = useRef(null)
  const s2ParagraphRef = useRef(null)

  const s3HeadingRef = useRef(null)
  const s3LinkRef = useRef(null)
  const s3ImageRef = useRef(null)
  const s3TextRef = useRef(null)
  const s3ParagraphRef = useRef(null)

  const s4HeadingRef = useRef(null)
  const s4LinkRef = useRef(null)
  const s4ImageRef = useRef(null)
  const s4TextRef = useRef(null)
  const s4ParagraphRef = useRef(null)

  const s5HeadingRef = useRef(null)
  const s5LinkRef = useRef(null)
  const s5ImageRef = useRef(null)
  const s5TextRef = useRef(null)
  const s5ParagraphRef = useRef(null)

  
  

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
  const [style2,setStyle2] = useState({})
  useEffect(() => {
    const updateStyle2 = () => {
        const width = window.innerWidth;
        if (width >= 768) { // Desktop breakpoint
            setStyle2({
                
                backgroundImage: "url('/footerbg.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                
                
                
                
            });
        } else { // Mobile breakpoint
            setStyle2({
                
                backgroundImage: "url('/footerbgmob.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                
                
            });
        }
    };

    updateStyle2(); // Initial call to set styles
    window.addEventListener('resize', updateStyle2);
    

    return () => window.removeEventListener('resize', updateStyle2);
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
        duration: 65,
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
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: s1Ref.current,
        start: "top 60%",
        end: "bottom 100%",
        scrub: 2,
        
      }
    })

    // Wave animation for each element
    tl.from(s1HeadingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    .from(s1LinkRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s1ParagraphRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s1ImageRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s1TextRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    const tl2 =gsap.timeline({
      scrollTrigger: {
        trigger: s2Ref.current,
        start: "top 60%",
        end: "bottom 100%",
        scrub: 2,
        
      }
    })
    tl2.from(s2HeadingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    .from(s2LinkRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s2ParagraphRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s2ImageRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s2TextRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    const tl3 =gsap.timeline({
      scrollTrigger: {
        trigger: s3Ref.current,
        start: "top 60%",
        end: "bottom 100%",
        scrub: 2,
       
      }
    })
    tl3.from(s3HeadingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    .from(s3LinkRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s3ParagraphRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s3ImageRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s3TextRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: s4Ref.current,
        start: "top 60%",
        end: "bottom 100%",
        scrub: 2,
        
      }
    })

    tl4.from(s4HeadingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    .from(s4LinkRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s4ParagraphRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s4ImageRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s4TextRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: s5Ref.current,
        start: "top 60%",
        end: "bottom 100%",
        scrub: 2,
        
      }
    })

    tl5.from(s5HeadingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    .from(s5LinkRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s5ParagraphRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s5ImageRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s5TextRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
  

    
    
  }, [])

  const circleRef = useRef()
  const whyUsRef = useRef()
  const WhyUsImgRef =useRef()

  useEffect(() => {
    gsap.fromTo(whyUsRef.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: whyUsRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
          
        }
      }
    )
    gsap.fromTo(WhyUsImgRef.current,{
      opacity:0
    },{
      opacity:1,
      duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: whyUsRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
          
        }
    })
    gsap.fromTo(circleRef.current,
      {
        scale:0
      },
      {
        scale:1,
        duration: 1,
        delay:1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
          
        }
      }
    )
  }, [])
  const step1ConRef = useRef()
  const step1Ref = useRef()
  const step1HeadingRef = useRef()
  const step1ParagraphRef = useRef()

  useEffect(() => {
    // Ensure DOM elements exist
    if (!step1ConRef.current) return;
  
    const tlstep1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".step1-container", // Use class instead of ref
        start: "top 80%",
        end: "bottom center",
        
        toggleActions: "play none none reverse"
      }
    });
  
    tlstep1.from(step1Ref.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    })
    .from(step1HeadingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3")
    .from(step1ParagraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3");
  
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  const step2ConRef = useRef()
  const step2Ref = useRef()
  const step2HeadingRef = useRef()
  const step2ParagraphRef = useRef()

  useEffect(() => {
    // Ensure DOM elements exist
    if (!step2ConRef.current) return;
  
    const tlstep2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".step2-container", // Use class instead of ref
        start: "top 80%",
        end: "bottom center",
        
        toggleActions: "play none none reverse"
      }
    });
  
    tlstep2.from(step2Ref.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    })
    .from(step2HeadingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3")
    .from(step2ParagraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3");
  
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const step3ConRef = useRef()
  const step3Ref = useRef()
  const step3HeadingRef = useRef()
  const step3ParagraphRef = useRef()

  useEffect(() => {
    // Ensure DOM elements exist
    if (!step3ConRef.current) return;
  
    const tlstep3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".step3-container", // Use class instead of ref
        start: "top 80%",
        end: "bottom center",
        
        toggleActions: "play none none reverse"
      }
    });
  
    tlstep3.from(step3Ref.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    })
    .from(step3HeadingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3")
    .from(step3ParagraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3");
  
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  const [isVisible, setIsVisible] = useState(true)
  const howItWorksHeadingRef = useRef(null)

  useEffect(() => {
    const heading = howItWorksHeadingRef.current
    
    gsap.to(heading, {
      scrollTrigger: {
        trigger: ".how-it-works-container",
        start: "top top",
        endTrigger: ".step3-container", // End at step 3
        end: "bottom center",
        pin: true,
        pinSpacing: false,
        onUpdate: (self) => {
          // Fade out heading when reaching end point
          if (self.progress > 0.99) {
            gsap.to(heading, {
              opacity: 0,
              y: -50,
              duration: 0.3
            })
          } else {
            gsap.to(heading, {
              opacity: 1,
              y: 0,
              duration: 0.3
            })
          }
        }
      }
    })
  
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  const whyDoumRef = useRef()
  const textRefs = useRef([] )
  const imageRefs = useRef([])
  const whyUsData = [
    {
      heading: "Verified Professionals",
      text: "Our experts are thoroughly screened to ensure reliability and skill.With DOUM, you get certified professionals delivering top-notch service every time.",
      image: "/why-us-1.png"
    },
    {
      heading: "Competitive Pricing",
      text: "Get access to high-quality services at prices that won’t break the bank. We provide transparent, affordable rates with no hidden charges, ensuring the best value for your money.",
      image: "/why-us-2.png"
    },
    {
      heading: "Real-Time Updates",
      text: "Stay informed throughout your service journey. From booking confirmation to tracking your professional’s arrival, our real-time updates ensure you’re always in the loop.",
      image: "/why-us-3.png"
    },
    {
      heading: "Seamless Booking",
      text: "Booking has never been easier! With just a few taps, you can schedule services, customize requirements, and confirm your slot. Enjoy a hassle-free and efficient booking experience with DOUM",
      image: "/why-us-4.png"
    }
  ]

  useEffect(() => {
    const container = whyDoumRef.current
    const texts = textRefs.current
    const images = imageRefs.current
    const options = {
      root: container,
      threshold: 0.5,
      rootMargin: "-25% 0px -25% 0px"
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = texts.indexOf(entry.target)
        if (entry.isIntersecting) {
          // Highlight active text
          gsap.to(entry.target, {
            scale: 1.2,
            opacity: 1,
            color: "#ffffff",
            duration: 0.3
          })
          // Show corresponding image
          gsap.to(images[index], {
            opacity: 1,
            duration: 0.3
          })
        } else {
          // Dim inactive text
          gsap.to(entry.target, {
            scale: 0.8,
            opacity: 0.5,
            color: "#ffffff80",
            duration: 0.3
          })
          // Hide corresponding image
          gsap.to(images[index], {
            opacity: 0,
            duration: 0.3
          })
        }
      })
    }, options)
    texts.forEach(text => {
      if (text) observer.observe(text)
    })
    
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: container,
    //     start: "top top",
    //     end: "+=300%",
    //     scrub: 1,
    //     onEnter: () => {
    //       document.body.style.overflow = 'hidden'
    //       container.style.overflow = 'auto'
    //     },
    //     onLeave: () => {
    //       document.body.style.overflow = 'auto'
    //       container.style.overflow = 'hidden'
    //     },
    //     onEnterBack: () => {
    //       document.body.style.overflow = 'hidden'
    //       container.style.overflow = 'auto'
    //     },
    //     onLeaveBack: () => {
    //       document.body.style.overflow = 'auto'
    //       container.style.overflow = 'hidden'
    //     }
    //   }
    // })

    texts.forEach((text, index) => {
      if (!text) return // Guard clause
      
      tl.fromTo(text,
        {
          scale: 0.8,
          opacity: 0.5,
          color: "#ffffff80"
        },
        {
          scale: 1.2,
          opacity: 1,
          color: "#ffffff",
          duration: 1,
          ease: "power2.inOut"
        }, index
      ).to(text, {
        scale: 0.8,
        opacity: 0.5,
        color: "#ffffff80",
        duration: 1
      })
    })

    return () => {
      observer.disconnect()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  useEffect(() => {
    gsap.from(".Q1Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      
      scrollTrigger: {
        trigger: ".Q1Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  
    gsap.from(".A1Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".A1Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  }, [])
  useEffect(() => {
    gsap.from(".Q2Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".Q2Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  
    gsap.from(".A2Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".A2Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  }, [])
  useEffect(() => {
    gsap.from(".Q3Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".Q3Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  
    gsap.from(".A3Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".A3Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  }, [])
  useEffect(() => {
    gsap.from(".Q4Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".Q4Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  
    gsap.from(".A4Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".A4Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  }, [])
  useEffect(() => {
    gsap.from(".Q5Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".Q5Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  
    gsap.from(".A5Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".A5Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  }, [])
  useEffect(() => {
    gsap.from(".Q6Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".Q6Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  
    gsap.from(".A6Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".A6Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  }, [])
  useEffect(() => {
    gsap.from(".Q7Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".Q7Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  
    gsap.from(".A7Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".A7Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  }, [])
  const featureRefs = useRef([])

// Add useEffect for animations
useEffect(() => {
  featureRefs.current.forEach((container) => {
    gsap.from(container, {
      scaleX: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:true
      }
    })
  })
}, [])
 const mobHoverRef = useRef([])
 useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.filter = 'grayscale(0%)';
        entry.target.querySelector('h2').style.opacity = '1';
      } else {
        entry.target.style.filter = 'grayscale(100%)';
        entry.target.querySelector('h2').style.opacity = '0';
      }
    });
  }, { threshold: 0.5 });

  mobHoverRef.current.forEach((el) => {
    if (el) observer.observe(el);
  });

  return () => {
    mobHoverRef.current.forEach((el) => {
      if (el) observer.unobserve(el);
    });
  };
}, []);

const {
  register,
  handleSubmit,
  watch,
  formState:{erros},
  reset
} = useForm();

// const onSubmit = async (data) => {
//   console.log("Form Data:", data);
//   try{
//     const { error } = await supabase.from('Waitlist').insert([{
//       firstname : data.firstName,
//       lastname : data.lastName,
//       email : data.Email,
//       phoneno : data.mobile,
//       message : data.Message
//     }]) 
//   }
//   catch(error) {
//     console.error(error);
//     toast.error("Error submitting form!", { position: "top-right" });
//   }
  
//   toast.success("Form submitted successfully!", { position: "top-right" });
//   reset(); // Clears the form after successful submission
// };
const onSubmit = async (formData) => {

  
  const { firstName, lastName, Email, mobile, Message } = formData;

  // Perform your API call or other operations with the form data
  console.log('Form data:', { firstName, lastName, Email, mobile ,Message });
  try{
    const {data , error} = await supabase.from('Waitlist').insert([{ FirstName: firstName,LastName: lastName, Email,phoneNo: mobile,Message: Message }])
    if(error) {
      toast.error("Error submitting form!", { position: "top-right" });
      console.error(error.message);
      return;
    }
    if(data){
      toast.success("Form submitted successfully!", { position: "top-right" });
      reset(); // Clears the form after successful submission
      console.log(data)
    }
  }
  catch(err){
    toast.error("Error submitting form!", { position: "top-right"});
    console.error(err.message);
  }
};

const onError = () => {
  toast.error("Please fix the errors and try again!", { position: "top-right" });
};



  return (
    <>

    {/*3d model*/}

    
          
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
             <div className='scrollContainer w-[1775vw] md:w-[805vw] h-[35vh] md:h-[70vh] relative ml-[-15vw] md:ml-[-30vw] mt-[25vh] md:mt-[40vh] flex items-center justify-center gap-12'  ref={conRef} >
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[0] = el} style={{ backgroundImage: 'url(/services/AC.jpg)',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }} >AC repairing</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[1] = el} style={{ backgroundImage: 'url("/services/bathroom fixture.jpg")',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }} >Bathroom Fixture</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[2] = el} style={{ backgroundImage: 'url("/services/carpet cleaning.jpg")',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Carpet Cleaning</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[3] = el} style={{ backgroundImage: 'url("/services/ceiling fan.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Ceiling fan Service</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[4] = el} style={{ backgroundImage: 'url(/services/chimney.jpg)',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Chimney service</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[5] = el} style={{ backgroundImage: 'url(/services/cook.jpg)',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Cook service</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[6] = el} style={{ backgroundImage: 'url(/services/electrician.jpg)',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Electricial service</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[7] = el} style={{ backgroundImage: 'url(/services/fridge.jpg)',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Fridge Servicing</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[8] = el} style={{ backgroundImage: 'url(/services/Handyman.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Handyman</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[9] = el} style={{ backgroundImage: 'url("/services/home cleaning service.jpg")',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }} >home cleaning service</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[10] = el} style={{ backgroundImage: 'url("/services/home theatre repair.jpg")',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}> home theatre service</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[11] = el} style={{ backgroundImage: 'url("/services/induction cooktop repair.jpg")',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }} >induction cooktop repair</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[12] = el} style={{ backgroundImage: 'url("/services/inverter and UPS repair.jpg")',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}> inverter& UPS repair</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[13] = el} style={{ backgroundImage: 'url("/services/laptop and computer repair service.jpg")',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>laptop&computer repair</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[14] = el} style={{ backgroundImage: 'url("/services/Microwave.jpg")',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Microwave servicing</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[15] = el} style={{ backgroundImage: 'url("/services/Movers and Good Carriers.jpg")',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Mover services</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[16] = el} style={{ backgroundImage: 'url("/services/pest control.jpg")',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Pest Control</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[17] = el} style={{ backgroundImage: 'url("/services/plumbing.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Plumber Services </div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[18] = el} style={{ backgroundImage: 'url("/services/security camera installation service.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }} >Camera installation</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[19] = el} style={{ backgroundImage: 'url("/services/Septic Tank Cleaning.jpg")',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Tank Cleaning </div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[20] = el} style={{ backgroundImage: 'url("/services/smart home service.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Smart Home service</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[21] = el} style={{ backgroundImage: 'url("/services/sofa and upholstery cleaning service.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Sofa cleaning</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[22] = el} style={{ backgroundImage: 'url("/services/Solar Panel Installation and Repair.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Solar Panel Installation</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[23] = el} style={{ backgroundImage: 'url("/services/Spa and Massage.jpg")',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Spa&Massage</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[24] = el} style={{ backgroundImage: 'url("/services/switchboard.jpg")',  backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Switchboard Repair</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[25] = el} style={{ backgroundImage: 'url("/services/TV repair.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>TV repairing</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[26] = el} style={{ backgroundImage: 'url("/services/washing machine.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Washing Machine</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[27] = el} style={{ backgroundImage: 'url("/services/water purifier.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Water Purifier</div>
                    <div className='scrollingContent h-[90%] w-[25%] bg-[#e1eefd] rounded-2xl flex flex-col justify-end items-center text-2xl font-bold text-[#18375d] pb-[3vh] 'ref={el => scrollRef.current[28] = el} style={{ backgroundImage: 'url("/services/water tank cleaning.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>Water Tank Cleaning</div>
             </div>
          </div>
    </div>
        

   

    {/* services */}
    <div className='h-[600vh] w-full bg-[#e1eefd] relative flex flex-col items-center justify-start gap-4'>
      {/* service1*/}
      <div ref={s1Ref} className='service1 h-[100vh] w-full flex mt-[-170vh] md:mt-[0vh] items-center justify-between'>
      <div className='left flex flex-col items-start justify-center h-full w-[50%] ml-[-5vw] md:ml-[0] mt-0 md:mt-[-20vh]'>
        <h1 ref={s1HeadingRef} className='font-light h-[10vh] md:h-[20vh] w-[40vw] md:w-[35vw] ml-12 text-2xl md:text-4xl text-[#18375d] absolute'>
          Finding Skilled Experts Just Got Easier!
        </h1>
        <div ref={s1LinkRef} className='flex flex-row w-[15rem] md:w-80 h-16 text-xl md:text-3xl font-light items-center ml-[-3vw] md:ml-[-1vw] whitespace-nowrap justify-start absolute mt-[20vh] md:mt-[20vh]'>
          <Link href='/' className='flex mx-16 items-center gap-4 text-[#18375d] p-0 mt-[2rem] '>Join Waitlist <FaArrowCircleRight color='#18375d' /></Link>
        </div>
        <div ref={s1ImageRef} className='imageContainer h-[27vh] w-[48vw] mt-[7vh] md:mt-[65vh] ml-[55vw] md:ml-0 rounded-xl' style={{ backgroundImage: 'url(/services1.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        <p ref={s1TextRef} className='text-[#18375d] font-glacial ml-[55vw] md:ml-[13vw] mt-[-10vw] md:mt-0 whitespace-nowrap'>Anytime, Anywhere...</p>
      </div>
      <div ref={s1ParagraphRef} className='right h-[20vh] md:h-[35vh] x-[60vw] md:w-[20vw] font-glacial text-lg md:text-xl text-[#18375d] mr-0 md:mr-[5vw] mt-[20vh] md:mt-[40vh] text-right invisible md:visible'>
        <p>With DOUM, access certified and verified professionals instantly. Say goodbye to long searches and unreliable services—get the right expert for your needs in no time, right at your doorstep</p>
      </div>
    </div>
      {/*service2*/}
      <div ref={s2Ref} className='service2 h-[100vh] w-full flex mt-[30vh] md:mt-[0vh] items-center justify-between'>
              <div  ref={s2ParagraphRef} className='left h-[20vh] md:h-[35vh] x-[60vw] md:w-[20vw] font-glacial text-lg md:text-xl text-[#18375d] ml-0 md:ml-[5vw] mt-[20vh] md:mt-[40vh] text-left invisible md:visible'>
              <p>
              Our user-friendly app ensures hassle-free bookings. Choose your desired service, customize your requirements, and confirm your slot—all with just a few clicks. Convenience and efficiency made seamless for you
             </p>
              </div>
              <div className='right h-[100%] w-[50%]'>
                <div className='headinCon w-full h-[25%] flex flex-col text-right items-end justify-around mt-[7vh] md:mt-[30vh] pr-2 '>
                  <h1 ref={s2HeadingRef} className=' font-light h-[5vh] md:h-[20vh] w-[40vw] md:w-[35vw] mr-0 md:mr-12 text-2xl md:text-4xl text-[#18375d] '>Book Services in Just a Few Taps!</h1>
                <div ref={s2LinkRef}  className='flex flex-row w-[15rem] md:w-80 h-16 text-xl md:text-3xl font-light items-center mr-[-10vw] md:mr-[-2vw] whitespace-nowrap justify-start  mt-[-10vh] md:mt-[10vh]'><Link href='/' className='flex mx-16 items-center gap-4 text-[#18375d] p-0 mt-[6rem]'>Join Waitlist <FaArrowCircleRight color='#18375d' /> </Link></div> 
              </div>
              

            <div ref={s2ImageRef} className='imageContainer h-[27vh] w-[48vw] md:w-[30vw] mt-[-20vh] md:mt-[15vh] ml-[-50vw] md:ml-[15vw] rounded-xl  md:relative' style={{ backgroundImage: 'url(/services2.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <p ref={s2TextRef} className='text-[#18375d] font-glacial ml-[-50vw] md:ml-[19vw] mt-[-10vw] md:mt-0 whitespace-nowrap  md:relative  '>A Few Steps...</p>
              </div>
      </div>
      {/* service 3 */}
      <div ref={s3Ref} className='service1 h-[100vh] w-full flex mt-[-40vh] md:mt-[0vh] items-center justify-between'>
            <div className='left flex flex-col items-start justify-center h-full w-[50%] ml-[-5vw] md:ml-[0] mt-0 md:mt-[-20vh]'>
                <h1 ref={s3HeadingRef} className=' font-light h-[10vh] md:h-[20vh] w-[40vw] md:w-[35vw] ml-12 text-2xl md:text-4xl text-[#18375d] absolute'>Track Real-Time Updates for Every Booking!</h1>
            <div ref={s3LinkRef}  className='flex flex-row w-[15rem] md:w-80 h-16 text-xl md:text-3xl font-light items-center ml-[-3vw] md:ml-[-1vw] whitespace-nowrap justify-start absolute mt-[20vh] md:mt-[10vh]'><Link href='/' className='flex mx-16 items-center gap-4 text-[#18375d] p-0 mt-[5rem]'>Join Waitlist <FaArrowCircleRight color='#18375d' /> </Link></div> 
            <div ref={s3ImageRef} className='imageContainer h-[27vh] w-[48vw] mt-[7vh] md:mt-[65vh] ml-[55vw] md:ml-0 rounded-xl' style={{ backgroundImage: 'url(/services3.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <p  ref={s3TextRef} className='text-[#18375d] font-glacial ml-[55vw] md:ml-[13vw] mt-[-10vw] md:mt-0 whitespace-nowrap'>Real-Time Tracking</p>
            </div>
            <div  ref={s3ParagraphRef} className='right  h-[20vh] md:h-[35vh] x-[60vw] md:w-[20vw] font-glacial text-lg md:text-xl text-[#18375d] mr-0 md:mr-[5vw] mt-[20vh] md:mt-[40vh] text-right invisible md:visible'>
                       <p>
                       Stay informed every step of the way. Track your service provider's location, estimated arrival time, and job progress in real time, ensuring transparency and peace of mind throughout the process.
                       </p>
            </div>
            </div>
      {/*service4*/}
      <div ref={s4Ref} className='service2 h-[100vh] w-full flex mt-[60vh] md:mt-[0vh] items-center justify-between'>
              <div  ref={s4ParagraphRef} className='left h-[20vh] md:h-[35vh] x-[60vw] md:w-[20vw] font-glacial text-lg md:text-xl text-[#18375d] ml-0 md:ml-[5vw] mt-[20vh] md:mt-[40vh] text-left invisible md:visible'>
              <p>
              No hidden costs or surprises!DOUM provides clear, upfront pricing for every service.Choose your preferred payment method—cashless or cash—and enjoy a smooth, worry-free transaction experience every time.
             </p>
              </div>
              <div className='right h-[100%] w-[50%]'>
                <div className='headinCon w-full h-[40vh] md:h-[25%] flex flex-col text-right items-end justify-around mt-[7vh] md:mt-[30vh] pr-2 '>
                  <h1 ref={s4HeadingRef} className=' font-light h-[5vh] md:h-[20vh] w-[40vw] md:w-[35vw] mr-0 md:mr-12 text-2xl md:text-4xl text-[#18375d] '>Transparent Pricing and Hassle-Free Payments!</h1>
                <div ref={s4LinkRef}  className='flex flex-row w-[15rem] md:w-80 h-16 text-xl md:text-3xl font-light items-center mr-[-10vw] md:mr-[-2vw] whitespace-nowrap justify-start  mt-[0vh] md:mt-[10vh]'><Link href='/' className='flex mx-16 items-center gap-4 text-[#18375d] p-0'>Join Waitlist <FaArrowCircleRight color='#18375d' /> </Link></div> 
              </div>
              

            <div ref={s4ImageRef} className='imageContainer h-[27vh] w-[48vw] md:w-[30vw] mt-[-32vh] md:mt-[15vh] ml-[-50vw] md:ml-[15vw] rounded-xl  md:relative' style={{ backgroundImage: 'url(/services4.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <p ref={s4TextRef} className='text-[#18375d] font-glacial ml-[-50vw] md:ml-[19vw] mt-[-10vw] md:mt-0 whitespace-nowrap  md:relative '>Transparent Pricing</p>
              </div>
      </div>
      {/*services 5*/}
      <div ref={s5Ref} className='service1 h-[100vh] w-full flex mt-[-40vh] md:mt-[0vh] items-center justify-between'>
            <div className='left flex flex-col items-start justify-center h-full w-[50%] ml-[-5vw] md:ml-[0] mt-0 md:mt-[-20vh]'>
                <h1 ref={s5HeadingRef} className=' font-light h-[10vh] md:h-[20vh] w-[40vw] md:w-[35vw] ml-12 text-2xl md:text-4xl text-[#18375d] absolute'>Expert Services, Anytime, Anywhere!</h1>
            <div ref={s5LinkRef}  className='flex flex-row w-[15rem] md:w-80 h-16 text-xl md:text-3xl font-light items-center ml-[-3vw] md:ml-[-1vw] whitespace-nowrap justify-start absolute mt-[30vh] md:mt-[20vh]'><Link href='/' className='flex mx-16 items-center gap-4 text-[#18375d] p-0'>Join Waitlist <FaArrowCircleRight color='#18375d' /> </Link></div> 
            <div ref={s5ImageRef} className='imageContainer h-[27vh] w-[48vw] mt-[7vh] md:mt-[65vh] ml-[55vw] md:ml-0 rounded-xl' style={{ backgroundImage: 'url(/services5.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <p ref={s5TextRef} className='text-[#18375d] font-glacial ml-[55vw] md:ml-[13vw] mt-[-15vw] md:mt-0 whitespace-nowrap'>Get Top-notch services instantly...</p>
            </div>
            <div  ref={s5ParagraphRef} className='right  h-[20vh] md:h-[35vh] x-[60vw] md:w-[20vw] font-glacial text-lg md:text-xl text-[#18375d] mr-0 md:mr-[5vw] mt-[20vh] md:mt-[40vh] text-right invisible md:visible'>
                       <p>
                       Our skilled professionals are always ready to help, whether it’s fixing appliances or deep cleaning your home. From big cities to small towns, DOUM ensures expert services are accessible everywhere,anytime.
                       </p>
            </div>
            </div>
     

    </div>
       {/* how it works */}

       <div ref={whyUsRef} className='why-us-start h-[100vh] w-[100vw] bg-[#18375d] flex justify-center items-center'>
       <div ref={circleRef} className='h-[40vw] w-[40vw] rounded-full absolute -z-2 self-center'style={{ backgroundImage: 'url(/circle.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity:'0.45' }}></div>
          <div ref={WhyUsImgRef} className='image-container  h-[50%] w-[60%] relative z-50' style={{ backgroundImage: 'url(/Screenshot_2025-02-01_092629-removebg-preview_upscayl_4x_realesrgan-x4plus.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          
             
          </div>

       </div>

       {/*how it works container */}
       <div className='h-[450vh] w-[100vh] bg-[#e1eefd] flex flex-col justify-start items-center'>
         <h1 ref={howItWorksHeadingRef} className=' font-glacial text-[#18375d] text-xl md:text-4xl sticky top-[15vh] md:top-[25vh] mb-20 whitespace-nowrap font-medium ' >
           Book an Expert in 3 Easy steps
         </h1>
          {/* how it works 1 container*/}
          <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
                {/*step 1*/}
                 <div ref={step1ConRef} className='step1-container w-[80%] md:w-[40%] h-[75%] md:h-[60%] mt-[20vh] mr-[0] md:mr-[15vw] rounded-2xl flex flex-col justify-center items-center bg-[#bbd7f4]'>
                  <div>
                     <div ref={step1Ref} className='bg-[#18375d] rounded-full w-[40vw] md:w-[10vw] h-[15vh] md:h-[10Vh] whitespace-nowrap flex justify-center items-center font-glacial text-white font-bold text-3xl ml-[5%] mt-4'>

                           Step 01
                     </div>
                     <br/>
                     <h1 ref={step1HeadingRef} className='font-glacial text-[#18375d] text-3xl font-bold ml-[5%]'>Select a Service</h1>
                     <br/>
                     <div ref={step1ParagraphRef} className='w-[60%]  text-2xl/8  font-glacial text-[#18375d] font-medium ml-[5%] space-y-6  mb-4'>
                    
                     Open the DOUM app, browse through available services, and choose the one you need.
                     </div>
                       
                  </div>

                 </div>
          </div>
           {/* how it works 2 container*/}
           <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
                {/*step 2*/}
                 <div ref={step2ConRef} className=' step2-container w-[80%] md:w-[40%] h-[75%] md:h-[60%] mt-[20vh] ml-[0] md:ml-[15vw] rounded-2xl flex flex-col justify-center items-center bg-[#bbd7f4]'>
                  <div>
                     <div ref={step2Ref} className='bg-[#18375d] rounded-full w-[40vw] md:w-[10vw] h-[7vh] md:h-[10Vh] whitespace-nowrap flex justify-center items-center font-glacial text-white font-bold text-3xl ml-[5%] mt-[10%] md:mt-[5%]'>

                           Step 02
                     </div>
                     <br/>
                     <h1 ref={step2HeadingRef} className='font-glacial text-[#18375d] text-3xl font-bold ml-[5%]'>Choose an Expert & Schedule</h1>
                     <br/>
                     <div ref={step2ParagraphRef} className=' w-[80%] md:w-[70%]  text-2xl/8  font-glacial text-[#18375d] font-medium ml-[5%] space-y-6  mb-4'>
                    
                     View expert profiles, check ratings, and select the best one. Pick a date & time that suits you
                     </div>
                       
                  </div>

                 </div>
          </div>
           {/* how it works 3 container*/}
           <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
                {/*step 3*/}
                 <div ref={step3ConRef} className='step3-container w-[80%] md:w-[40%] h-[75%] md:h-[60%] mt-[20vh] mr-[0] md:mr-[15vw] rounded-2xl flex flex-col justify-center items-center bg-[#bbd7f4]'>
                  <div>
                     <div ref={step2Ref} className='bg-[#18375d] rounded-full w-[40vw] md:w-[10vw] h-[7vh] md:h-[10Vh] whitespace-nowrap flex justify-center items-center font-glacial text-white font-bold text-3xl ml-[5%] mt-[10%] md:mt-[8%]'>

                           Step 03
                     </div>
                     <br/>
                     <h1 ref={step3HeadingRef} className='font-glacial text-[#18375d] text-3xl font-bold ml-[5%]'>Confirm & Relax</h1>
                     <br/>
                     <div ref={step3ParagraphRef} className='w-[80%] md:w-[80%]  text-2xl/8  font-glacial text-[#18375d] font-medium ml-[5%] space-y-6  mb-4 md:mb-8'>
                    
                     Complete your booking, make payment if required, and let our expert handle the job while you sit back!
                     </div>
                       
                  </div>

                 </div>
          </div>
          {/*why us*/}
               {/*main text part*/}
 <div className='h-[100vh] w-[100vw] bg-[#e1eefd] flex justify-center items-center'>
                         <h1 className='text-[#18375d] text-3xl font-bold font-glacial' >WHY CHOOSE DOUM</h1>
              </div>
              {/*data container part */}
              <div className='h-[100vh] w-[100vw] bg-[#e1eefd] flex flex-col justify-end items-center'>
              <div ref={whyDoumRef} className='h-[85%] w-[75%] bg-[#18375d] rounded-2xl flex'>
    <div className=" w-full md:w-1/2 flex flex-col justify-start gap-20  pl-6 md:pl-10 overflow-y-scroll overflow-x-hidden">
      
    <div className="h-[50vh]"></div>
      <div className="h-[50vh]"></div>
      <div className="h-[50vh]"></div>
      <div className="h-[50vh]"></div>
           
      {whyUsData.map((item, index) => (
        <div
          key={index}
          ref={el => textRefs.current[index] = el}
          className="transition-all duration-300 w-full"
        >
          <h3 className="text-2xl font-bold text-white/50">{item.heading}</h3>
          <p className="text-white/30">{item.text}</p>
        </div>
      ))}
      <div className="h-[50vh]"></div>
      <div className="h-[50vh]"></div>
      <div className="h-[50vh]"></div>
      <div className="h-[50vh]"></div>
    </div>
    <div className="invisible md:visible w-1/2  relative flex items-center justify-center">
  {whyUsData.map((item, index) => (
    <div
      key={index}
      ref={el => imageRefs.current[index] = el}
      className="absolute inset-0 mx-[10%] w-[150%] md:w-[80%] h-full rounded-3xl"
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: index === 0 ? 1 : 0
      }}
    />
  ))}
</div>
  </div>

              </div>
       </div>

       {/*More features */}
       <div className='empty-space h-[50vh] w-[100vw] bg-[#e1eefd]'>

       </div>

       <div className=' feature-wrapper w-[90vw] md:w-[55vw] h-[200vh] flex flex-col justify-evenly items-center'>
        <h1 className='text-[#18375d] text-2xl md:text-5xl whitespace-nowrap font-glacial font-bold'>All features that you can enjoy</h1>
        <div className='w-full h-[90%] flex flex-col justify-evenly items-center '>
          <div className='feature-container w-full h-[9%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-4xl'><FaTools color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-xl md:text-3xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>Service Selection Made Easy</div>

          </div>

          <div ref={el => featureRefs.current[0] = el} className='feature-container w-full h-[9%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-4xl'><FaUserTag color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-xl md:text-3xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>Verified Professionals</div>

          </div>

          <div ref={el => featureRefs.current[1] = el} className='feature-container w-full h-[9%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-4xl'><FaLocationDot color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-xl md:text-3xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>Real-Time Tracking</div>

          </div>

          <div ref={el => featureRefs.current[2] = el} className='feature-container w-full h-[9%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-4xl'><RiMoneyRupeeCircleFill color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-xl md:text-3xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>Transparent Pricing</div>

          </div>

          <div ref={el => featureRefs.current[3] = el} className='feature-container w-full h-[9%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-4xl'><RiCalendarScheduleFill color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-xl md:text-3xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>Flexible Scheduling</div>

          </div>

          <div ref={el => featureRefs.current[4] = el} className='feature-container w-full h-[9%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-4xl'><MdLocalOffer color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-xl md:text-3xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>Personalized Offers and Discounts</div>

          </div>

          <div ref={el => featureRefs.current[5] = el} className='feature-container w-full h-[9%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-4xl'><IoChatbubblesSharp color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-xl md:text-3xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>In-App Communication</div>

          </div>

          <div ref={el => featureRefs.current[6] = el} className='feature-container w-full h-[9%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-4xl'><MdPayment color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-xl md:text-3xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>Multiple Payment Options</div>

          </div>

          <div ref={el => featureRefs.current[7] = el} className='feature-container w-full h-[9%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-4xl'><FaClipboardList color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-xl md:text-3xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>Service History</div>

          </div>

          <div ref={el => featureRefs.current[8] = el} className='feature-container w-full h-[9%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-4xl'><RiReactjsLine color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-xl md:text-3xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>AI-Powered Assistance</div>

          </div>

        </div>

       </div>
       {/*FAQ */}

       <div className='transition-gap h-[100vh] w-[100vw] bg-[#e1eefd]'>


       </div>
       <div className='Faq-container h-[510vh] w-[100vw] overflow-auto bg-[#19375d] flex flex-col items-center justify-evenly relative z-10'>
         <div className='headings h-[80vh] w-full flex flex-col justify-center items-center gap-[5vh] text-center'>
         <h1 className=' text-5xl font-bold font-glacial text-white '>FREQUENTLY ASKED QUESTION</h1>
         <h4 className='text-4xl font-thin text-white font-glacial'>know us further</h4>
         <h5 className='text-2xl font-thin text-white font-glacial opacity-[0.7]'> Scroll down slowly</h5>
         </div>
         
          <div className='FAQS w-full h-[430vh]  flex flex-col justify-evenly items-center overflow-hidden relative z-10'>
            <div className='QnA1 h-[50vh] w-full flex flex-col justify-between'>
               <div className='Q1Container h-[40%] w-[100%] flex justify-center items-end gap-[1%] '>
                     <div className='userdp h-[12vh] w-[12vh] rounded-full bg-gray-400'></div>
                     <div className='Q1 h-full w-[70%] md:w-[40%] bg-[#e1eefd] rounded-3xl text-[#1837fd] font-glacial font-light flex items-center justify-center px-[2%] mr-[11vw]'>
                     Hi, I’m new to DOUM and have a lot of questions about how it works. Can you help?

                     </div>
               </div>
               <div className='A1Container h-[40%] w-[100%] flex justify-center items-end  gap-[1%]  '>
                     
                     <div className='A1 h-full w-[70%] md:w-[40%] bg-[#5187c0] rounded-3xl text-[#e1eefd] font-glacial font-light flex items-center justify-start px-[2%] ml-[11vw] text-left'>
                     Of course! I’m here to assist. Ask me anything.


                     </div>
                     <div className='employeedp h-20 w-20 rounded-full bg-gray-900'></div>
               </div>

            </div>
            <div className='QnA2 h-[50vh] w-full flex flex-col justify-between'>
               <div className='Q2Container h-[40%] w-[100%] flex justify-center items-end gap-[1%] '>
                     <div className='userdp h-[12vh] w-[12vh] rounded-full bg-gray-400'></div>
                     <div className='Q2 h-full w-[70%] md:w-[40%] bg-[#e1eefd] rounded-3xl text-[#1837fd] font-glacial font-light flex items-center justify-start p-[2%]  mr-[11vw]'>
                     What is DOUM?

                     </div>
               </div>
               <div className='A2Container h-[40%] w-[100%] flex justify-center items-end  gap-[1%]  '>
                     
                     <div className='A2 h-full w-[70%] md:w-[40%] bg-[#5187c0] rounded-3xl text-[#e1eefd] font-glacial font-light flex items-center justify-start px-[2%] ml-[11vw] text-left'>
                     DOUM is an all-in-one home services platform connecting users with verified experts for appliance repairs, cleaning, plumbing, electrical work, spa & massage and more—fast, reliable, and hassle-free in a single click


                     </div>
                     <div className='employeedp h-20 w-20 rounded-full bg-gray-900'></div>
               </div>

            </div>
            <div className='QnA3 h-[50vh] w-full flex flex-col justify-between'>
               <div className='Q3Container h-[40%] w-[100%] flex justify-center items-end gap-[1%] '>
                     <div className='userdp h-[12vh] w-[12vh] rounded-full bg-gray-400'></div>
                     <div className='Q3 h-full w-[70%] md:w-[40%] bg-[#e1eefd] rounded-3xl text-[#1837fd] font-glacial font-light flex items-center justify-start p-[2%]  mr-[11vw]'>
                     Okay. So, do you offer regular or subscription-based services?


                     </div>
               </div>
               <div className='A3Container h-[40%] w-[100%] flex justify-center items-end  gap-[1%]  '>
                     
                     <div className='A3 h-full w-[70%] md:w-[40%] bg-[#5187c0] rounded-3xl text-[#e1eefd] font-glacial font-light flex items-center justify-start px-[2%] ml-[11vw] text-left'>
                     Yes, we offer both one-time services and subscriptionbased plans. You can choose weekly, bi-weekly, or monthly visits for services like cleaning, pest control, or maintenance tasks


                     </div>
                     <div className='employeedp h-20 w-20 rounded-full bg-gray-900'></div>
               </div>

            </div>
            <div className='QnA4 h-[50vh] w-full flex flex-col justify-between'>
               <div className='Q4Container h-[40%] w-[100%] flex justify-center items-end gap-[1%] '>
                     <div className='userdp h-[12vh] w-[12vh] rounded-full bg-gray-400'></div>
                     <div className='Q4 h-full w-[70%] md:w-[40%] bg-[#e1eefd] rounded-3xl text-[#1837fd] font-glacial font-light flex items-center justify-start p-[2%]  mr-[11vw]'>
                     What happens if an expert doesn’t show up on time?

                     </div>
               </div>
               <div className='A4Container h-[40%] w-[100%] flex justify-center items-end  gap-[1%]  '>
                     
                     <div className='A4 h-full w-[70%] md:w-[40%] bg-[#5187c0] rounded-3xl text-[#e1eefd] font-glacial font-light flex items-center justify-start px-[2%] ml-[11vw] text-left'>
                     Punctuality is our priority. In rare cases of delays, we let you know immediately. You can track the expert’s real-time location or contact our support team for quick assistance.


                     </div>
                     <div className='employeedp h-20 w-20 rounded-full bg-gray-900'></div>
               </div>

            </div>
            <div className='QnA5 h-[50vh] w-full flex flex-col justify-between'>
               <div className='Q5Container h-[40%] w-[100%] flex justify-center items-end gap-[1%] '>
                     <div className='userdp h-[12vh] w-[12vh] rounded-full bg-gray-400'></div>
                     <div className='Q5 h-full w-[70%] md:w-[40%] bg-[#e1eefd] rounded-3xl text-[#1837fd] font-glacial font-light flex items-center justify-start p-[2%]  mr-[11vw]'>
                     Amazing. So, are there any charges for cancelling or rescheduling bookings?

                     </div>
               </div>
               <div className='A5Container h-[40%] w-[100%] flex justify-center items-end  gap-[1%]  '>
                     
                     <div className='A5 h-full w-[70%] md:w-[40%] bg-[#5187c0] rounded-3xl text-[#e1eefd] font-glacial font-light flex items-center justify-start px-[2%] ml-[11vw] text-left'>
                     You can cancel or reschedule for free if done within 1 hour before the service time. However, last-minute cancellations may incur minimal charges. Refer to Cancellation Policy.


                     </div>
                     <div className='employeedp h-20 w-20 rounded-full bg-gray-900'></div>
               </div>

            </div>
            <div className='QnA6 h-[50vh] w-full flex flex-col justify-between'>
               <div className='Q6Container h-[40%] w-[100%] flex justify-center items-end gap-[1%] '>
                     <div className='userdp h-[12vh] w-[12vh] rounded-full bg-gray-400'></div>
                     <div className='Q6 h-full w-[70%] md:w-[40%] bg-[#e1eefd] rounded-3xl text-[#1837fd] font-glacial font-light flex items-center justify-start p-[2%]  mr-[11vw]'>
                     What happens if I’m not satisfied with the service?

                     </div>
               </div>
               <div className='A6Container h-[40%] w-[100%] flex justify-center items-end  gap-[1%]  '>
                     
                     <div className='A6 h-full w-[70%] md:w-[40%] bg-[#5187c0] rounded-3xl text-[#e1eefd] font-glacial font-light flex items-center justify-start px-[2%] ml-[11vw] text-left'>
                     If you’re unsatisfied, you can report the issue via the app or contact our support team. We’ll work to resolve your concern promptly.



                     </div>
                     <div className='employeedp h-20 w-20 rounded-full bg-gray-900'></div>
               </div>

            </div>
            <div className='QnA7 h-[50vh] w-full flex flex-col justify-between'>
               <div className='Q7Container h-[40%] w-[100%] flex justify-center items-end gap-[1%] '>
                     <div className='userdp h-[12vh] w-[12vh] rounded-full bg-gray-400'></div>
                     <div className='Q7 h-full w-[70%] md:w-[40%] bg-[#e1eefd] rounded-3xl text-[#1837fd] font-glacial font-light flex items-center justify-start p-[2%]  mr-[11vw]'>
                     Got It. What if I require an instant service?


                     </div>
               </div>
               <div className='A7Container h-[40%] w-[100%] flex justify-center items-end  gap-[1%]  '>
                     
                     <div className='A7 h-full w-[70%] md:w-[40%]  bg-[#5187c0] rounded-3xl text-[#e1eefd] font-glacial font-light flex items-center justify-start px-[2%] ml-[11vw] text-left'>
                     Currently, we only provide service scheduling. Soon we will be adding instant services in under 10 minutes.



                     </div>
                     <div className='employeedp h-20 w-20 rounded-full bg-gray-900'></div>
               </div>

            </div>
            


          </div>
          

       </div>

       {/* Card Hover */}
       <div className='h-[160vh] w-[100vw] bg-[#e1eefd] overflow-y-hidden m-[-5vh] flex flex-col justify-center text-center'>
        <div className=' h-[150vw] md:h-[80vw] w-[150vw] md:w-[80vw] mt-[-140vh] md:mt-[-60vw] rounded-full bg-[#004aad] flex flex-col mx-[-25vw] md:mx-[12vw] absolute -z-9'></div>
        <h1 className='text-5xl font-bold font-glacial text-[#e1eefd]  mt-[-15vh] relative  z-5'>We’re more than just an app,</h1>
        <h1 className='text-5xl font-bold font-glacial text-[#e1eefd]  mt-[5vh] relative  z-5 ml-[2vw]'>we’re your trusted home partner!</h1>
        <div className= 'hover container w-full h-[80vh] self-center mt-[20vh] relative z-[15] flex justify-center items-center gap-[1%] invisible md:visible overflow-x-hidden '>
           <div className= 'hovCon bg-red-600 w-[10%] h-[95%] grayscale hover:grayscale-0 text-opacity-0 hover:text-opacity-100 text-3xl flex flex-col justify-end items-start px-[3%] py-[3%] rounded-2xl hover:w-[27%] hover:bg-emerald-600 transition-all duration-700 flex-1 hover:text-shadow' style={{ backgroundImage: 'url(/hover/8.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>Beyond Bookings,We Build Trust </div>
           <div className=' hovCon bg-red-600 w-[10%] h-[95%] grayscale hover:grayscale-0 text-opacity-0 hover:text-opacity-100 text-3xl flex flex-col justify-end items-start px-[3%] py-[3%] rounded-2xl hover:w-[27%] hover:bg-emerald-600 transition-all duration-700 flex-1 hover:text-shadow' style={{ backgroundImage: 'url(/hover/9.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>More Than Service,We Offer Care</div>
           <div className=' hovCon bg-red-600 w-[10%] h-[95%] grayscale hover:grayscale-0 text-opacity-0 hover:text-opacity-100 text-3xl flex flex-col justify-end items-start px-[3%] py-[3%] rounded-2xl hover:w-[27%] hover:bg-emerald-600 transition-all duration-700 flex-1 hover:text-shadow' style={{ backgroundImage: 'url(/hover/10.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>Not Just an App,a Helping Hand </div>
           <div className=' hovCon bg-red-600 w-[10%] h-[95%] grayscale hover:grayscale-0 text-opacity-0 hover:text-opacity-100 text-3xl flex flex-col justify-end items-start px-[3%] py-[3%] rounded-2xl hover:w-[27%] hover:bg-emerald-600 transition-all duration-700 flex-1 hover:text-shadow' style={{ backgroundImage: 'url(/hover/11.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>Your Home,Our Responsibility </div>
           <div className=' hovCon bg-red-600 w-[10%] h-[95%] grayscale hover:grayscale-0 text-opacity-0 hover:text-opacity-100 text-3xl flex flex-col justify-end items-start px-[3%] py-[3%] rounded-2xl hover:w-[27%] hover:bg-emerald-600 transition-all duration-700 flex-1 hover:text-shadow' style={{ backgroundImage: 'url(/hover/12.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>Service with a Personal Touch </div>
           <div className=' hovCon bg-red-600 w-[10%] h-[95%] grayscale hover:grayscale-0 text-opacity-0 hover:text-opacity-100 text-3xl flex flex-col justify-end items-start px-[3%] py-[3%] rounded-2xl hover:w-[27%] hover:bg-emerald-600 transition-all duration-700 flex-1 hover:text-shadow' style={{ backgroundImage: 'url(/hover/13.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>Here for Every Home, Every Need </div>
           <div className='hovCon bg-red-600 w-[10%] h-[95%] grayscale hover:grayscale-0 text-opacity-0 hover:text-opacity-100 text-3xl flex flex-col justify-end items-start px-[3%] py-[3%] rounded-2xl hover:w-[27%] hover:bg-emerald-600 transition-all duration-700 flex-1 hover:text-shadow' style={{ backgroundImage: 'url(/hover/14.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>From Quick Fixes to Lasting Trust </div>
           <div className='hovCon bg-red-600 w-[10%] h-[95%] grayscale hover:grayscale-0 text-opacity-0 hover:text-opacity-100 text-3xl flex flex-col justify-end items-start px-[3%] py-[3%] rounded-2xl hover:w-[27%] hover:bg-emerald-600 transition-all duration-700 flex-1 hover:text-shadow' style={{ backgroundImage: 'url(/hover/15.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>A Relationship, Not Just a Transaction </div>
          
            

        </div>
        </div>
        
        <div className='mobHoverContainer w-full h-[430vh] mt-[-100vh] flex md:hidden flex-col justify-evenly items-center relative'>
  {[
    { image: '/hover/8.png', text: 'Beyond Bookings, We Build Trust' },
    { image: '/hover/9.png', text: 'More Than Service, We Offer Care' },
    { image: '/hover/10.png', text: 'Not Just an App, a Helping Hand' },
    { image: '/hover/11.png', text: 'Your Home, Our Responsibility' },
    { image: '/hover/12.png', text: 'Service with a Personal Touch' },
    { image: '/hover/13.png', text: 'Here for Every Home, Every Need' },
    { image: '/hover/14.png', text: 'From Quick Fixes to Lasting Trust' },
    { image: '/hover/15.png', text: 'A Relationship, Not Just a Transaction' }
  ].map((item, index) => (
    <div 
      key={index}
      ref={el => mobHoverRef.current[index] = el} 
      className='w-[90%] h-[40vh] rounded-3xl flex items-center justify-center transition-all duration-300 overflow-hidden'
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        filter: 'grayscale(100%)'
      }}
    >
      <h2 className='text-white text-2xl font-bold opacity-0 transition-opacity duration-300 text-center px-4'>{item.text}</h2>
    </div>
  ))}
</div>

        {/* waitlist form */}
        <div className='form-section h-[140vh] w-[100vw]  flex justify-between'>
        <Toaster />
          <div className='circleCon  h-full w-[25%] ml-[-25vw] overflow-x-visible hidden md:inline-block'> <div className='h-[125vh] w-[125vh]  rounded-full bg-[#004aad] flex flex-col items-end justify-center gap-[3vh]'>
             <div className='headingCon  mr-[15vh] h-[25%] w-[40%]'>
              <h1 className='text-[#e1eefd] text-4xl font-glacial font-bold '>
              Be One of the First 100 to Get a Free Service!
              </h1>
              </div>  
             <div className='contact-info h-[8%] w-[30%] mr-[29vh]'>
             <p className='font-glacial text-[#e1eefd] text-lg font-light'>+91 8967908081</p>
             <p className='font-glacial text-[#e1eefd] text-lg font-light'> info@mydoum.com</p>
             </div>
             <div className='whatsapp h-[5%] w-[35%] mr-[23vh]' >
              <Link href='/' className='font-glacial text-[#e1eefd] text-md font-thin whitespace-nowrap flex items-center justify-start gap-4'>Need help? Message us! <div><BsWhatsapp color='#e1eefd' /></div>  </Link> </div>
              <div className='address font-glacial text-[#e1eefd] text-lg font-light h-[10%] w-[40%] mr-[17vh] '>Salt Lake City, Kolkata,Kolkata 700091,West Bengal, India</div>

            

            </div></div>
          <div className='FormCon  h-full w-full md:w-[65%]  mt-[10vh] flex justify-center items-center flex-col '>
            <form className='h-[70%] w-[90%] md:w-[75%] bg-[#bbd7f47a] rounded-2xl mb-[2vh] drop-shadow-2xl flex flex-col items-center justify-evenly'onSubmit={handleSubmit(onSubmit,onError)} id='myForm'>
            
              <div className='names flex h-[20%] w-[90%]  items-center justify-between '>
                <div className='firstname h-full w-[45%] flex flex-col'>
                  <label className='font-glacial text-[#18375d] text-lg font-medium'>First Name</label>
                  <input type='text' name='firstname' required placeholder='First Name'  className='h-[60%] w-full rounded-lg bg-[#a2c1e7] focus:border-2 focus:border-[#18375d] placeholder-[#18375d] px-[1rem]' {...register('firstName')}/>

                </div>
                <div className='lastname h-full w-[45%]  flex flex-col'>
                  <label className='font-glacial text-[#18375d] text-lg font-medium'>Last Name</label>
                  <input type='text' name='lastname' required placeholder='Last Name'  className='h-[60%] w-full rounded-lg bg-[#a2c1e7] focus:border-2 focus:border-[#18375d] placeholder-[#18375d] px-[1rem]' {...register('lastName')} />

                </div>
              </div>
              <div className='Email flex h-[20%] w-[90%]  items-start justify-between flex-col '>
              <label className='font-glacial text-[#18375d] text-lg font-medium'>Email</label>
              <input type='text' name='Email' required placeholder='Name@gmail.com'  className='h-[60%] w-full rounded-lg bg-[#a2c1e7] focus:border-2 focus:border-[#18375d] placeholder-[#18375d] px-[1rem]'   {...register('Email', {
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Enter a valid email",
    },
  })}/>

              </div>
              <div className='phone no flex h-[20%] w-[90%]  items-start justify-between flex-col '>
              <label className='font-glacial text-[#18375d] text-lg font-medium'>Phone no.</label>
              <div className="w-full h-[60%] flex justify-between">
  <div className="w-[20%] h-[100%] bg-[#a2c1e7] rounded-lg flex justify-center items-center text-[#18375d] text-lg gap-2">
    <div
      className="h-[20%] w-[20%]"
      style={{
        backgroundImage: "url(/india.png)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
    +91
  </div>
  <input
    type="tel"
    name="phone"
    required
    placeholder="Enter Phone Number"
    className="h-full w-[75%] rounded-lg bg-[#a2c1e7] focus:border-2 focus:border-[#18375d] placeholder-[#18375d] px-[1rem]"
    {...register("mobile", {
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: "Enter a valid 10-digit Indian mobile number",
      },
    })}
  />
</div>

              </div>
              <div className='Message flex h-[30%] w-[90%]  items-start justify-between flex-col '>
              <label className='font-glacial text-[#18375d] text-lg font-medium'>Message</label>
              <input type='text' name='Message'  placeholder='Enter Your Message'  className='h-[70%] w-full rounded-lg bg-[#a2c1e7] focus:border-2 focus:border-[#18375d] placeholder-[#18375d] px-[1rem]' {...register('Message')}/>

              </div>
              

            </form>
            <button type='submit' className='bg-[#004aad] text-[#e1eefd] text-lg font-glacial font-medium w-[50%] h-[7.5%] rounded-2xl' onClick={() => document.getElementById("myForm").requestSubmit()}
              >Claim Your Spot Now</button>
          </div>

        </div>
              {/*footer */}
   <div className='footer h-auto min-h-[75vh] w-[100vw] md:w-[75vw] mt-[20vh] mb-[-20vh] rounded-3xl mix-blend-multiply flex flex-wrap items-start justify-evenly bg-black gap-8 py-8' style={style2}>
   <div className='col1 h-auto w-full md:w-[25%] flex flex-col justify-center mt-6 px-4' >
      <div className='logo h-[100px] w-[80%] items-start mx-auto md:mx-0' style={{ backgroundImage: 'url(/DOUM-logo-removebg-preview.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', mixBlendMode: 'multiply' }}> </div>
      <br/>
      <div className='text-container text-xl text-[#18375d] font-glacial font-extralight text-center md:text-left'>
      Salt Lake City, Kolkata, Kolkata 700091, West Bengal, India
      </div>
      <br/>
      <div className='links flex justify-center md:justify-start gap-4'>
        <Link href='/'><AiOutlineLinkedin color='#18375d' size={40} /></Link>
        <Link href='/'><CiInstagram color='#18375d' size={40}  /></Link>
        <Link href='/'><AiOutlineFacebook color='#18375d' size={40}  /></Link>
        <Link href='/'><FaXTwitter color='#18375d' size={40}  /></Link>
      </div>
   </div>
   <div className='col2 h-auto w-full md:w-[20%] flex flex-col justify-evenly items-center mt-6 px-4'>
      <h1 className='text-[#18375d] font-glacial font-bold text-xl mb-4'>Navigation</h1>
      <Link href='/' className='font-light font-glacial text-md text-[#18375d] mb-2'>Home</Link>
      <Link href='/'className='font-light font-glacial text-md text-[#18375d] mb-2' >How it works</Link>
      <Link href='/' className='font-light font-glacial text-md text-[#18375d] mb-2'>why us</Link>
      <Link href='/' className='font-light font-glacial text-md text-[#18375d] mb-2'>FAQs</Link>
      <Link href='/' className='font-light font-glacial text-md text-[#18375d] mb-2'>Join Waitlist</Link>
   </div>
   <div className='col3 h-auto w-full md:w-[20%] flex flex-col justify-evenly items-center md:items-start mt-6 px-4'>
      <h1 className='text-[#18375d] font-glacial font-bold text-xl mb-4'>Get in Touch</h1>
      <Link href='/' className='font-light font-glacial text-md text-[#18375d] mb-2'>info@mydoum.com</Link>
      <h1 className='text-[#18375d] font-glacial font-bold text-xl mt-4 mb-2'>Enquire</h1>
      <Link href='/' className='font-light font-glacial text-md text-[#18375d] mb-2'>+91 8967908081</Link>
      <h1 className='text-[#18375d] font-glacial font-bold text-xl mt-4 mb-2'>Support</h1>
      <Link href='/' className='font-light font-glacial text-md text-[#18375d] mb-2'>+91 8420385246</Link>
   </div>
   <div className='col4 h-auto w-full md:w-[20%] flex flex-col justify-evenly items-center md:items-start mt-6 px-4'>
      <h1 className='text-[#18375d] font-glacial font-bold text-xl mb-4'>Legal</h1>
      <Link href='/' className='font-light font-glacial text-md text-[#18375d] mb-2'>Terms of Use</Link>
      <Link href='/'className='font-light font-glacial text-md text-[#18375d] mb-2' >Privacy Policy</Link>
      <Link href='/' className='font-light font-glacial text-md text-[#18375d] mb-2'>Equal Opportunity Policy</Link>
      <Link href='/' className='font-light font-glacial text-md text-[#18375d] mb-2'>Refund and Cancellation Policy</Link>
   </div>
   </div>     

       


    </>
  )
}

export default Hero