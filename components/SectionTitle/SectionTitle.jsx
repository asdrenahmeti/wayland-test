import React from 'react'

function SectionTitle({ title, rotation }) {
  return (
    <div
      className={`${
        rotation ? '-rotate-90' : ''
      } flex items-center gap-2 h-[24px] w-[100%] lg:w-auto lg:-rotate-90 lg:absolute lg:-left-[45px] no-wrap`}
    >
      <div className="w-[40px] h-[2px] bg-w-red bg-primary"></div>
      <p className="text-w-gray font-source text-sm uppercase lg:text-sm tracking-widest w-[150px]">
        {title}
      </p>
    </div>
  )
}

export default SectionTitle
