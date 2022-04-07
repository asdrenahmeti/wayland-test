import React from 'react'
import NavItems from './NavItems'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button/Button'
import Logo from './../../public/Logo.svg'
import styles from './Navbar.module.scss'
import {AiOutlineRight} from 'react-icons/ai'

function Navbar() {

  return (
    <>
      <nav className="bg-primary font-mulish px-7 py-3 flex justify-between items-center">
        <Link href="/" passHref={true}>
          <Image src={Logo} alt="Wayland Logo" />
        </Link>

        <ul className="flex flex-row gap-2 w-full justify-center">
          {NavItems.map((nav: any) => (
            <li
              className="text-sm text-white font-bold cursor-pointer p-5"
              key={nav.id}
            >
              <a>{nav.name}</a>

              <div
                className={`${styles.submenu} flex flex-row box-border px-20 py-10 pt-12 animate-fade-in-down cursor-default`}
              >
                <div className="flex flex-col w-60 mr-20">
                  <h1 className="font-mulish font-bold text-2xl text-primary">
                    {nav.name}
                  </h1>
                  <div className="h-0.5 w-100 mt-2 mb-2 bg-black mt-1 bg-gradient-to-r from-secondary to-quarternary"></div>
                  <p className="text-light font-light">{nav.desc}</p>
                </div>
                <ul className="flex flex-row -top-6 relative">
                  {nav.subs.map((sub: string, index: number) => (
                    <Link href={`${sub.toLowerCase()}`} key={index}>
                      <a className="text-primary mr-10 font-mulish font-normal text-base flex items-center">
                        <AiOutlineRight className="inline-block text-w-pink mr-2"/>{sub.toUpperCase()}
                      </a>
                    </Link>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <Button link="/connect" text="Connect" />
      </nav>
    </>
  )
}

export default Navbar