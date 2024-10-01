
import React from 'react'
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Button from './Button';
import WhiteButton from './WhiteButton';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white w-full mt-72 relative ">
    {/* Banner Section */}
    
    <div className='absolute left-1/2 transform -translate-x-1/2 top-[-30%] w-full max-w-screen-lg'>
      <div className="bg-blue-600 py-16 px-4 text-center rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
          Don't Let Dental Problems Wait! <br /> Take Action Now
        </h2>
        <WhiteButton
        link="/book-appointment"
        text="Book Appointment"
      />
      </div>
    </div>

    {/* Footer Section */}
    <footer className="bg-gray-900 py-8 px-4 sm:pt-48 pt-20">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between gap-8 ">
        {/* Address Section */}
        <div className="md:w-1/3 ">
          <h3 className="font-bold text-lg mb-2">Address:</h3>
          <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
          <h3 className="font-bold text-lg mt-4 mb-2">Contact:</h3>
          <p>1800 123 4567</p>
          <p>info@test.com</p>
        </div>

        {/* Quick Links and Services */}
        <div className="md:w-1/3 flex flex-col sm:flex-row gap-8 ">
          {/* Quick Links */}
          <div className="sm:w-1/2 ">
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul>
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/service" className="hover:underline">Services</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/careers" className="hover:underline">Career</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="sm:w-1/2 ">
            <h3 className="font-bold text-lg mb-2">Services</h3>
            <ul>
              <li><Link to="/service-seven" className="hover:underline">Link Seven</Link></li>
              <li><Link to="/service-eight" className="hover:underline">Link Eight</Link></li>
              <li><Link to="/service-nine" className="hover:underline">Link Nine</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm border-t border-gray-700 pt-6 max-w-screen-lg mx-auto pb-6">
        <p>© 2023 ZipWP. All rights reserved.</p>

        <p>Desigend and Developed by <Link  to="https://www.instagram.com/greatertechhub/" target="_blank" className="text-blue-500 hover:text-blue-300">GreaterTechHub</Link></p>
        <div className="flex gap-4 mt-4 md:mt-0 sm:text-[1.2vw] text-[2vh] ">
          <Link to="#" target='_blank'><FaFacebook/></Link>
          <Link to="#" target='_blank'><AiFillInstagram/></Link>
          <Link to="#" target='_blank'><FaXTwitter /></Link>
          <Link to="#" target='_blank'><FaLinkedin /></Link>
          <Link to="#" target='_blank'><FaYoutube /></Link>
        </div>
      </div>
    </footer>
  </div>

  )
}

export default Footer
