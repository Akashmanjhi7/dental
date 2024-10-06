import { motion } from 'framer-motion'
import React, { useState } from 'react'
import CarouselComponent from './CarouselComponent'

const ServiceCards = () => {
    const [services] = useState([
        {
            "title": "Lorem ipsum",
            "image": "https://plus.unsplash.com/premium_photo-1663089993922-5d4601e1127b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "sectionSummary": "Regular dental checkups are vital to maintain good oral hygiene and detect issues early."
        },
        {
            "title": "Lorem ipsum",
            "image": "https://plus.unsplash.com/premium_photo-1663089993922-5d4601e1127b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "sectionSummary": "Professional teeth cleaning removes plaque and tartar buildup, promoting healthier gums and teeth."
        },
        {
            "title": "Lorem ipsum",
            "image": "https://plus.unsplash.com/premium_photo-1663089993922-5d4601e1127b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "sectionSummary": "Orthodontic treatments like braces help align teeth for a beautiful smile and improved oral function."
        },
        {
            "title": "Lorem ipsum",
            "image": "https://plus.unsplash.com/premium_photo-1663089993922-5d4601e1127b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "sectionSummary": "Root canal therapy saves severely damaged teeth by removing infected pulp and sealing the tooth."
        },
        {
            "title": "Lorem ipsum",
            "image": "https://plus.unsplash.com/premium_photo-1663089993922-5d4601e1127b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "sectionSummary": "Dental implants provide a permanent solution for missing teeth, restoring both function and aesthetics."
        },
        {
            "title": "Lorem ipsum",
            "image": "https://plus.unsplash.com/premium_photo-1663089993922-5d4601e1127b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "sectionSummary": "Professional teeth whitening treatments can dramatically brighten your smile, boosting confidence."
        },
        {
            "title": "Lorem ipsum",
            "image": "https://plus.unsplash.com/premium_photo-1663089993922-5d4601e1127b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "sectionSummary": "Restorative dentistry repairs damaged teeth and replaces missing ones, restoring oral health and function."
        },
        {
            "title": "Lorem ipsum",
            "image": "https://plus.unsplash.com/premium_photo-1663089993922-5d4601e1127b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "sectionSummary": "Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile."
        }
    ])

    return (
        <>
            <section className="max-w-screen-lg mx-auto mt-8 sm:mt-16 mb-4 px-4 sm:px-0 overflow-hidden">
                <div className="flex flex-col leading-tight tracking-tight text-center w-full">
                    <h1 className="text-[7vw] sm:text-[3vw] font-bold overflow-hidden">
                        <motion.span
                            initial={{ y: "40%", opacity: 0, rotate: "40deg" }}
                            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-block origin-left"
                        > Lorem ipsum dolor sit amet consectetur</motion.span>
                    </h1>
                    <h1 className="text-[7vw] sm:text-[3vw] font-bold overflow-hidden">
                        <motion.span
                            initial={{ y: "40%", opacity: 0, rotate: "40deg" }}
                            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-block origin-left"
                        >Lorem, ipsum dolor.</motion.span>
                    </h1>

                    <p className="w-full mx-auto text-center mt-4 text-sm sm:text-base sm:w-2/3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                        officiis vitae dignissimos repudiandae quod necessitatibus quae.
                        Quae animi nulla rerum iste doloribus!
                    </p>
                </div>
            </section>
            <div className='w-full sm:max-w-screen-lg mx-auto p-4 rounded-lg '>

                <CarouselComponent services={services} />
            </div>
        </>
    )
}

export default ServiceCards
