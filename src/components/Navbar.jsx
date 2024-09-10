import MaxWidthWrapper from './MaxWidthWrapper';
import { Link } from 'react-router-dom';


export const Navbar=()=>{
    return <nav className="sticky z-[200] h-16 inset-x-0 top-0 w-full border-b border-great-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthWrapper className='px-2 md:px-10 w-full'>
            <div className="flex h-14 items-center justify-between w-full">
                <Link href='/' className="flex z-40 font-semibold text-2xl items-end text-end w-2/5 justify-start">
                    <img src="BrandLogo.png" alt="" className='object-cover w-12 sm:w-18'/>
                    <div className='w-auto text-sm sm:flex flex-col justify-between ml-3 hidden'>
                        <p className='text-xl text-left'>BRAUD GAUGE</p>
                        <p className='text-left'>A LEARNING FOUNDATION</p>
                    </div>
                </Link>
                <div className="h-full flex items-center space-x-2 sm:space-x-6 text-sm sm:text-lg w-3/5 justify-end">
                    <Link to='/'>Home</Link>
                    <Link to='/aboutus'>About Us</Link>
                    <Link to='/courses'>Courses</Link>
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
}