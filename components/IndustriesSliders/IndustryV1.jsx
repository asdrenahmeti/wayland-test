import Image from 'next/image'
import React from 'react'
import Industries from '../../public/assets/images/industries.png'
import SwipeNext from '../../components/SwiperButtons/SwipeNext'
import SwipePrev from '../../components/SwiperButtons/SwipePrev'


function IndustryV1({industry}) {
  return (
    <div className="flex flex-col justify-between items-center pt-12 sm:flex-row sm:h-screen sm:items-center sm:justify-center">
      <div className="flex flex-col lg:flex-row">
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
      <div className="flex flex-col w-full sm:items-center sm:flex-row lg:flex-col flex-wrap lg:w-[300px] lg:mr-8 mb-4 font-source text-sm font-light gap-4">
        <div className="flex gap-5 flex-col sm:flex-row lg:flex-col">
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

        <div className="relative hidden sm:block lg:hidden">
          <Image src={Industries} alt="Industry image"></Image>
        </div>
      </div>

      <div className="relative sm:hidden lg:block">
        <Image src={Industries} alt="Industry image"></Image>
      </div>
    </div>
  )
}

export default IndustryV1