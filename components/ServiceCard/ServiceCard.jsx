/* eslint-disable no-unused-vars */
import React from 'react'
// import Link from 'next/link'

function ServiceCard({ info }) {
  return (
    <div className="w-[100%] sm:w-[45%] mb-8 lg:w-[30%] py-8 px-4 shadow-md rounded-md cursor-pointer transition duration-150 ease-in-out hover:bg-w-red hover:text-white">
      <h1 className="font-mulish font-extrabold text-xl">App Development</h1>
      <p className="my-4 font-source font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor
      </p>
      <h3 className="font-mulish font-bold">More details</h3>
    </div>
  )
}

export default ServiceCard
