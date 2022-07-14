import React from 'react'

function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-2 h-[24px] w-[100%] lg:w-auto lg:-rotate-90 lg:absolute lg:left-0 no-wrap">
      <div className="w-[40px] h-[2px] bg-w-red bg-primary"></div>
      <p className="text-w-gray font-source text-sm uppercase lg:text-sm tracking-widest">
        {title}
      </p>
    </div>
  )
}

export default SectionTitle
