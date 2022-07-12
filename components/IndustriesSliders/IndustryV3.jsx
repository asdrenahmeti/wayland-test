import Image from 'next/image'
import React from 'react'
import Industries from '../../public/assets/images/industries.png'
import SwipeNext from '../SwiperButtons/SwipeNext'
import SwipePrev from '../SwiperButtons/SwipePrev'


function IndustryV3({industry}) {
  return (
    <div className="flex flex-col justify-center items-center h-screen sm:flex-row lg:flex-row lg:justify-between">
      <div className="flex">
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

      <div className="flex flex-col w-full lg:w-[300px] font-source text-sm font-light gap-4 sm:flex-row sm:flex-wrap">
        <p className="sm:w-[50%] lg:w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla natoque
          pretium vitae sed urna sed. Diam aliquam adipiscing lorem in bibendum.
          Amet purus arcu nisi vulputate placerat nulla habitant. Nisl ornare
          elementum in gravida in id in congue. Id urna fames congue nam. In
          nunc mi, suspendisse molestie aliquam sed congue malesuada ac. Est
          aliquet nunc ante molestie phasellus. Et, sed urna, nisl eleifend nibh
          diam neque, dui a. Vitae vel sit in hendrerit sit cursus in.
        </p>

        <p className="hidden sm:block sm:w-[50%] lg:hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla natoque
          pretium vitae sed urna sed. Diam aliquam adipiscing lorem in bibendum.
          Amet purus arcu nisi vulputate placerat nulla habitant. Nisl ornare
          elementum in gravida in id in congue. Id urna fames congue nam.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col w-full lg:w-[300px] font-source text-sm font-light gap-4 sm:hidden lg:block">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            natoque pretium vitae sed urna sed. Diam aliquam adipiscing lorem in
            bibendum. Amet purus arcu nisi vulputate placerat nulla habitant.
            Nisl ornare elementum in gravida in id in congue. Id urna fames
            congue nam.
          </p>
        </div>
        <div className="relative sm:hidden lg:block lg:left-12 ">
          <Image src={Industries} alt="Industry image"></Image>
        </div>
      </div>
    </div>
  )
}

export default IndustryV3