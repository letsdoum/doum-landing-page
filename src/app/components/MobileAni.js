'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
            
            const tlR = gsap.timeline({
                        scrollTrigger:{
                            trigger: "#model-section",
                            start: 'top -150%',
                            end: 'bottom -250%',
                            scrub: 4,
                            markers: true,
                            onEnter:()=>{
                                modelRef.current.visible = true;
                                model2Ref.current.visible = false;
                            }
                            
                        }
                    })
                    const tlR2 = gsap.timeline({
                        scrollTrigger:{
                            trigger: "#model-section",
                            start: 'bottom -250%',
                            end: 'bottom -350%',
                            scrub: 4,
                            markers: true,
                            onUpdate: (self) => {
                                // Get scroll direction and progress
                                const progress = self.progress;
                                const direction = self.getVelocity() >= 0 ? 1 : -1;
                                const currentRotation = modelRef.current.rotation.y;
            
                                // Scrolling down
                                if (direction > 0 && currentRotation < 0.6 * Math.PI && !model2Ref.current.visible) {
                                    modelRef.current.visible = false;
                                    model2Ref.current.visible = true;
                                }
                                // Scrolling up
                                else if (direction < 0 && currentRotation > 0.4 * Math.PI && model2Ref.current.visible) {
                                    modelRef.current.visible = true;
                                    model2Ref.current.visible = false;
                                }
                            }
                        }
                    })
                    const tlR3 = gsap.timeline({
                        scrollTrigger:{
                            trigger: "#model-section",
                            start: 'bottom -350%',
                            end: 'bottom -450%',
                            scrub: 4,
                            markers: true,
                        }
                    })
                    const tlR4 = gsap.timeline({
                        scrollTrigger:{
                            trigger: "#model-section",
                            start: 'bottom -450%',
                            end: 'bottom -550%',
                            scrub: 4,
                            markers: true,
                        }
                    })
                    const tlR5 = gsap.timeline({
                        scrollTrigger:{
                            trigger: "#model-section",
                            start: 'bottom -550%',
                            end: 'bottom -650%',
                            scrub: 4,
                            markers: true,
                            onLeave: ()=>{
                                modelRef.current.visible = false;
                                model2Ref.current.visible = false;
                            }
                        }
                    })
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
                        x: 9,
                        y: 9,
                        z: 9,  
                    }, {
                        x: 6.5,
                        y: 6.5,
                        z: 6.5,
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
                                    start: 'bottom -750%',
                                    end: 'bottom -790%',
                                    scrub: 4,
                                    markers: true,
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
                                        if (model2Ref.current.visible) {
                                            model2Ref.current.visible = true;
                                        } else {
                                            modelRef.current.visible = true;
                                        }
                                    }
                                }})
        })


     

        return (
            <>
                <primitive 
                    object={result.scene} 
                    scale={[5, 5, 5]}
                    position={[0,5,-25]} 
                    ref={modelRef}
                />
                <primitive 
                    object={result2.scene} 
                    scale={[5, 5, 5]} 
                    position={[0,5,-25]} 
                    ref={model2Ref}
                />
            </>
        )
}

function MobileAni() {
  return (
    
        <div id="model-section" className="h-[100vh] w-full z-[20]">
            <Canvas>
                <ambientLight intensity={1} color='white'/>
                <directionalLight intensity={1} position={[5,5,5]}color='white'/>
                <Model />
                
            </Canvas>
        </div>
    
  )
}

export default MobileAni