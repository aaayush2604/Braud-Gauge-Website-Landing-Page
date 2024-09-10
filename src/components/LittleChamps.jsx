import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

const champs=[
  {
    Name:'Shivaan Sinha',
    age:'5 Years',
    country:'USA',
    content:'Runner Up, {Under 7} New Jersey Elementary High School Chess Championship 2024 '
  },
  {
    Name:'Rudhvi Gondhi',
    age:'7 Years',
    country:'Canada'
  },
  {
    Name:'Aarush Ram',
    age:'6 Years',
    country:'UK',
    content:'Won 5/5 games and won the Wales Chess Championship 2024, Under-8 Category'
  }
]

const Card=({i})=>{
  return(
    <div className='w-64 h-64 sm:h-5/6 flex flex-col rounded-xl bg-white font-MerriWeatherLight'>
      <div className='w-full h-[60%]'>
        <img src={`littleChamps/c${i+1}.png`} alt="" className='h-full w-full rounded-t-xl'/>
      </div>
      <div className='h-1/2 flex flex-col justify-between w-full pl-2 pt-5 p-2'>
        <div className='w-full'>

        <p className='text-black font-MerriWeatherBold text-sm'>{champs[i].country}, {champs[i].age}</p>
        <p className='text-[var(--primary-color)] font-MerriWeatherBold'>{champs[i].Name}</p>
       
        </div>
        <p className='text-sm hidden sm:block'>{champs[i].content}</p>
      </div>
    </div>
  )
}


const LittleChamps = () => {
    return (
      <div className='w-full sm:h-[80vh] bg-[var(--fourth-color)]'>
        <MaxWidthWrapper className='flex flex-col justify-between h-full items-center w-3/5'>
          <div className='w-[90%] text-sm sm:text-xl font-MerriWeatherBold text-left h-16 sm:h-1/6 flex flex-col justify-end text-[var(--primary-color)]'> Our Little Champs </div>
          <div className='h-[150vh] sm:h-5/6 w-full flex flex-col sm:flex-row justify-around items-center'>
            <Card className='rounded-xl2' i={0}/>
            <Card className='rounded-xl' i={1}/>
            <Card className='rounded-xl' i={2}/>
          </div>
        </MaxWidthWrapper>
      </div>
    );
  };

export default LittleChamps

