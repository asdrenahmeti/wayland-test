import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../Container/Container'
import LogoOnly from './../../public/LogoOnly.svg'
import styles from './Footer.module.scss'
import FooterItems from './FooterItems'
import { FiFacebook } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'

function Footer() {
  return (
    <footer className={`${styles.footer} bg-black text-white py-8`}>
      <Container style="flex flex-col gap-5 w-full justify-between items-center lg:flex-row">
        <div className="flex flex-col justify-center items-center">
          <Link href="/" passHref={true}>
            <a>
              <Image src={LogoOnly} width={90} height={90} alt="Wayland Logo" />
            </a>
          </Link>

          <p className="underline font-bold font-source text-md mt-4">
            hello@wayland.io
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center text-left">
          <h1 className="font-mulish text-4xl font-extrabold uppercase text-center pb-5 lg:text-left">
            Building Better.
          </h1>
          <div className="flex flex-row flex-wrap gap-16 items-center">
            {FooterItems.map(item => (
              <div
                className="cursor-pointer flex flex-col font-source text-sm uppercase gap-2"
                key={item.id}
              >
                {item.items?.map((subItem, index) => (
                  <Link href={`/${subItem.link}`} key={index}>
                    <a className="cursor-pointer">
                      {subItem.name.toUpperCase()}
                    </a>
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex flex-row font-source text-sm uppercase gap-3 sm:flex-col lg:flex-col">
              <Link href={'https://www.linkedin.com/company/waylandio'}>
                <a className="cursor-pointer hover:animate-bounce p-1 ">
                  <FiFacebook className="w-6 h-6" />
                </a>
              </Link>

              <Link href={'https://www.linkedin.com/company/waylandio'}>
                <a className="cursor-pointer hover:animate-bounce p-1">
                  <FiLinkedin className="w-6 h-6" />
                </a>
              </Link>

              <Link href={'https://www.instagram.com/waylandio'}>
                <a className="hover:animate-bounce p-1">
                  <FiInstagram className="w-6 h-6" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
