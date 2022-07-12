import Image from 'next/image'
import React from 'react'
import Industries from '../../public/assets/images/industries.png'
import SwipeNext from '../SwiperButtons/SwipeNext'
import SwipePrev from '../SwiperButtons/SwipePrev'


function IndustryV5({industry}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen sm:flex-row lg:flex-row lg:justify-between">
      <div className="flex items-center">
        <div className="hidden lg:flex lg:flex-col">
          <SwipePrev></SwipePrev>
          <SwipeNext></SwipeNext>
        </div>
        <div className="flex items-center justify-center mb-4 gap-2 sm:-rotate-90 lg:mb-0 lg:w-[200px]">
          <div className="w-[40px] h-[2px] bg-w-red bg-primary"></div>
          <p className="text-w-gray text-2xl uppercase lg:text-base">
            {industry}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col font-source text-sm font-light gap-4 flex lg:gap-10 sm:flex-row lg:flex-row">
          <p className="lg:w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            natoque pretium vitae sed urna sed. Diam aliquam adipiscing lorem in
            bibendum. Amet purus arcu nisi vulputate placerat nulla habitant.
            Nisl ornare elementum in gravida in id in congue. Id urna fames
            congue nam. In nunc mi, suspendisse molestie aliquam sed congue
            malesuada ac. Est aliquet nunc ante molestie phasellus. Et, sed
            urna, nisl eleifend nibh diam neque, dui a. Vitae vel sit in
            hendrerit sit cursus in.
          </p>
          <p className="lg:w-[400px]">
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

        <div className="relative lg:relative lg:left-56">
          <Image src={Industries} alt="Industry image"></Image>
        </div>
      </div>
    </div>
  )
}

export default IndustryV5