'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger)
function Model(){

    const modelRef = useRef()
        const model2Ref = useRef()
        const result = useLoader(GLTFLoader, '/IP 4.glb')
        const result2 = useLoader(GLTFLoader, '/IP 5.glb')
        useEffect(() => {
            // Ensure first model is visible and second is hidden initially
            if (modelRef.current && model2Ref.current) {
                modelRef.current.visible = false
                model2Ref.current.visible = false
            }
        }, [])

        useGSAP(()=>{
            const tl0 = gsap.timeline({
                scrollTrigger:{
                    trigger: "#model-section",
                    start: 'top -50%',
                    end: 'bottom -150%',
                    scrub: 1,
                    
                    onEnter:()=>{
                        modelRef.current.visible = true;
                        model2Ref.current.visible = false;
                    },
                    onEnterBack:()=>{
                        modelRef.current.visible = true;
                    },
                    // onLeave:()=>{
                    //     modelRef.current.visible = false ;
                    // },
                    onLeaveBack:()=>{
                        modelRef.current.visible = false;
                    }
                    
                }
            })
            const tlR = gsap.timeline({
                        scrollTrigger:{
                            trigger: "#model-section",
                            start: 'top -250%',
                            end: 'bottom -350%',
                            scrub: {
        ease: "power1.out",
        smoothing: 0.5,
        duration: 0.5
    },
                            
                            
                            onEnterBack:()=>{
                                modelRef.current.visible = true;
                            },
                            // onLeave:()=>{
                            //     modelRef.current.visible = false ;
                            // },
                            onLeaveBack:()=>{
                                modelRef.current.visible = false;
                            }
                            
                        }
                    })
                    const tlR2 = gsap.timeline({
                        scrollTrigger:{
                            trigger: "#model-section",
                            start: 'bottom -350%',
                            end: 'bottom -450%',
                            scrub: {
                                ease: "power1.out",
                                smoothing: 0.5,
                                duration: 0.5
                            },
                            onEnter: () => {
                                // When entering this section, ensure correct model is visible
                                if (modelRef.current.rotation.y >= 0.6 * Math.PI) {
                                    modelRef.current.visible = false;
                                    model2Ref.current.visible = true;
                                }
                            },
                            onEnterBack: () => {
                                // When scrolling back into this section, maintain second model visibility
                                model2Ref.current.visible = true;
                                modelRef.current.visible = false;
                            },
                            onLeaveBack: () => {
                                // When scrolling back before the switch point
                                model2Ref.current.visible = false;
                                modelRef.current.visible = true;
                            },
                            onUpdate: (self) => {
                                // Get scroll direction and progress
                                const progress = self.progress;
                                const direction = self.getVelocity() >= 0 ? 1 : -1;
                                const currentRotation = modelRef.current.rotation.y;
                                const switchPoint = 0.5 * Math.PI; // Midpoint for switching models
                    
                                // Scrolling down
                                if (direction > 0 && currentRotation >= switchPoint && !model2Ref.current.visible) {
                                    modelRef.current.visible = false;
                                    model2Ref.current.visible = true;
                                }
                                // Scrolling up
                                else if (direction < 0 && currentRotation <= switchPoint && model2Ref.current.visible) {
                                    modelRef.current.visible = true;
                                    model2Ref.current.visible = false;
                                }
                            }
                        }
                    })
                    const tlR3 = gsap.timeline({
                        scrollTrigger:{
                            trigger: "#model-section",
                            start: 'bottom -450%',
                            end: 'bottom -550%',
                            scrub: {
        ease: "power1.out",
        smoothing: 0.5,
        duration: 0.5
    },
                            
                        }
                    })
                    const tlR4 = gsap.timeline({
                        scrollTrigger:{
                            trigger: "#model-section",
                            start: 'bottom -550%',
                            end: 'bottom -650%',
                            scrub: {
        ease: "power1.out",
        smoothing: 0.5,
        duration: 0.5
    },
                            
                        }
                    })
                    const tlR5 = gsap.timeline({
                        scrollTrigger:{
                            trigger: "#model-section",
                            start: 'bottom -650%',
                            end: 'bottom -750%',
                            scrub: {
        ease: "power1.out",
        smoothing: 0.5,
        duration: 0.5
    },
                            
                            
                        }
                    })
                    tl0.fromTo([modelRef.current.position, model2Ref.current.position],{
                        x: 0,
                        y: -20,
                        z: -25,
                    },{
                        x: 0,
                        y: 2,
                        z: -25,
                    },'plz work')

                    tl0.fromTo([modelRef.current.rotation, model2Ref.current.rotation],{
                        x: 0,
                        y: 0,
                        z: 0,
                    },{
                        x: 0,
                        y: -Math.PI,
                        z: 0,
                    },'plz work')
                    
                    tlR.fromTo([modelRef.current.rotation, model2Ref.current.rotation], {
                        x: 0,
                        y: Math.PI,
                        z: 0,  
                    }, {
                        x: 0,
                        y: 2*Math.PI/3,
                        z: 0,
                    }, 'kbc')
                    .fromTo([modelRef.current.scale, model2Ref.current.scale], {
                        x: 6.5,
                        y: 6.5,
                        z: 6.5, 
                    }, {
                        x: 4,
                        y: 4,
                        z: 4,
                    }, 'kbc')
                    
                    tlR2.fromTo([modelRef.current.rotation, model2Ref.current.rotation], {
                        x: 0,
                        y: 2*Math.PI/3,
                        z: 0,  
                    }, {
                        x: 0,
                        y: Math.PI/2,
                        z: 0,
                    })
            
                    tlR3.fromTo([modelRef.current.rotation, model2Ref.current.rotation], {
                        x: 0,
                        y: Math.PI/2,
                        z: 0,
                    }, {
                        x: 0,
                        y: Math.PI/4,
                        z: 0,
                    })
            
                    tlR4.fromTo([modelRef.current.rotation, model2Ref.current.rotation], {
                        x: 0,
                        y: Math.PI/4,
                        z: 0,
                    }, {
                        x: 0,
                        y: 0,
                        z: 0,
                    })
            
                    tlR5.fromTo([modelRef.current.rotation, model2Ref.current.rotation], {
                        x: 0,
                        y: 0,
                        z: 0,
                    }, {
                        x: 0,
                        y: -Math.PI,
                        z: 0,
                    })
                    const fadeOut = gsap.timeline({
                                scrollTrigger:{
                                    trigger: "#model-section",
                                    start: 'bottom -700%',
                                    end: 'bottom -800%',
                                    scrub: {
        ease: "power1.out",
        smoothing: 0.5,
        duration: 0.5
    },
                                    
                                    onUpdate: (self) => {
                                        // Make everything transparent
                                        modelRef.current.traverse((node) => {
                                            if (node.material) {
                                                node.material.opacity = 1 - self.progress;
                                            }
                                        })
                                        model2Ref.current.traverse((node) => {
                                            if (node.material) {
                                                node.material.opacity = 1 - self.progress;
                                            }
                                        })
                                    },
                                    onLeave: () => {
                                        modelRef.current.visible = false;
                                        model2Ref.current.visible = false;
                                        
                                    },
                                    onEnterBack: () => {
                                        // When entering back, show model2 since we're coming from the end
                                        model2Ref.current.visible = true;
                                        modelRef.current.visible = false;
                                    }
                                }})
            fadeOut.fromTo([modelRef.current.scale, model2Ref.current.scale],{
                x:4,
                y:4,
                z:4
            },{
                x:20,
                y:20,
                z:20
            },'youtoo') 
            fadeOut.fromTo([modelRef.current.position, model2Ref.current.position],{
                x:0,
                y:2,
                z:-25
            },{
                x:0,
                y:10,
                z:-25
            },'youtoo') 
        })

        


     

        return (
            <>
                <primitive 
                    object={result.scene} 
                    scale={[6.5, 6.5, 6.5]}
                    position={[0,2,-25]} 
                    ref={modelRef}
                />
                <primitive 
                    object={result2.scene} 
                    scale={[6.5, 6.5, 6.5]} 
                    position={[0,2,-25]} 
                    ref={model2Ref}
                />
            </>
        )
}

function MobileAni() {
  
  return (
    
        <div id="model-section" className="h-full w-full z-[20]">
            <Canvas s style={{pointerEvents:"none"}}>
                <ambientLight intensity={1} color='white'/>
                <directionalLight intensity={1} position={[5,5,5]}color='white'/>
                <Model />
                
            </Canvas>
        </div>
    
  )
}

export default MobileAni