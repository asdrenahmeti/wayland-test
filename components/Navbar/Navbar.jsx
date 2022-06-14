import React from 'react'
import NavItems from './NavItems'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button/ButtonFill'
import Container from '../Container/Container'
import Logo from './../../public/Logo.svg'
import styles from './Navbar.module.scss'
import { AiOutlineRight } from 'react-icons/ai'
import { IoMenu } from 'react-icons/io5'
import { useGlobalContext } from './../context'


function Navbar() {
    const { openSidebar } = useGlobalContext()

  return (
    <>
      <nav className="bg-primary font-mulish flex justify-between items-center fixed top-0 w-full z-[10000]">
        <Container
          style={
            'font-mulish py-3 flex justify-between items-center'
          }
        >
          <Link href="/">
            <a className="relative z-10">
              <Image src={Logo} height={50} width={150} alt="Wayland Logo" />
            </a>
          </Link>

          <IoMenu
            className="text-white h-[30px] w-[30px] block cursor-pointer lg:hidden"
            onClick={openSidebar}
          />

          <ul className="flex flex-row gap-2 hidden w-full justify-center absolute h-full w-full left-0 lg:flex">
            {NavItems.map(nav => (
              <li
                className="text-sm text-white font-bold cursor-pointer p-5 flex items-center"
                key={nav.id}
              >
                <a>{nav.name}</a>

                <div
                  className={`${styles.submenu} drop-shadow-lg flex flex-row box-border px-20 py-10 animate-fade-in-down cursor-default`}
                >
                  <div className="flex flex-col w-60 mr-20">
                    <h1 className="font-mulish font-bold text-2xl text-primary">
                      {nav.name}
                    </h1>
                    <div className="h-0.5 w-100 mt-2 mb-2 bg-black mt-1 bg-gradient-to-r from-secondary to-quarternary"></div>
                    <p className="text-light font-light">{nav.desc}</p>
                  </div>
                  <ul className="flex flex-row -top-6 relative">
                    {nav.subs.map((sub, index) => {
                      return (                
                      <Link
                        href={`/${sub.link}`}
                        key={index}
                      >
                        <a className="text-primary mr-10 font-mulish font-normal text-base flex items-center">
                          <AiOutlineRight className="inline-block text-w-pink mr-2" />
                          {sub.name.toUpperCase()}
                        </a>
                      </Link>
                      )
                      })}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <Button type="dark" style="hidden lg:block" link="/contact" text="Connect" />
        </Container>
      </nav>
    </>
  )
}

export default Navbar
