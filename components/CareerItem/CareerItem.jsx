/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

function CareerItem({ openModal }) {
  return (
    <div className="flex items-center gap-[6px] flex-col mb-[6px] bg-white rounded-md">
      <div className="flex gap-[8px] items-center">
        <div className="relative w-[75px] h-[75px] bg-w-orange rounded-full sm:w-[100px] sm:h-[100px] relative overflow-hidden">
          <Image
            src="/assets/staff/asdren.png"
            layout="fill"
            objectFit="cover"
            alt="Worker image"
          ></Image>
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="font-mulish text-sm font-bold uppercase">
            Hey I'm ben
          </h1>
          <p className="text-xs font-source mb-1">
            My team needs a Junior Developer in NodeJS, if you like challanges
            and want to learn more, we are more than happy to make you a place.
          </p>
        </div>
      </div>
      <a
        className="text-w-red underline text-sm text-right block w-full cursor-pointer"
        onClick={() => openModal(true)}
      >
        apply now
      </a>
    </div>
  )
}

export default CareerItem
