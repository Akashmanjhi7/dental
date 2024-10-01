import React, { useState } from 'react';


const JoinUs = () => {
  const [result, setResult] = useState(''); // State to store form submission result

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    setResult('Sending...');

    const formData = new FormData(e.target);
  
    formData.append('access_key', '8ab15586-4f7c-4903-9608-98ec569db172'); 

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json' 
        }
      });

      const data = await response.json();
      console.log('Response:', data);

      if (data.success) {
        setResult('Form Submitted Successfully');
        e.target.reset(); // Reset form on success
        alert("Form Submitted Successfully")
      } else {
        console.error('Form submission failed', data);
        setResult(data.message || 'Error submitting form');
      }
    } catch (error) {
      alert("An error occurred. Please try again.")
      setResult('Error submitting form');
    }
  };

  return (
    <>
      {/* Banner Section */}
      <div className='bg-bgblue h-[40vh] max-w-screen mx-auto sm:mt-16 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("https://images.unsplash.com/photo-1670250721717-889b17349fc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVldGh8ZW58MHx8MHx8fDA%3D")] bg-no-repeat bg-cover bg-center'>
        <div className="flex flex-col leading-tight tracking-tight text-center text-white">
          <h1 className="sm:text-[3vw] text-[5vh] font-bold overflow-hidden pt-10">Join Us</h1>
          <p className="sm:w-2/3 p-4 text-[2vh] sm:text-[1.2vw] mx-auto text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            officiis vitae dignissimos repudiandae quod necessitatibus quae.
            Quae animi nulla rerum iste doloribus!
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto bg-slate-50">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 lg:w-2/5 bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-bgblue">Your Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>

              <div className="mb-4">
                <label htmlFor="jobTitle" className="block text-gray-700 font-bold mb-2">Job title</label>
                <select id="jobTitle" name="jobTitle" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                  <option value="">Select a title</option>
                  <option value="qualityCheck">Quality Check</option>
                  <option value="designer">Designer</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="experience" className="block text-gray-700 font-bold mb-2">Experience</label>
                <select id="experience" name="experience" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                  <option value="">Select experience</option>
                  <option value="lessThan1Year">Less than 1 year</option>
                  <option value="1-2Years">1-2 Years</option>
                  <option value="2-4Years">2-4 Years</option>
                  <option value="5PlusYears">5+ Years</option>
                </select>
              </div>

              <div className="text-center pt-10">
                <button type="submit" text="Apply Now" className={`bg-bgblue text-textwhite  border px-4 py-2 rounded-md
    hover:bg-white hover:text-bgblue hover:border duration-150 border-bgblue z-50` }
    value="Submit"
    >
      Submit
    </button>
              </div>
            </form>
            
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 md:ml-8 mt-8 md:mt-0 sm:p-20 p-6">
            <img src="/images/dentist.jpg" alt="Dentist Appointment" className="rounded-lg shadow-md w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
