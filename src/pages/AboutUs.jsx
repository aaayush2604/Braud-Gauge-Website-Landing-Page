import React,{useState} from 'react'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import { BookCopy, ArrowDownUp, PiggyBank,FileVideo, Library } from 'lucide-react';


const AboutUs = () => {

  const [readMore, setReadMore]=useState(false);

  return (
    <div className='w-full h-[300vh] sm:h-[270vh]'>
    <div className='w-full h-[80vh] bg-[var(--primary-color)]'>
      <MaxWidthWrapper className='h-full w-full flex'>
        <div className='h-full w-full sm:w-1/2'>
          <div className='h-1/5 font-MerriWeatherBold text-4xl flex justify-center items-end text-white'>About Us</div>
          {!readMore? <div className=' h-1/2 sm:h-4/5 flex flex-col justify-center font-MerriWeatherLight items-center text-center text-white text-xs sm:text-md'>
            <p>Braud Gauge is a pioneering online learning platform dedicated to empowering kids to reach their full potential. Our mission is to provide accessible, engaging, and affordable education that sparks curiosity, fosters critical thinking, and prepares young learners for a bright future</p>
            <p className='underline' onClick={()=>setReadMore(true)}>Read More</p>
            <img src="/chess2.svg" alt="" className='absolute top-96 w-4/5 sm:hidden' />
            
          </div>
          :
          <div className='h-4/5 flex flex-col justify-around font-MerriWeatherLight text-sm text-white'>
            <p>Braud Gauge is a pioneering online learning platform dedicated to empowering kids to reach their full potential. Our mission is to provide accessible, engaging, and affordable education that sparks curiosity, fosters critical thinking, and prepares young learners for a bright future</p>
            <p>At Braud Gauge, we believe that every child deserves the opportunity to learn and grow at their own pace. Our carefully curated courses are designed to cater to a wide range of interests and abilities, ensuring that there's something for everyone.</p>
            <p>Our team of experienced educators and subject matter experts are passionate about inspiring young minds. They create interactive lessons, engaging activities, and personalized support to make learning a fun and rewarding experience. With Braud Gauge, kids can explore new subjects, develop essential skills, and build confidence in a safe and supportive online environment.</p>
            <p className='underline' onClick={()=>setReadMore(false)}>Read Less</p>
          </div>}
          
        </div>
        <div className='h-full sm:flex flex-col relative justify-center items-center w-1/2 hidden '>
          <div className='h-[90%] flex flex-col relative justify-end bg-blue-600 w-[230px] rounded-tr-[70px] rounded-bl-[70px]'>
            <img src="aboutus.png" alt="" className='relative h-[90%] rounded-bl-[70px] z-[200]'/>
          </div>
          <div className='absolute illustration h-3/5 w-full'>
          <img src='/wQueen.png' className='hidden sm:block relative top-[-90px] left-[180px]  z-50'></img>
          <img src="/bKing.png" className='hidden sm:block relative top-[-600px] left-[150px] h-[80vh] z-40' alt="" />
          <img src="/wKing.png" className='hidden sm:block relative top-[-1050px] left-[-170px] h-[80vh] z-40' alt="" />
          </div>
        </div>
      </MaxWidthWrapper>
      </div>
      <div className='h-[180vh] mt-9 sm:h-[140vh] w-full'>
        <MaxWidthWrapper className='h-full w-full flex flex-col justify-center items-center'>
            <div className='w-5/6 sm:h-1/5 font-MerriWeatherBold flex flex-col justify-center'>
              <div className='text-xs sm:text-md text-[var(--primary-color)] my-3'>Are you Wondering...</div>
              <div className='text-2xl sm:text-5xl my-2'>Why to Choose Us?</div>
            </div>
            <div className='w-full flex flex-col h-[400vh] justify-between sm:h-4/5 sm:grid sm:grid-cols-3 px-[10%] sm:grid-rows-2 sm:gap-14 '>
              <div className='flex flex-col justify-around items-center sm:h-full'>
                <BookCopy className='w-10 h-10 text-blue-600'/>
                <div className='font-MerriWeatherBold text-md sm:text-xl w-2/5 sm:w-1/2 text-center'>Quality Education</div>
                <div className='w-full text-sm sm:text-md text-center my-3'>Our courses are designed by experienced educators to deliver high-quality learning experiences.
                </div>
              </div>
              <div className='flex flex-col justify-around items-center sm:h-full'>
                <ArrowDownUp className='w-10 h-10 text-green-600'/>
                <div className='font-MerriWeatherBold text-md sm:text-xl w-2/5 sm:w-1/2 text-center'>Flexibility and Convenience</div>
                <div className='w-full text-sm sm:text-md text-center my-3'>Learn from anywhere, anytime with our flexible online platform.
                </div>
              </div>
              <div className='flex flex-col justify-around items-center sm:h-full'>
                <PiggyBank className='w-10 h-10 text-yellow-300' />
                <div className='font-MerriWeatherBold text-md sm:text-xl w-2/5 sm:w-1/2 text-center'>Affordable Pricing</div>
                <div className='w-full text-sm sm:text-md text-center my-3'>Access quality education at affordable rates.
                </div>
              </div>
              <div className='flex flex-col justify-around items-center sm:h-full'>
                <FileVideo className='w-10 h-10 text-red-600'/>
                <div className='font-MerriWeatherBold text-md sm:text-xl w-2/5 sm:w-1/2 text-center'>Engaging Content</div>
                <div className='w-full text-sm sm:text-md text-center my-3'>Our courses are designed to be interactive and engaging, keeping kids motivated to learn.
                </div>
              </div>
              <div className='flex flex-col justify-around items-center sm:h-full'>
                <Library className='w-10 h-10 text-purple-600'/>
                <div className='font-MerriWeatherBold text-md sm:text-xl w-2/5 sm:w-1/2 text-center'>Vast Course Library</div>
                <div className='w-full text-sm sm:text-md text-center my-3'>With a mission to launch over 200+ courses, Braud Gauge offers a comprehensive learning platform where kids can explore their passions and discover their talents.
                </div>
              </div>
            </div>
        </MaxWidthWrapper>
      </div>
      <div className='w-full h-[30vh]'>
        <MaxWidthWrapper className='w-full h-full flex flex-col justify-center items-center'>
            <div className='font-MerriWeatherLight text-sm sm:text-md text-black font-bold sm:mt-5'>Join Us</div>
            <div className='font-MerriWeatherBold w-3/4 sm:w-1/4 h-2/5 bg-[var(--primary-color)] text-white rounded-[40px] flex flex-col justify-center items-center text-lg sm:text-2xl my-2'>Let's get Started</div>
            <div className='font-MerriWeatherLight text-sm mt-2'>Begin you journey to Success</div>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}

export default AboutUs
