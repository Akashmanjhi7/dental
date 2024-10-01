import React, { useState } from "react";
import ContactSection from "./utils/ContactSection";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(false); // Reset success state
    setErrorMessage(""); // Clear previous errors

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          access_key: '8ab15586-4f7c-4903-9608-98ec569db172', 
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      const data = await response.json();
      if (data.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form after successful submission
        alert("Form Submitted Successfully")
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.")
      setErrorMessage("Failed to send the message. Please try again later.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="bg-zinc-100 py-10 sm:py-20 px-4 sm:px-20">
        <div className="max-w-screen-lg mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8">
          <div className="w-full lg:w-1/2 flex flex-col justify-center leading-tight tracking-tight">
            <h4 className="text-bgblue mb-3 sm:mb-5 font-bold text-[4vw] sm:text-[2vw]">Contact</h4>
            <h1 className="text-3xl sm:text-4xl lg:text-[3vw] font-bold">Get in touch</h1>

            <p className="text-zinc-600 w-full lg:w-4/5 leading-normal mt-4 sm:mt-5 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum autem alias dignissimos asperiores fugiat debitis rerum quasi nam quia odio eligendi.
            </p>

            {/* Form */}
            <div className="w-full max-w-md mt-6 sm:mt-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-500 focus:outline-none focus:ring focus:ring-blue-500 rounded"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-500 focus:outline-none focus:ring focus:ring-blue-500 rounded"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="10"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-500 focus:outline-none focus:ring focus:ring-blue-500 resize-none rounded"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button className="bg-bgblue z-30 text-white px-6 py-2 rounded-md hover:bg-transparent hover:text-bgblue hover:border-bgblue border border-transparent transition duration-300 ease-in-out">
                  Submit
                </button>
              </form>

              {/* Success and Error Messages */}
              {submitSuccess && (
                <p className="mt-4 text-green-600">Thank you for your message. We'll get back to you soon!</p>
              )}
              {errorMessage && (
                <p className="mt-4 text-red-600">{errorMessage}</p>
              )}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full sm:w-1/2 h-full mt-8 lg:mt-0">
            <div className="relative z-10 w-full h-64 sm:h-80 lg:h-full">
              <img
                src="/images/dentist.jpg"
                alt="dentist image"
                className="w-full h-full object-cover sm:object-center object-top rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative mt-20 sm:mt-72">
        <ContactSection />
      </div>
    </>
  );
};

export default Contact;
