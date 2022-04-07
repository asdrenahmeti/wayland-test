import React from 'react'
import Link from 'next/link'

function Button({
  link,
  type,
  text
}: {
  link: string
  text: string
  type?: string
}) {
  return (
    <Link href={link}>
      <a
        className={`font-mulish font-bold text-sm uppercase px-5 py-2.5 border-transparent border-solid border-2 rounded-lg group overflow-hidden flex justify-center relative ${
          type === 'dark'
            ? 'text-primary border-gradient-br-primary-dark'
            : 'text-white border-gradient-br-primary-light'
        }`}
      >
        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-100 bg-gradient-to-br from-secondary to-tertiary group-hover:h-full opacity-100"></span>
        <span className="relative block group-hover:text-white">
          {text}
        </span>
      </a>
    </Link>
  )
}


export default Button