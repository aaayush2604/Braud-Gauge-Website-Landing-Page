import React from 'react'
import Courses from '../components/Courses'
import { X } from 'lucide-react';
import { li } from 'framer-motion/client';

const CourseDetails = ({i,setCourseDetail}) => {
  return (
        <div className='absolute w-full h-full bg-black/50 z-[100]'>
  <div className='absolute w-[80vw] h-[80vh] overflow-auto bg-white left-28 top-16 p-8 border-4 border-[var(--primary-color)]'>
    <X onClick={() => setCourseDetail(-1)} className='absolute top-0 right-0 cursor-pointer' />
    <div className='mt-7 font-MerriWeatherBold text-2xl my-5'>{Courses[i]?.Title}</div>

    <div className='font-MerriWeatherLightItalic'>Course Curriculum</div>
    <ul className='mt-7 font-MerriWeatherLight text-md my-5'>
      {Courses[i]?.Curriculum?.map((para, index) => {
        if (Array.isArray(para)) {
          return (
            <div key={`curriculum-group-${index}`}>
              {para.map((p, subIndex) => (
                <li className='list-disc list-inside' key={`curriculum-${index}-${subIndex}`}>{p}</li>
              ))}
            </div>
          );
        } else {
          return (
            <li className='list-disc list-inside' key={`curriculum-${index}`}>
              {para}
            </li>
          );
        }
      })}
    </ul>

    <div className='font-MerriWeatherLightItalic'>Course is Ideal For</div>
    <ul className='mt-7 font-MerriWeatherLight text-md my-5'>
      {Courses[i]?.IdealFor?.map((p, index) => (
        <li key={`ideal-for-${index}`} className='list-disc list-inside'>{p}</li>
      ))}
    </ul>

    <div className='font-MerriWeatherLightItalic'>Course Outcomes</div>
    <ul className='mt-7 font-MerriWeatherLight text-md my-5'>
      {Courses[i]?.CourseOutcomes?.map((p, index) => (
        <li key={`course-outcome-${index}`} className='list-disc list-inside'>{p}</li>
      ))}
    </ul>

    <div className='font-MerriWeatherLightItalic'>Braud Gauge Advantage</div>
    <ul className='mt-7 font-MerriWeatherLight text-md my-5'>
      {Courses[i]?.bga?.map((p, index) => (
        <li key={`bga-${index}`} className='list-disc list-inside'>{p}</li>
      ))}
    </ul>
  </div>
</div>

  )
}

export default CourseDetails
