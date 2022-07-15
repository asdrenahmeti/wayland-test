import React from 'react'
import Image from 'next/image'
import Asdren from './../../public/assets/staff/asdren.png'

function Worker({ info, direction = '' }) {
  let align = direction === 'reverse' ? 'text-right' : 'text-left'

  return (
    <div
      className={`flex mb-8 items-center gap-4 flex-col lg:flex-row ${
        direction === 'reverse' ? 'flex-row-reverse' : ''
      } lg:cursor-pointer lg:hover:scale-110 transition-transform duration:200`}
    >
      <div className="w-[80px] h-[80px] rounded-full relative border-2 border-w-red overflow-hidden">
        <Image
          src={Asdren}
          layout="fill"
          objectFit="cover"
          alt="Profile picture"
        ></Image>
      </div>
      <div>
        <h2
          className={`font-source font-bold text-base text-center lg:${align}`}
        >
          {info.name}
        </h2>
        <p className={`font-source text-sm text-center lg:${align}`}>
          {info.position}
        </p>
        <p
          className={`font-source ${align} text-center text-xs lg:text-sm lg:${align}`}
        >
          {info.email}
        </p>
      </div>
    </div>
  )
}

export default Worker
