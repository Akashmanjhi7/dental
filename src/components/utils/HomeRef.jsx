import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

const HomeRef = () => {
    const imgRef = useRef(null)
    const [currentSpan, setCurrentSpan] = useState(0)
    const spans = [
        "AI-powered intelligence.",
        "Cutting-edge solutions.",
        "Innovative technology."
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSpan((prev) => (prev + 1) % spans.length)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const imgElement = imgRef.current;
    
        gsap.fromTo(imgElement, 
          { x: "-70%" },
          {
            x: "40%",
            scrollTrigger: {
              trigger: imgElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
    }, []);

    return (
        <div className='w-full min-h-screen pb-20 '>
            <div className='max-w-screen-lg mx-auto text-[5vw] font-bold tracking-tighter leading-none pt-20 '>
                <h1>We deliver</h1>
                <h1 className='overflow-hidden h-[1.2em] font-thin text-zinc-400'>
                    <motion.span
                        key={currentSpan}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 1 }}
                        className='inline-block'
                    >
                        {spans[currentSpan]}
                    </motion.span>
                </h1>
            </div>

            <div className='w-full h-auto flex items-center justify-center mt-32'>
                <img ref={imgRef} src="/images/bed.jpg" alt="" className='w-full h-[80vh] object-cover'/>
            </div>
        </div>
    )
}

export default HomeRef
