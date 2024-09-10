import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Star,Earth,Library, BookOpenText,Minus } from 'lucide-react'

const KeyFeatures = () => {
  return (
    <div className='w-full h-[150vh] sm:h-[60vh]'>
      <MaxWidthWrapper className='flex flex-col justify-center items-center mt-[100px]'>
        <div className='w-[85%] text-left text-sm sm:text-xl font-MerriWeatherBold text-[var(--third-color)]'>What we Offer</div>
        <div className='w-full h-3/4 sm:h-1/2 flex flex-col sm:flex-row justify-around items-center'>
        <div className='w-1/6 h-3/5 flex flex-col justify-between items-center'>
            <div className='flex justify-center mt-[20px]'>
                <Star className="h-4 w-4 text-[var(--third-color)] fill-[var(--third-color)]"></Star>
                <Star className="h-4 w-4 text-[var(--third-color)] fill-[var(--third-color)]"></Star>
                <Star className="h-4 w-4 text-[var(--third-color)] fill-[var(--third-color)]"></Star>
                <Star className="h-4 w-4 text-[var(--third-color)] fill-[var(--third-color)]"></Star>
                <Star className="h-4 w-4 text-[var(--third-color)] fill-[var(--third-color)]"></Star>
            </div>
            <Minus className='text-[var(--third-color)]'></Minus>
            <div>
                <p className='w-full text-center'>Trusted by</p>
                <p className='w-full text-center'>2000+ Parents </p>
            </div>
        </div>
        <div className='w-1/6 h-3/5 flex flex-col justify-between items-center'>
            <div className='flex justify-center w-full h-2/5'>
                <Library className='text-[var(--third-color)] h-full w-3/5'></Library>
            </div>
            <Minus className='text-[var(--third-color)]'></Minus>
            <div>
                <p className='w-full text-center'>Comprehensive</p>
                <p className='w-full text-center'>Syllabus</p>
            </div>
        </div>
        <div className='w-1/6 h-3/5 flex flex-col justify-between items-center'>
            <div className='flex justify-center w-full h-2/5'>
                <BookOpenText className='text-[var(--third-color)] h-full w-3/5'></BookOpenText>
            </div>
            <Minus className='text-[var(--third-color)]'></Minus>
            <div>
                <p className='w-full text-center'>Personalized</p>
                <p className='w-full text-center'>Learning</p>
            </div>
        </div>
        <div className='w-1/6 h-3/5 flex flex-col justify-between items-center'>
            <div className='flex justify-center w-full h-2/5'>
                <img src='/training.png' className='text-[var(--primary-color)] h-[110%] w-2/5'></img>
            </div>
            <Minus className='text-[var(--third-color)]'></Minus>
            <div>
                <p className='w-full text-center'>Ceritfied</p>
                <p className='w-full text-center'>Instructors</p>    
            </div>
        </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default KeyFeatures
