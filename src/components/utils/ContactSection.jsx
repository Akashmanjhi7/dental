import { motion } from 'framer-motion';
import { useRef } from 'react';

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,

    },
  },
};

const itemVariants = {
  hidden: { x : '-100%', opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    
    transition: {
      duration: 0.6,

    
    }
  },
};

export default function ContactSection() {
  return (
    <div className="sm:absolute block w-full bg-transparent bottom-[-15%] px-4 sm:px-0 mt-4 sm:mt-0  ">
      <motion.div
        className="h-full max-w-screen-lg mx-auto flex flex-col sm:flex-row gap-4 sm:gap-1 overflow-hidden bg-transparent sm:bg-textwhite rounded-lg shadow-lg "
        variants={timelineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Email */}
        <motion.div
          variants={itemVariants}
          className="box border border-zinc-300 w-full sm:w-1/4 p-6 sm:p-8 flex flex-row sm:flex-col gap-4 sm:gap-3 items-center sm:items-start justify-start sm:justify-center bg-textwhite rounded-lg shadow-lg z-40"
        >
          <div className="bg-bgblue rounded-md inline-flex p-3">
            <img src="/svg/mail.svg" alt="mail" className="w-6 h-6 text-textwhite" />
          </div>
          <div>
            <h1 className="font-bold text-[1.9vh] sm:text-[1.6vw] leading-none mb-2">Email Address</h1>
            <p className="border-b text-base sm:text-[0.9vw] border-black">pdcjtrfeawo1s@outlook.com</p>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div
          variants={itemVariants}
          className="box border border-zinc-300 w-full sm:w-1/4 p-6 sm:p-8 flex flex-row sm:flex-col gap-4 sm:gap-3 items-center sm:items-start justify-start sm:justify-center bg-textwhite rounded-lg shadow-lg z-30"
        >
          <div className="bg-bgblue rounded-md inline-flex p-3">
            <img src="/svg/call.svg" alt="call" className="w-6 h-6 text-textwhite" />
          </div>
          <div>
            <h1 className="font-bold text-[1.9vh] sm:text-[1.6vw] leading-none mb-2">Phone Number</h1>
            <p className="border-b text-base sm:text-[0.9vw] border-black">+91 9876543210</p>
          </div>
        </motion.div>

        {/* Address */}
        <motion.div
          variants={itemVariants}
          className="box border border-zinc-300 w-full sm:w-1/4 p-6 sm:p-8 flex flex-row sm:flex-col gap-4 sm:gap-3 items-center sm:items-start justify-start sm:justify-center bg-textwhite rounded-lg shadow-lg z-20"
        >
          <div className="bg-bgblue rounded-md inline-flex p-3">
            <img src="/svg/l.svg" alt="location" className="w-6 h-6 text-textwhite" />
          </div>
          <div>
            <h1 className="font-bold text-[1.9vh] sm:text-[1.6vw] leading-none mb-2">Clinic Location</h1>
            <p className="border-b text-base sm:text-[0.9vw] border-black">Neelam Flyover Faridabad HR</p>
          </div>
        </motion.div>

        {/* Book Appointment */}
        <motion.div
          variants={itemVariants}
          className="box bg-bgblue w-full sm:w-1/4 p-6 sm:p-8 flex flex-row sm:flex-col gap-4 sm:gap-3 items-center sm:items-start justify-start sm:justify-center text-textwhite rounded-lg shadow-lg z-10"
        >
          <div className="bg-textwhite rounded-md inline-flex p-3">
            <img src="/svg/calender.svg" alt="calendar" className="w-6 h-6 text-textwhite" />
          </div>
          <div>
            <h1 className="font-bold text-[1.9vh] sm:text-[1.6vw] text-white leading-none mb-2">Book Appointment</h1>
            <a href="/book-appointment" className="border-b text-base sm:text-[0.9vw] border-white text-white ">
              Book an Appointment now
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
