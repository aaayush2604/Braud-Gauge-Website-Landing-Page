import React,{useState} from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import CourseDetails from './CourseDetails'

const courseList = () => {
    const [courseDetail, setCourseDetail]=useState(-1);


  return (
    <div className='relative w-full sm:h-[110vh] mt-20 bg-[var(--fourth-color)]'>
       {courseDetail!=-1 && <CourseDetails i={courseDetail} setCourseDetail={setCourseDetail}/>}
      <MaxWidthWrapper className='w-full h-full flex items-center sm:justify-between flex-col sm:flex-row'>
        <div className='my-12 w-5/6 sm:w-1/5 h-[90vh] sm:h-4/5 flex flex-col justify-between hover:scale-110 transition-transform duration-300 bg-white rounded-lg'>
            <div className='h-[35%] w-full bg-[var(--primary-color)] flex justify-center rounded-t-lg'>
                <img src="intermediate.png" className='bg-[var(--primary-color)] h-full rounded-lg' alt="" />
            </div>
            <div className='w-full h-[40%] flex flex-col items-center text-black custom-bullet'>
                <div className='font-MerriWeatherBold'>Chess for Intermediate</div>
            <ul className='list-disc list-inside pl-4'>
                <li>40 Training Sessions</li>
                <li>8 Test Sessions</li>
                <li>12 Weekly Practice Tournaments</li>
                <li>4 Master Sessions</li>
                <li>Detailed Study Material</li>
                <li>Weekly Performance Report</li>
            </ul>
            </div>
            <div className='h-[10%] w-full  flex justify-center items-center mb-4'>
                <div className='font-MerriWeatherBold bg-[var(--primary-color)] text-white w-4/5 h-5/6 flex flex-col  justify-center items-center rounded-[20px]' id={1} onClick={(e)=>setCourseDetail(e.target.id-1)}>Know More</div>
            </div>
        </div>
        <div className='my-12 w-5/6 sm:w-1/5 h-[90vh] sm:h-4/5 flex flex-col justify-between hover:scale-110 transition-transform duration-300 bg-white rounded-lg'>
            <div className='h-[35%] w-full bg-[var(--primary-color)] flex justify-center rounded-t-lg'>
                <img src="advanced.png" className='bg-[var(--primary-color)] h-4/ rounded-lg' alt="" />
            </div>
            <div className='w-full h-[40%] flex flex-col items-center text-black custom-bullet'>
            <div className='font-MerriWeatherBold'>Chess for Intermediate</div>
            <ul className='list-disc list-inside pl-4'>
                <li>40 Training Sessions</li>
                <li>8 Test Sessions</li>
                <li>24 Weekly Practice Tournaments</li>
                <li>6 Master Sessions</li>
                <li>Detailed Study Material</li>
                <li>Weekly Performance Report</li>
            </ul>
            </div>
            <div className='h-[10%] w-full  flex justify-center items-center mb-4'>
                <div className='font-MerriWeatherBold bg-[var(--primary-color)] text-white w-4/5 h-5/6 flex flex-col  justify-center items-center rounded-[20px]' id={2} onClick={(e)=>setCourseDetail(e.target.id-1)}>Know More</div>
            </div>
        </div>
        <div className='my-12 w-5/6 sm:w-1/5 h-[90vh] sm:h-4/5 flex flex-col justify-between hover:scale-110 transition-transform duration-300 bg-white rounded-lg'>
            <div className='h-[35%] w-full bg-[var(--primary-color)] flex justify-center rounded-t-lg'>
                <img src="gm.png" className='bg-[var(--primary-color)] h-4/5 rounded-lg' alt="" />
            </div>
            <div className='w-full h-[40%] flex flex-col items-center text-black custom-bullet'>
            <div className='font-MerriWeatherBold'>Chess for Advance</div>
            <ul className='list-disc list-inside pl-4'>
                <li>40 Training Sessions</li>
                <li>8 Test Sessions</li>
                <li>24 Weekly Practice Tournaments</li>
                <li>6 Master Sessions</li>
                <li>Detailed Study Material</li>
                <li>Weekly Performance Report</li>
            </ul>
            </div>
            <div className='h-[10%] w-full  flex justify-center items-center mb-4'>
                <div className='font-MerriWeatherBold bg-[var(--primary-color)] text-white w-4/5 h-5/6 flex flex-col  justify-center items-center rounded-[20px]' id={3} onClick={(e)=>setCourseDetail(e.target.id-1)}>Know More</div>
            </div>
        </div>
        <div className='my-12 w-5/6 sm:w-1/5 h-[90vh] sm:h-4/5 flex flex-col justify-between hover:scale-110 transition-transform duration-300 bg-white rounded-lg'>
            <div className='h-[35%] w-full bg-[var(--primary-color)] flex justify-center rounded-t-lg'>
                <img src="beginner.png" className='bg-[var(--primary-color)] h-4/5 rounded-lg' alt="" />
            </div>
            <div className='w-full h-[40%] flex flex-col items-center text-black custom-bullet'>
            <div className='font-MerriWeatherBold'>GrandMaster Sessions</div>
            <ul className='list-disc list-inside pl-4'>
                <li>40 Training Sessions</li>
                <li>8 Test Sessions</li>
                <li>24 Weekly Practice Tournaments</li>
                <li>6 Master Sessions</li>
                <li>Detailed Study Material</li>
                <li>Weekly Performance Report</li>
            </ul>
            </div>
            <div className='h-[10%] w-full  flex justify-center items-center mb-4'>
                <div className='font-MerriWeatherBold bg-[var(--primary-color)] text-white w-4/5 h-5/6 flex flex-col  justify-center items-center rounded-[20px]' id={4} onClick={(e)=>setCourseDetail(e.target.id-1)}>Know More</div>
            </div>
        </div>

      </MaxWidthWrapper>
    </div>
  )
}

export default courseList
