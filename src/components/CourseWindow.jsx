import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

const CourseWindow = () => {
  return (
    <div className='w-full h-[80vh] relative'>
        <div className='hidden sm:block absolute bg-[var(--secondary-color)] w-2/5 h-full right-0 rounded-bl-[50px] backgroundItem'></div>
        <div className='sm:block absolute bg-[var(--secondary-color)] w-[6%] h-1/5 top-0 left-0 rounded-br-[40px] min-w-[80px] backgroundItem'></div>
        <div className='sm:hidden absolute bg-[var(--secondary-color)] w-4/5 h-4/5 -bottom-14 right-0 rounded-tl-[50px] rounded-bl-[50px] backgroundItem'></div>
        <MaxWidthWrapper className='h-full w-full'>
        <div className='relative w-full h-2/5 sm:h-full sm:w-1/2 stackItem flex flex-col justify-center items-end sm:mr-[20px]'>
        <p className='w-full text-right my-[2px] sm:text-2xl font-MerriWeatherBold text-[var(--primary-color)] '>Checkout...</p>
          <p className='w-4/5 sm:w-full sm:h-1/5 text-right my-[2px] text-3xl sm:text-5xl font-MerriWeatherBold sm:mb-[40px] sm:leading-tight'>Our <span className='text-[var(--primary-color)]'>Courses</span></p>
          <p className='w-full text-right text-xs my-[2px] sm:text-2xl font-MerriWeatherLightItalic '> and all the other Services that we offer</p>
        </div>
        </MaxWidthWrapper>
    </div>
  )
}

export default CourseWindow
