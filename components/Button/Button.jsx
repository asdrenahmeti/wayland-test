import React from 'react'
import Link from 'next/link'

function Button({ style, link, type, text }) {
  const variant = {
    dark: 'text-white bg-primary',
    light: 'text-black bg-white',
    red: 'text-white bg-w-red'
  }

  return (
    <Link href={link}>
      <a
        href={link}
        className={`font-mulish ${style} text-center font-bold mt-10 text-sm uppercase px-5 py-4 rounded-lg ${variant[type]} drop-shadow-lg lg:max-w-[180px]`}
      >
        {text}
      </a>
    </Link>
  )
}

export default Button
