import React, { useState } from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import Button from './utils/Button';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const accessKey = '8ab15586-4f7c-4903-9608-98ec569db172';
  const apiEndpoint = 'https://api.web3forms.com/submit'; // Changed to the correct endpoint

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('Submitting...');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', accessKey);
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();
      if (result.success) {
        console.log('Form submitted successfully');
        setSubmitStatus('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: ''
        });
        alert("Form Submitted Successfully")
      } else {
        console.error('Form submission failed');
        setSubmitStatus('Form submission failed. Please try again.');
      }
    } catch (error) {
      alert("An error occurred. Please try again.")
      setSubmitStatus('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className='bg-bgblue h-[40vh] max-w-screen mx-auto sm:mt-16 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("https://images.unsplash.com/photo-1670250721717-889b17349fc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVldGh8ZW58MHx8MHx8fDA%3D")] bg-no-repeat bg-cover bg-center'>
        <div className="flex flex-col leading-tight tracking-tight text-center text-white">
          <h1 className="sm:text-[3vw] text-[5vh] font-bold overflow-hidden pt-10">Book your Appointment</h1>
          <p className="sm:w-2/3 p-4 text-[2vh] sm:text-[1.2vw] mx-auto text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis vitae dignissimos repudiandae quod necessitatibus quae. Quae animi nulla rerum iste doloribus!
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto bg-slate-50">
        <div className="flex flex-wrap justify-center items-center">
          {/* Form */}
          <div className="w-full md:w-1/2 lg:w-2/5 bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-bgblue">Book Your Appointment</h2>
            {submitStatus && <p className="mb-4 text-center font-bold">{submitStatus}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>

              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 font-bold mb-2">Service</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                  <option value="">Select a service</option>
                  <option value="consultation">Consultation</option>
                  <option value="cleaning">Dental Cleaning</option>
                  <option value="checkup">Check-up</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>

              <div className="mb-4">
                <label htmlFor="time" className="block text-gray-700 font-bold mb-2">Time</label>
                <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>

              <div className="text-center">
                <button type="submit" className={`bg-bgblue text-textwhite border px-4 py-2 rounded-md hover:bg-white hover:text-bgblue hover:border duration-150 border-bgblue`}>
                  Book Now
                </button>
              </div>
            </form>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 lg:w-2/5 md:ml-8 mt-8 md:mt-0 sm:p-20 p-6">
            <img src="/images/dentist.jpg" alt="Dentist Appointment" className="rounded-lg shadow-md w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
