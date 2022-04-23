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
      <Container style="flex justify-between items-center">
        <div>
          <Link href="/" passHref={true}>
            <a>
              <Image src={LogoOnly} width={90} height={90} alt="Wayland Logo" />
            </a>
          </Link>
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <h1 className="font-mulish text-4xl font-extrabold">GOOD TALKS</h1>
          <div className="flex gap-16 items-center">
            {FooterItems.map((item) => (
              <div
                className="flex flex-col font-source text-sm uppercase gap-2"
                key={item.id}
              >
                {item.items?.map((subItem, index) => (
                  <Link
                    href={`/${subItem.replace(/\s+/g, '-').toLowerCase()}`}
                    key={index}
                  >
                    <a>{subItem.toUpperCase()}</a>
                  </Link>
                ))}
              </div>
            ))}

            <div className="flex flex-col font-source text-sm uppercase gap-3">
              <Link href={'http://www.facebook.com'}>
                <a className="hover:animate-bounce p-1 ">
                  <FiFacebook className="w-6 h-6" />
                </a>
              </Link>

              <Link href={'http://www.linkedin.com'}>
                <a className="hover:animate-bounce p-1">
                  <FiLinkedin className="w-6 h-6" />
                </a>
              </Link>

              <Link href={'http://www.instagram.com'}>
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
