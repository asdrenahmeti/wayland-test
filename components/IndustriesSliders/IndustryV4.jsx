import Image from 'next/image'
import React from 'react'
import Industries from '../../public/assets/images/industries.png'
import SwipeNext from '../SwiperButtons/SwipeNext'
import SwipePrev from '../SwiperButtons/SwipePrev'


function IndustryV4({industry}) {
  return (
    <div className="flex flex-col justify-center lg:justify-between items-center h-screen sm:flex-row lg:flex-row">
      <div className="lg:flex">
        <div className="hidden lg:flex lg:flex-col">
          <SwipePrev></SwipePrev>
          <SwipeNext></SwipeNext>
        </div>
        <div className="flex mb-8 items-center gap-2 lg:mb-0 lg:flex sm:-rotate-90">
          <div className="w-[40px] h-[2px] bg-w-red bg-primary"></div>
          <p className="text-w-gray text-2xl uppercase lg:text-base">
            {industry}
          </p>
        </div>
      </div>

      <div className="hidden lg:block">
        <Image src={Industries} alt="Industry image"></Image>
      </div>

      <div className="flex flex-col sm:flex-wrap lg:flex-row-reverse lg:gap-10 lg:ml-8">
        <div className="flex flex-col w-full lg:w-[300px] sm:w-[100%] sm:flex-row md:flex-row lg:flex-col font-source text-sm font-light mb-4 gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            natoque pretium vitae sed urna sed. Diam aliquam adipiscing lorem in
            bibendum. Amet purus arcu nisi vulputate placerat nulla habitant.
            Nisl ornare elementum in gravida in id in congue. Id urna fames
            congue nam. In nunc mi, suspendisse molestie aliquam sed congue
            malesuada ac. Est aliquet nunc ante molestie phasellus. Et, sed
            urna, nisl eleifend nibh diam neque, dui a. Vitae vel sit in
            hendrerit sit cursus in.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            natoque pretium vitae sed urna sed. Diam aliquam adipiscing lorem in
            bibendum. Amet purus arcu nisi vulputate placerat nulla habitant.
            Nisl ornare elementum in gravida in id in congue. Id urna fames
            congue nam. In nunc mi, suspendisse molestie aliquam sed congue
            malesuada ac. Est aliquet nunc ante molestie phasellus. Et, sed
            urna, nisl eleifend nibh diam neque, dui a. Vitae vel sit in
            hendrerit sit cursus in.
          </p>
        </div>

        <div className="sm:mx-auto lg:hidden">
          <Image src={Industries} alt="Industry image"></Image>
        </div>
      </div>

      <div className="hidden sm:mx-auto sm:hidden lg:hidden">
        <Image src={Industries} alt="Industry image"></Image>
      </div>
    </div>
  )
}

export default IndustryV4