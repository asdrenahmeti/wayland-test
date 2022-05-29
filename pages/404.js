import React from 'react'
import Section from '../components/Section/Section'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../components/Container/Container'
import Error from '../public/assets/404.svg'

function NotFound() {
  return (
    <Section style="pt-20 relative h-screen flex items-center justify-center">
      <div className="w-[120px] bg-gradient-to-b from-w-red to-w-orange h-screen absolute top-0 left-0 sm:w-[200px] lg:w-[40%]"></div>
      <Container>
        <div className="w-[80%] mx-auto justify-center font-mulish rounded-xl h-[450px] bg-white gap-4 drop-shadow-2xl relative z-[100] flex flex-col p-8 lg:pl-24 lg:h-800 lg:w-[70%]">
          <h1 className="uppercase text-2xl font-bold text-primary mb-6 lg:mb-2 lg:text-3xl">
            Error
          </h1>
          <p className="md:text-2xl md:max-w-[250px] lg:text-2xl lg:max-w-[320px]">
            What we've got here… is failure to communicate
          </p>

          <div className="relative md:absolute md:right-10 md:top-[50%]">
            <Image src={Error} objectFit="fill"></Image>
          </div>

          <p className="text-xs font-light md:max-w-[270px] md:text-md lg:w-auto lg:text-base">
            The page you are looking for doesn't exist or has been moved
          </p>

          <h1 className="md:mt-6 lg:text-xl">
            Let’s connect with{' '}
            <Link href="/">
              <a className="text-w-red underline ">home</a>
            </Link>
          </h1>
        </div>
      </Container>
    </Section>
  )
}

export default NotFound
