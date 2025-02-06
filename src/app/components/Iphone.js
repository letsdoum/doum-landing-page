'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Model() {

    function Model({ models, activeModel }) {
        const modelRef = useRef();

        
    useGSAP(() => {
        if (!modelRef.current) return;
        
        // Set initial visibility
        
        
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: 'top top',
                end: 'bottom -50%',
                scrub: true,
                invalidateOnRefresh: true
            }
        })
        const tl2 = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: 'top 30%',
                end: 'bottom 60%',
                scrub: 2,
                invalidateOnRefresh: true
            }
        })
        const tlR = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: 'top -150%',
                end: 'bottom -250%',
                scrub: 4,
                markers: true,
                invalidateOnRefresh: true
            }
        })
        const tlR2 = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: 'bottom -250%',
                end: 'bottom -350%',
                scrub: 4,
                markers: true,
                invalidateOnRefresh: true,
                
            }
        })
        const tlR3 = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: 'bottom -350%',
                end: 'bottom -450%',
                scrub: 4,
                markers: true,
                invalidateOnRefresh: true
            }
        })
        const tlR4 = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: 'bottom -450%',
                end: 'bottom -550%',
                scrub: 4,
                markers: true,
                invalidateOnRefresh: true
            }
        })
        const tlR5 = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: 'bottom -550%',
                end: 'bottom -650%',
                scrub: 4,
                markers: true,
                invalidateOnRefresh: true
            }
        })
        const tl3 = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: 'bottom -650%',
                end: 'bottom -750%',
                scrub: 4,
                markers: true,
                invalidateOnRefresh: true
            }
        })
        const tl4 = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: 'bottom -750%',
                end: 'bottom -750%',
                scrub: 4,
                markers: true,
                invalidateOnRefresh: true
            }
        })
        const fadeOut = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: 'bottom -750%',
                end: 'bottom -750%',
                scrub: 4,
                markers: true,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    // Make everything transparent
                    modelRef.current.traverse((node) => {
                        if (node.material) {
                            node.material.opacity = 1 - self.progress;
                        }
                    })
                    
                },
                
            }
        })
        const tls = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: 'bottom -750%',
                end: 'bottom -850%',
                scrub: true,
                invalidateOnRefresh: true
                
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
        .fromTo(modelRef.current.rotation,{
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
        
        tlR2.fromTo(modelRef.current.rotation, {
            x: 0,
            y: 2*Math.PI/3,
            z: 0,  
        }, {
            x: 0,
            y: Math.PI/2,
            z: 0,
        })

        tlR3.fromTo(modelRef.current.rotation, {
            x: 0,
            y: Math.PI/2,
            z: 0,
        }, {
            x: 0,
            y: Math.PI/4,
            z: 0,
        })

        tlR4.fromTo(modelRef.current.rotation,  {
            x: 0,
            y: Math.PI/4,
            z: 0,
        }, {
            x: 0,
            y: 0,
            z: 0,
        })

        tlR5.fromTo(modelRef.current.rotation, {
            x: 0,
            y: 0,
            z: 0,
        }, {
            x: 0,
            y: -Math.PI,
            z: 0,
        })
        tl3.fromTo(modelRef.current.scale,{
            x: 6.5,
            y: 6.5,
            z: 6.5,     
        },{
            x: 35,y:35,z: 35,
        },'hy')
        tl3.fromTo(modelRef.current.position,{
            x: 3,
            y: 6,
            z: -25
        },{
            x: 0,
            y: 6,
            z: -25
        })
        fadeOut.fromTo(modelRef.current,{
            opacity:1
        },{
            opacity:0
        })
        tls.fromTo(modelRef.current.scale, {
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

    }, { dependencies: [model] })
    useEffect(() => {
        ScrollTrigger.create({
            trigger: "#model-section",
            start: "bottom -250%",
            end: "bottom -350%",
            onEnter: () => setActiveModel(prev => modelSequence[prev].next),
            onEnterBack: () => setActiveModel(prev => modelSequence[prev].prev),
        });
    }, []);

    return (
        <>{model ? <primitive object={model.scene} ref={modelRef} /> : null}</>
        
    )
         
        

    
}
}

function Iphone() {
    const [activeModel, setActiveModel] = useState('IP 4');
    const [models, setModels] = useState({});

    const modelSequence = {
        'IP 4': { next: 'IP 5', prev: 'IP 6' },
        'IP 5': { next: 'IP 1', prev: 'IP 4' },
        'IP 1': { next: 'IP 2', prev: 'IP 5' },
        'IP 2': { next: 'IP 3', prev: 'IP 1' },
        'IP 3': { next: 'IP 6', prev: 'IP 2' },
        'IP 6': { next: 'IP 4', prev: 'IP 3' }
    };

    useEffect(() => {
        const loadModels = async () => {
            const modelNames = Object.keys(modelSequence);
            const loadedModels = {};
            
            for (const name of modelNames) {
                loadedModels[name] = await new GLTFLoader().loadAsync(`/${name}.glb`);
            }

            setModels(loadedModels);
        };

        loadModels();
    }, []);
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

export default Iphone