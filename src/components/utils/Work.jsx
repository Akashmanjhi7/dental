import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { TbDental , TbDentalBroken, TbDentalOff } from 'react-icons/tb';
import { FaTooth } from "react-icons/fa6"; // Import necessary icons
import { RiEBike2Fill } from "react-icons/ri";
const Work = () => {
  const [work, setWork] = useState([
    {
      id: 1,
      icon: 'TbDental', // Icon name as string
      title: 'Lorem ipsum dolor sit amet',
      description:
        'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      icon: 'FaTooth', // Icon name as string
      title: 'Ut enim ad minim veniam',
      description:
        'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      icon: 'TbDentalBroken', // Icon name as string
      title: 'Duis aute irure dolor',
      description:
        'In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 4,
      icon: 'TbDentalOff', // Icon name as string
      title: 'Excepteur sint occaecat',
      description:
        'Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ]);

  // Create a mapping for icon components
  const iconMapping = {
    TbDental: TbDental,
    FaTooth: FaTooth,
    TbDentalBroken: TbDentalBroken,
    TbDentalOff: TbDentalOff,
  };

  return (
    <div className='w-full  bg-zinc-100 mt-20 mb-6'>
      <div className='max-w-screen-lg mx-auto'>
        <div className='heading text-center font-bold sm:text-[3vw] text-[2.5vh] sm:pt-20 pt-10 tracking-tight leading-tight'>
          <h1 className='overflow-hidden '>
            <motion.span
              initial={{ y: '40%', opacity: 0, rotate: '40deg' }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, }}
              className='inline-block origin-left'
            >
              Lorem ipsum dolor sit amet consectetur overflow
            </motion.span>
          </h1>
          <h1 className='overflow-hidden'>
            <motion.span
              initial={{ y: '40%', opacity: 0, rotate: '40deg' }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, }}
              className='inline-block origin-left'
            >
              Lorem ipsum dolor sit down
            </motion.span>
          </h1>

          <p className='text-zinc-500 text-[1.8vh] sm:text-[1.3vw]  mt-4 font-thin italic sm:w-2/3 p-4 sm:p-0 text-center mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            corporis cupiditate. Dolores reprehenderit magni molestias id
            praesentium facere architecto ratione.
          </p>
        </div>

        <div className='sm:mt-16 mt-8 w-full flex justify-center items-center flex-col gap-4 pb-8 overflow-hidden'>
          {work.map((item, index) => {
            const IconComponent = iconMapping[item.icon]; 

            return (
              <motion.div
                initial={{ opacity: 0, y: 100 ,rotate: -10 }}
                whileInView={{ opacity: 1, y: 0 ,rotate: 0}}
                viewport={{ once: true }}
                transition={{ duration: 1, }}
                key={item.id}
                className='group hover:bg-bgblue hover:text-white hover:border-bgblue border w-4/5 rounded-lg border-black flex py-6 duration-300 cursor-pointer'
              >
                <div className='image w-[20%] h-full flex items-start justify-center pt-2'>
                  <div className='sm:h-[6vw] sm:w-[6vw] bg-black group-hover:bg-textwhite rounded-full flex items-center justify-center duration-300 '>
                    {IconComponent && (
                      <RiEBike2Fill   size={40}
                      className='text-white group-hover:text-black duration-300' />
                      
                    )}
                  </div>
                </div>

                <div className='text w-[80%] h-full'>
                  <h1 className='sm:text-[2vw] text-[2vh] font-bold'>{item.title}</h1>
                  <p className='sm:text-[1.1vw] text-[1.1vh] mt-2'>{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
