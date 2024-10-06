import Lenis from 'lenis';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Button from './Button';
import WhiteButton from './WhiteButton';
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
    <div className='w-full sm:shadow-lg shadow-2xl fixed top-0 bg-white   text-black  px-8 py-2 z-[100] flex justify-between items-center '>
      <Link to='/'>
        <img src="/images/logo1.jpg" alt="" className='w-32 h-14 object-cover  ' />
      </Link>

      <div className="relative flex items-center gap-8  ">
        <div className='hidden sm:block'>
      <Button
        link="/careers"
        text="Join Us"
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
          className={`fixed top-0 right-0 h-screen sm:bg-bgblue  backdrop-blur-md z-50 flex sm:items-start items-center sm:justify-between justify-center gap-8 transform transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0 w-full' : 'translate-x-full w-full'
          }`}
        >
          {/* Image Section */}
          <div className='imgae h-full w-full sm:block hidden   '>
          <div className='h-2/3 relative rounded-lg overflow-hidden group    ' >
              <img src="https://plus.unsplash.com/premium_photo-1663089993922-5d4601e1127b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='h-full w-full object-cover rounded-lg  flex items-center justify-center '/>

              <div className='absolute bottom-0 left-0 w-full h-1/2 opacity-90 bg-gradient-to-t from-bgblue to-transparent'></div>

              <div className="absolute top-0 right-0 w-10 h-10 bg-black opacity-0 rounded-full scale-0 group-hover:opacity-30 group-hover:scale-[70] transition-all duration-[1s]"></div>   

              <Link to={`/`} onClick={() => setIsMenuOpen(false)} className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-full h-24 w-24 sm:h-36 sm:w-36 p-4 text-base sm:text-[1.3vw] tracking-tight leading-none text-center flex items-center justify-center z-50 opacity-0 group-hover:opacity-100 transition-all duration-[1s] hover:bg-white hover:text-black'>
                  Dental
                </Link>
             
          </div>
              





              <div className='w-full'>
      <div className=" text-white py-16 px-4 text-center rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
         Lorem ipsum dolor sit amet. <br /> Take Action Now
        </h2>
            <Link to='/book-appointment' onClick={() => setIsMenuOpen(false)}  className=' bg-white text-bgblue border-2 border-bgblue hover:bg-bgblue hover:text-white px-4 py-2 rounded-lg duration-300'>
              Book Appointment
            </Link>
      </div> 
    </div>
             
              
          </div>
          {/* Navbar Section */}
          <div className="text-white sm:text-[4.5vw] text-[6vh] font-semibold sm:mr-32   p-8">
            <Link 
              to={`/`} 
              className="block mb-1  relative overflow-hidden group" 
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10 transition-colors duration-300 flex items-center">
                
                <span className='pb-4 sm:ml-2'>{"Home"}</span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            {/* {["about", "service", "contact","careers"].map((item, index) => (
              <Link
                key={index}
                to={`/${item}`}
                className="block mb-1 relative overflow-hidden group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 transition-colors duration-300 flex items-center">
                 
                  <span className="pb-4 sm:ml-2">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))} */}
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
