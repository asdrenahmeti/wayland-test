import React, {useState} from 'react'
import Image from 'next/image'
import SliderItems from './ServiceItem'
import { IoIosArrowForward } from 'react-icons/io'


function ServiceSlider() {
  // eslint-disable-next-line no-unused-vars
  const [services, setServices] = useState(SliderItems)
  const [value, setValue] = useState(1)

  const {name, image1, image2 } = services[value]

  return (
    <div className="min-h-[200px] flex items-center gap-48 justify-evenly lg:flex-row-reverse lg:justify-end">
      <div className="relative left-3 lg:left-0">
        <div className="w-[160px] h-[280px] lg:w-[160px] lg:h-[280px] object-cover rounded-xl overflow-hidden -translate-y-2/4 top-0 absolute">
          <div className="w-[30px] h-[30px] rounded-full bg-w-pink-2 absolute bottom-2 right-2 h-[40px] z-50 text-white font-bold flex justify-center items-center text-xl cursor-pointer lg:text-2xl lg:w-[50px] lg:h-[50px]">
            {' '}
            <IoIosArrowForward />{' '}
          </div>

          <div className="w-full absolute top-0 left-0 h-[40px] bg-primary-transparent z-50 text-white">
            <p className="text-white text-center pt-2 uppercase font-mulish font-bold">
              {name}
            </p>
          </div>
          <Image src={image1} layout={'fill'} objectFit="cover"></Image>
        </div>

        <div className="w-[130px] h-[220px]  lg:w-[160px] lg:h-[280px] object-cover rounded-xl lg:-left-16 overflow-hidden -translate-y-3/4 -left-5 top-32 absolute lg:top-40">
          <Image src={image2} layout={'fill'} objectFit="cover"></Image>
        </div>
      </div>

      <div className="h-full text-white flex flex-col gap-4 justify-items-center	">
        {SliderItems.map((item, index) => {
          return (
            <h1
              key={index}
              onClick={() => {
                setValue(index)
              }}
              className={`${
                value === index && 'text-w-red'
              } cursor-pointer lg:font-mulish lg:font-bold lg:text-3xl`}
            >
              {item.name}
            </h1>
          )
        })}
      </div>
    </div>
  )
}

export default ServiceSlider
