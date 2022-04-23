import React from 'react'
import Link from 'next/link'

function Button({ link, type, text }) {
  const variant = {
    dark: 'text-white bg-primary',
    light: 'text-black bg-white',
    red: 'text-white bg-w-red'
  }

  return (
    <Link href={link}>
      <a
        className={`font-mulish text-center font-bold mt-10 text-sm uppercase px-5 py-4 rounded-lg ${variant[type]} drop-shadow-lg lg:max-w-[180px]`}
      >
        {text}
      </a>
    </Link>
  )
}

export default Button
