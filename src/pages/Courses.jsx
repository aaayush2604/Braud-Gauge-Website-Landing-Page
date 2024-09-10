import React from 'react'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import CourseWindow from '../components/CourseWindow'
import CourseList from '../components/CourseList'
import CourseDetails from '../components/CourseDetails'

const Courses = () => {
  return (
    <div className='w-full'>
        <CourseWindow/>
        <CourseList/>
    </div>
  )
}

export default Courses
