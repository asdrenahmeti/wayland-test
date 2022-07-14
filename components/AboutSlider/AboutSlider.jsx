import React, { useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import AboutItems from './AboutItems'

function AboutSlider() {
  const [activeItem, setActiveItem] = useState(AboutItems[0])

  return (
    <div className="flex justify-between my-20">
      <div className="justify-center flex-col flex lg:w-[55%]">
        <div className="relative">
          <h1 className="font-mulish text-xl lg:text-5xl uppercase absolute z-[100] top-1/2 -translate-y-1/2 tracking-widest font-semibold">
            {activeItem.name}
          </h1>
          <h1 className="font-mulish text-8xl text-w-lightorange opacity-50">
            {activeItem.id}
          </h1>
        </div>
        <p>{activeItem.description}</p>
      </div>
      <div className="justify-center flex w-[35%] hidden md:flex">
        <div className="justify-center flex flex-col">
          <h1 className="mb-4 uppercase text-2xl text-w-primary font-mulish font-bold text-w-red tracking-widest">
            We value
          </h1>
          {AboutItems.map((item, index) => (
            <h1
              key={index}
              className={`uppercase cursor-pointer mb-4 font-mulish text-xl font-light tracking-widest transition-all duration-300 ${
                activeItem.id - 1 === index ? 'text-w-lightorange' : ''
              } hover:text-w-lightorange`}
              onClick={() => setActiveItem(AboutItems[index])}
            >
              {item.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutSlider
