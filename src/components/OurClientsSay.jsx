import React, { useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper';
import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const testimonials=[
    {
        'content':"They created a positive and inclusive learning environment where students feel encouraged to ask questions, make mistakes, and learn from them. Their respectful and friendly behaviour fosters a sense of camaraderie among students and parents alike. I have witnessed remarkable progress in my son's chess skills since he joined Braud Gauge. The regular feedback sessions with instructors have been invaluable in tracking his improvement and setting goals for further development.",
        'customer':"Alison Toby, U.S.A."
    },
    {
        'content':"Their commitment to quality training, exceptional faculty, and respectful behavior make them a standout institution in the world of chess education. My son's experience here has been enriching, and I am confident that Braud Gauge will continue to make a positive impact.",
        'customer':"Annie Wilson, U.S.A"
    },
    {
        'content':"Their commitment to quality training, exceptional faculty, and respectful behavior make them a standout institution in the world of chess education. My son's experience here has been enriching, and I am confident that Braud Gauge will continue to make a positive impact.",
        'customer':'Monika Arora,  U.K.'
    }
]

const OurClientsSay = () => {
    const [content,setContent]=useState(0); 
    const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  const decrease = () => {
    setDirection(-1); // Move left
    setContent(content === 0 ? testimonials.length - 1 : content - 1);
  };

  const increase = () => {
    setDirection(1); // Move right
    setContent(content === testimonials.length - 1 ? 0 : content + 1);
  };


  return (
    <div className='w-full h-[80vh] bg-[var(--primary-color)]'>
      <MaxWidthWrapper className='h-full flex justify-center items-center'>
      <ChevronLeft onClick={decrease} />
        <motion.div
          key={content}
          initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }} // Animation based on direction
          animate={{ opacity: 1, x: 0 }} // Move into center
          exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }} // Move out based on direction
          transition={{ duration: 0.5 }} // Smooth transition
          className='w-5/6 h-5/6 flex flex-col justify-center items-center bg-white rounded-2xl'
        >
          <motion.div
            className='w-5/6 h-3/5 text-center font-MerriWeatherLightItalic flex justify-center items-center text-[3vw] sm:text-[1.5vw]'
          >
            {testimonials[content].content}
          </motion.div>
          <motion.div className='font-MerriWeatherBold'>
            {testimonials[content].customer}
          </motion.div>
        </motion.div>
        <ChevronRight onClick={increase} />
      </MaxWidthWrapper>
    </div>
  )
}

export default OurClientsSay
