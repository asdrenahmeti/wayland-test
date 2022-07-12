import Image from 'next/image'
import React from 'react'
import Industries from '../../public/assets/images/industries.png'
import SwipeNext from '../SwiperButtons/SwipeNext'
import SwipePrev from '../SwiperButtons/SwipePrev'


function IndustryV2({industry}) {
  return (
    <div className="flex justify-center lg:justify-between flex-col-reverse items-center h-screen sm:flex-row lg:flex-row">
      <div className="flex order-1 sm:-order-1 lg:-order-1">
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

      <div className="block sm:hidden lg:block">
        <Image src={Industries} alt="Industry image"></Image>
      </div>

      <div className="flex flex-col w-full mb-5 lg:w-[300px] lg:ml-8 lg:mb-0 font-source text-sm font-light gap-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla natoque
          pretium vitae sed urna sed. Diam aliquam adipiscing lorem in bibendum.
          Amet purus arcu nisi vulputate placerat nulla habitant. Nisl ornare
          elementum in gravida in id in congue. Id urna fames congue nam. In
          nunc mi, suspendisse molestie aliquam sed congue malesuada ac. Est
          aliquet nunc ante molestie phasellus. Et, sed urna, nisl eleifend nibh
          diam neque, dui a. Vitae vel sit in hendrerit sit cursus in.
        </p>

        <div className="hidden sm:block lg:hidden">
          <Image src={Industries} alt="Industry image"></Image>
        </div>
      </div>
    </div>
  )
}

export default IndustryV2