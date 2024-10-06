import React, { useState, useEffect, useRef } from 'react'
import Button from './utils/Button'
import { Link } from 'react-router-dom'
import ServiceCards from './utils/ServiceCards'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ContactSection from './utils/ContactSection'
import Work from './utils/Work'
import Team from './utils/Team'
import Marquee from 'react-fast-marquee'
import HomeRef from './utils/HomeRef'

const Home = () => {

  const contactRef = useRef(null)
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)
  const section4Ref = useRef(null)



  const words = [
    'Health', 'Smile', 'Hygiene', 'Care', 'Wellness', 'Confidence',
    'Freshness', 'Vitality', 'Radiance', 'Strength', 'Comfort', 'Brilliance'
  ];

  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum]);

  const handleType = () => {
    const index = loopNum % words.length;
    const fullWord = words[index];

    setCurrentWord(prev => {
      if (!isDeleting) {
        setTypingSpeed(150);
        return fullWord.substring(0, prev.length + 1);
      } else {
        setTypingSpeed(75);
        return fullWord.substring(0, prev.length - 1);
      }
    });

    if (!isDeleting && currentWord === fullWord) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && currentWord === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };



  return (
    <>
      {/* Section 1 */}

      <HomeRef />

      <section
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/hero.jpg')` }}
        className='w-full sm:h-[105vh] h-[40vh] bg-no-repeat bg-cover bg-top relative'>

        <div className='flex flex-col h-full items-start justify-center text-textwhite sm:max-w-screen-lg mx-auto sm:gap-8 sm:p-0 p-8'>
          <div className='heading sm:text-[5vw] text-[8vw] tracking-tight leading-tight font-bold'>
            <h1 className='overflow-hidden'>
              <motion.span
                initial={{ y: "40%", opacity: 0, rotate: 10 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="inline-block origin-left"
              >Achieve Perfect</motion.span>
            </h1>
            <div className='inline-block overflow-hidden'>
              <motion.h1
                className='overflow-hidden'

              >
                <motion.span className="inline-block"
                  initial={{ y: "100%", opacity: 0, rotate: 10 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                >
                  Oral <span className='text-bgblue'>
                    <span className="typing-animation">
                      {currentWord}
                      <span className="cursor">|</span>
                    </span>
                  </span>
                </motion.span>
              </motion.h1>
            </div>
          </div>
          <div className='description z-20 sm:w-2/5 w-full text-textgray mb-3 sm:text-[1.2vw] text-[1.5vh]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt eveniet corporis! Inventore ex alias unde natus cupiditate nam hic!
          </div>

          <Button link='/book-appointment' text='Book Appointment' />
        </div>

        {/* Gradient */}
        <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-bgblue to-transparent'></div>

        {/* Contact Info BOX */}
        <ContactSection />
        
      </section>
        


      {/* Section 2 */}
   
      <section  className='max-w-screen-lg mx-auto flex flex-col-reverse sm:flex-row items-center px-4 py-12 sm:py-[14vw] '>
        <div className='w-full flex flex-col justify-center  tracking-tight mb-8 sm:mb-0 mt-12 sm:mt-0 px-4 sm:px-0'>
          {/* Dynamic Heading */}
          {["Professional Dental", "Care Services at", "Competitive Prices!"].map((item, index) => (
            <h1 className='text-[2.9vh] sm:text-[3vw] font-bold overflow-hidden' key={index}>
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >{item}</motion.span>
            </h1>
          ))}


          <p className='text-zinc-600 w-full leading-normal mt-6 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum autem alias dignissimos asperiores fugiat debitis rerum quasi nam quia odio eligendi
          </p>
          <div className='points flex flex-col gap-4 mt-6 text-base'>
            <div className='point flex items-center gap-4'>
              <img src="/svg/shield.svg" alt="" className='w-8 h-8' />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='point flex items-center gap-4'>
              <img src="/svg/shield.svg" alt="" className='w-8 h-8' />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='point flex items-center gap-4'>
              <img src="/svg/shield.svg" alt="" className='w-8 h-8' />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className='w-full relative mt-8'>
          <div className='absolute bg-bgblue rounded-xl bottom-[-5%] right-[-5%] w-2/3 h-2/3'></div>
          <div className='relative z-10 w-full aspect-square group rounded-lg overflow-hidden flex justify-center items-center'>
            <img src="/images/dentist.jpg" alt="" className='h-full w-full object-cover object-top rounded-xl group-hover:scale-110 transition-all duration-[1s]' />
            <div className="absolute top-0 right-0 w-10 h-10 bg-black opacity-0 rounded-full scale-0 group-hover:opacity-30 group-hover:scale-[40] transition-all duration-[1s]"></div>

            <Link to='/about' className='absolute rounded-full w-28 h-28 flex items-center justify-center text-textwhite text-sm p-3 border-2 border-white opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[1s] cursor-pointer hover:bg-white hover:text-black hover:scale-[1.2]'>
              Read More
            </Link>
          </div>
        </div>
      </section>
   

      {/* Section 3 */}
      <section ref={section3Ref} className='w-full bg-bgblue mt-8'>
        <div className='max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between items-center sm:gap-20 gap-4 py-8'>
          <h1 className='w-full text-center sm:text-left sm:w-1/3 text-textwhite font-bold sm:text-[1.6vw] text-[3vh] text-wrap'>Trusted By Hundreds Of Medical Organizations</h1>
          <div className='flex gap-9 w-full sm:w-2/3 justify-center sm:justify-end'>
            <Marquee speed={100}
            // pauseOnHover={true}
            className='w-full'>
              <img src="/svg/logo1.svg" alt="" className='h-[3vh] sm:h-[3vw] mx-8' />
              <img src="/svg/logo2.svg" alt="" className='h-[3vh] sm:h-[3vw] mx-8' />
              <img src="/svg/logo1.svg" alt="" className='h-[3vh] sm:h-[3vw] mx-8' />
              <img src="/svg/logo2.svg" alt="" className='h-[3vh] sm:h-[3vw] mx-8' />
            </Marquee>

          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section ref={section4Ref} className='w-full flex flex-col items-center justify-center'>
        <ServiceCards />
        <Button link='/service' text='View All Services' />
      </section>

      {/* Section 5 */}
      <Work />

      {/* Section 6 */}
      <Team />
    </>
  );
}

export default Home;
