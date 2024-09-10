import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Link } from 'react-router-dom'
import { Phone,Mail } from 'lucide-react'

const Footer = () => {
  return (
    <div className='w-full h-[40vh] sm:h-[20vh]'>
      <MaxWidthWrapper>
      <div className="border-t border-gray-200"></div>
            <div className="h-full flex flex-col md:flex-row md:justify-between justify-around items-center">
                <div className="text-center md:text-left pb-2 md:pb-0">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} All rights reserved
                </p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex space-x-8">
                        <Link href='#' className="text-sm text-muted-foreground hover:text-gray-400">Terms</Link>
                        <Link href='#' className="text-sm text-muted-foreground hover:text-gray-400">Privacy Policy</Link>
                        <Link href='#' className="text-sm text-muted-foreground hover:text-gray-400">Cookie Policy</Link>
                    </div>
                </div>
                <div className='text-sm flex flex-col sm:flex-row w-full sm:w-auto justify-center items-center'><Phone className='mr-2'/>+91 9752238638</div>
                <div className='text-sm flex flex-col sm:flex-row w-full sm:w-auto justify-center items-center'><Mail className='mr-3'/>Support@BraudGauge.com</div>
                <div></div>
            </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Footer
