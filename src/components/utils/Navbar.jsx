import Lenis from 'lenis';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Button from './Button';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(()=>{
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
   
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

  })

  useGSAP(()=>{
    document.querySelectorAll('.elem').forEach(elem => {
      let image = elem.querySelector('img');
  
      let xTransform = gsap.utils.random(-100, 100);
      gsap.registerPlugin(gsap.timeline);
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline();
  
      tl.set(image, {
          transformOrigin: `${xTransform < 0 ? '0%' : '100%'}`,
          
      },"start");
  
      tl.to(image, {
          scale: 0,
          borderRadius: '100%',
          ease: "none",
          scrollTrigger: {
              trigger: image,
              start: 'top 10%',
              end: 'bottom top',
             
              scrub: true,
          }
      },"start")
      
      .to(elem,{
          xPercent:xTransform,
          ease: "none",
          scrollTrigger: {
              trigger: image,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
          }
      },"start")
      
  });
  })

  return (
    <div className='w-full sm:shadow-lg shadow-2xl fixed top-0 bg-white   text-black py-4 px-8  z-[100] flex justify-between items-center '>
      <Link to='/'>
        <h1 className='text-2xl font-bold'>DENTAL</h1>
      </Link>

      <div className="relative flex items-center gap-8  ">
        <div className='hidden sm:block'>
      <Button
        link="/book-appointment"
        text="Book Appointment"
        />
      </div>
      <div
        className="text-bgblue h-12 w-12 flex items-center justify-center focus:outline-none hover:text-white hover:bg-bgblue rounded-full duration-300 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

        

        {/* Background overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        {/* Sliding menu */}
        <div
          className={`fixed top-0 right-0 h-screen backdrop-blur-md z-50 flex items-center justify-center transform transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0 w-full' : 'translate-x-full w-full'
          }`}
        >
          <div className="text-white text-2xl p-8">
            <Link 
              to={`/`} 
              className="block mb-4 text-6xl relative overflow-hidden group" 
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10 transition-colors duration-300 flex items-center">
                <span className="mr-4">{"1."}</span>
                <span className='pb-4'>{"Home"}</span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            {["about", "service", "contact"].map((item, index) => (
              <Link
                key={index}
                to={`/${item}`}
                className="block mb-4 text-6xl relative overflow-hidden group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 transition-colors duration-300 flex items-center">
                  <span className="mr-4">{`${index + 2}.`}</span>
                  <span className="pb-4">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>
          <button
            className="absolute top-2 right-6 text-white text-xl hover:bg-white hover:text-black rounded-full px-4 py-7 duration-300 font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
