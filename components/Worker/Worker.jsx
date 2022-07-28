import React from 'react'
import Image from 'next/image'

function Worker({ info, style, align }) {
  return (
    <div
      className={`flex h-[50%] gap-[10px] flex-col justify-center items-center ${style} `}
    >
      <div className="w-[100px] bg-white h-[100px] rounded-full relative overflow-hidden">
        <Image
          src={info.image || '/assets/images/asdren.png'}
          layout="fill"
          objectFit="cover"
          alt="Profile picture"
          priority
        ></Image>
      </div>
      <div className={`${align} text-center`}>
        <h2 className={`font-source font-bold text-xl leading-2 ${align}`}>
          {info.name}
        </h2>
        <p className={`font-source text-sm m-0 p-0 leading-1 ${align}`}>
          {info.position}
        </p>
        {/* <p className={`font-source text-sm lg:text-sm m-0 p-0 ${align}`}>
          {info.email}
        </p> */}
      </div>
    </div>
  )
}

export default Worker
