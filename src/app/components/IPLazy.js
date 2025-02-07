'use client'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin({ScrollTrigger})

function Model(){
    const modelRef = useRef()
    const model2Ref = useRef()
    const IP4 = React.lazy(()=> import ('../../../public/models/IP4Model'))
    const IP5 = React.lazy(()=> import ('../../../public/models/IP5Model'))

        
        
        useGSAP(() => {
            if (!modelRef.current ) return
            
            // Set initial visibility
            modelRef.current.visible = true
            
            
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger: "#model-section",
                    start: 'top top',
                    end: 'bottom -50%',
                    scrub: true,
                }
            })
            const tl2 = gsap.timeline({
                scrollTrigger:{
                    trigger: "#model-section",
                    start: 'top 30%',
                    end: 'bottom 60%',
                    scrub: 2,
                }
            })
            const tlR = gsap.timeline({
                scrollTrigger:{
                    trigger: "#model-section",
                    start: 'top -150%',
                    end: 'bottom -250%',
                    scrub: 4,
                    markers: true,
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
                }
            })
            const tl3 = gsap.timeline({
                scrollTrigger:{
                    trigger: "#model-section",
                    start: 'bottom -650%',
                    end: 'bottom -750%',
                    scrub: 4,
                    markers: true,
                }
            })
            const tl4 = gsap.timeline({
                scrollTrigger:{
                    trigger: "#model-section",
                    start: 'bottom -750%',
                    end: 'bottom -750%',
                    scrub: 4,
                    markers: true,
                }
            })
            const fadeOut = gsap.timeline({
                scrollTrigger:{
                    trigger: "#model-section",
                    start: 'bottom -750%',
                    end: 'bottom -750%',
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
                }
            })
            tl.fromTo(modelRef.current.scale, {
                x: 18,
                y: 18,
                z: 18
            }, {
                x: 10,
                y: 10,
                z: 10,
            }, 'hi')
            .fromTo(modelRef.current.rotation, {
                x: -Math.PI/4,
                y: Math.PI,
                z: 0
            }, {
                x: 0,
                y: Math.PI,
                z: 0,
            }, '-=1')
            .fromTo(modelRef.current.scale, {
                x: 10,
                y: 10,
                z: 10
            }, {
                x: 9,
                y: 9,
                z: 9,
            })
    
            tl2.fromTo(modelRef.current.position, {
                x: 8,
                y: -55,
                z: -15
            }, {
                x: 3,
                y: 6,
                z: -25,
            })
    
            tlR.fromTo(modelRef.current.rotation, {
                x: 0,
                y: Math.PI,
                z: 0,  
            }, {
                x: 0,
                y: 2*Math.PI/3,
                z: 0,
            }, 'kbc')
            .fromTo(modelRef.current.scale, {
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
    
            tlR3.fromTo( model2Ref.current.rotation, {
                x: 0,
                y: Math.PI/2,
                z: 0,
            }, {
                x: 0,
                y: Math.PI/4,
                z: 0,
            })
    
            tlR4.fromTo( model2Ref.current.rotation, {
                x: 0,
                y: Math.PI/4,
                z: 0,
            }, {
                x: 0,
                y: 0,
                z: 0,
            })
    
            tlR5.fromTo( model2Ref.current.rotation, {
                x: 0,
                y: 0,
                z: 0,
            }, {
                x: 0,
                y: -Math.PI,
                z: 0,
            })
            tl3.fromTo(model2Ref.current.scale,{
                x: 6.5,
                y: 6.5,
                z: 6.5,     
            },{
                x: 35,y:35,z: 35,
            },'hy')
            tl3.fromTo(model2Ref.current.position,{
                x: 3,
                y: 6,
                z: -25
            },{
                x: 0,
                y: 6,
                z: -25
            })
            fadeOut.fromTo(model2Ref.current,{
                opacity:1
            },{
                opacity:0
            })
    
        }, [modelRef.current, model2Ref.current])


return(
    <Suspense>
        <IP4 ref={modelRef} />
        <IP5 ref={model2Ref} />
    </Suspense>
)
}

function IPLazy() {
  return (
    <div id="model-section" className="h-full w-full">
                <Canvas>
                    <ambientLight intensity={1} color='white'/>
                    <directionalLight intensity={1} position={[5,5,5]}color='white'/>
                    <Model />
                </Canvas>
            </div>
  )
}

export default IPLazy