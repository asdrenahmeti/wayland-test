import React from 'react'
import Link from 'next/link'

function Button({ style, link, type, text, onClick }) {
  const styleType =
    type === 'dark'
      ? 'text-white border-gradient-br-primary-dark'
      : type === 'light'
      ? 'text-primary border-gradient-br-light-light'
      : 'bg-red-500'

  const hoverType =
    type === 'dark'
      ? 'from-secondary to-tertiary'
      : type === 'light'
      ? 'from-secondary to-tertiary'
      : ''

  return (
    <Link href={link}>
      <a
        onClick={onClick}
        className={`${style} font-mulish font-bold text-sm uppercase px-5 py-2.5 border-transparent border-solid border-2 rounded-lg group overflow-hidden flex justify-center relative 
         ${styleType}`}
      >
        <span
          className={`absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-100 bg-gradient-to-br group-hover:h-full opacity-100 ${hoverType}`}
        ></span>
        <span className="relative block group-hover:text-white">{text}</span>
      </a>
    </Link>
  )
}

export default Button
