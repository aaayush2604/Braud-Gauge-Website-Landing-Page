import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

const HeroSection = () => {
  return (
    <div className=' w-full h-[75vh] relative'>
      <div className='hidden sm:block absolute bg-[var(--secondary-color)] w-2/5 h-full right-0 rounded-bl-[50px] backgroundItem'></div>
      <div className='sm:block absolute bg-[var(--secondary-color)] w-[6%] h-1/5 top-0 left-0 rounded-br-[40px] min-w-[80px] backgroundItem'></div>
      <div className='sm:hidden absolute bg-[var(--secondary-color)] w-4/5 h-4/5 -bottom-14 right-0 rounded-tl-[50px] rounded-bl-[50px] backgroundItem'></div>
      <div className='absolute illustration h-3/5'>
        <img src='/wQueen.png' className='hidden sm:block relative top-[40px] right-[200px]  z-40'></img>
        <img src="/bKing.png" className='hidden sm:block relative top-[-420px] right-[140px] h-[80vh] z-50' alt="" />
        <img src="/chess2.svg" alt="" className='sm:hidden text-white w-4/5 relative top-[160px] left-[60px]' />
      </div>

      <div className='sm:hidden absolute bg-[var(--secondary-color)]/75 w-1/2'></div>
      <MaxWidthWrapper className='relative flex flex-col sm:flex-row  justify-between'>
        <div className='relative w-full h-2/5 sm:h-full sm:w-1/2 stackItem flex flex-col justify-center items-end sm:mr-[20px]'>
          <p className='w-4/5 sm:w-full sm:h-1/5 text-right my-[2px] text-3xl sm:text-5xl font-MerriWeatherBold sm:mb-[40px] sm:leading-tight'>Empowering <span className='text-[var(--primary-color)]'>Kids</span></p>
          <p className='w-full text-right my-[2px] sm:text-2xl font-MerriWeatherLightItalic '> Through Online Learning </p>
        </div>
        <img src="/heroSection.jpg" alt="" className='relative stackItem w-full h-2/5 sm:h-full sm:w-3/5' />
      </MaxWidthWrapper>
    </div>
  )
}

export default HeroSection
