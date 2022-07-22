import React, { useState } from 'react'
import NavItems from './NavItems'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button/ButtonFill'
import Container from '../Container/Container'
import Logo from './../../public/Logo.svg'
import styles from './Navbar.module.scss'
import { AiOutlineRight } from 'react-icons/ai'
import { IoMenu, IoClose } from 'react-icons/io5'
import ButtonFill from '../Button/ButtonFill'
import { FiFacebook } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { motion } from 'framer-motion'

function Navbar() {
  const [toggleModal, setToggleModal] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)

  const changeActiveToggle = index => {
    console.log(typeof index)
    if (index === activeMenu) {
      setActiveMenu(null)
    } else {
      setActiveMenu(index)
    }
  }

  const changeToggleAndActive = () => {
    setToggleModal(false)
    setActiveMenu(null)
  }

  const menuVariants = {
    opened: {
      left: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3
      }
    },
    closed: {
      left: '100%'
    }
  }

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 0
    },
    closed: {
      opacity: 0,
      y: -50
    }
  }

  const changeToggleModal = () => {
    setToggleModal(!toggleModal)
  }

  return (
    <>
      <nav className="bg-primary font-mulish flex justify-between items-center fixed top-0 w-full z-[10000]">
        <Container style={'font-mulish py-3 flex justify-between items-center'}>
          <Link href="/">
            <a className="relative z-10" onClick={changeToggleAndActive}>
              <Image src={Logo} height={50} width={150} alt="Wayland Logo" />
            </a>
          </Link>

          {!toggleModal && (
            <IoMenu
              className="text-white h-[30px] w-[30px] block cursor-pointer lg:hidden"
              onClick={changeToggleModal}
            />
          )}

          {toggleModal && (
            <IoClose
              className="text-white h-[30px] w-[30px] block cursor-pointer lg:hidden"
              onClick={changeToggleModal}
            />
          )}

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
                        <Link href={sub.link} key={index}>
                          {sub.link.startsWith('https') ? (
                            <a
                              target="_blank"
                              className="text-primary mr-10 font-mulish font-normal text-base flex items-center"
                            >
                              <AiOutlineRight className="inline-block text-w-pink mr-2" />
                              {sub.name.toUpperCase()}
                            </a>
                          ) : (
                            <a className="text-primary mr-10 font-mulish font-normal text-base flex items-center">
                              <AiOutlineRight className="inline-block text-w-pink mr-2" />
                              {sub.name.toUpperCase()}
                            </a>
                          )}
                        </Link>
                      )
                    })}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <Button
            type="dark"
            style="hidden lg:block"
            link="/contact"
            text="Connect"
          />
        </Container>
      </nav>

      <Container
        style={`h-[calc(100vh-80px)] fixed w-full left-0 top-[80px] z-[900] sm:hidden md:hidden ${
          toggleModal ? 'block' : 'hidden'
        }`}
      >
        <motion.div
          initial={false}
          variants={menuVariants}
          animate={toggleModal ? 'opened' : 'closed'}
          className="flex flex-col left-0 px-6 h-[calc(100vh-80px)] gap-[8px] pt-6 fixed w-full bg-white z-[100] top-[80px] lg:hidden"
        >
          {NavItems.map((nav, index) => {
            return (
              <div key={nav.id} className={`${styles.mobile}`}>
                <div>
                  <div className="flex items-center justify-between">
                    <motion.div
                      variants={linkVariants}
                      className="flex items-center justify-between w-[100%]"
                      onClick={() => changeActiveToggle(index)}
                    >
                      <h1 className="text-primary font-mulish font-bold text-xl mb-1">
                        {nav.name}
                      </h1>
                      <AiOutlineRight
                        className={`text-xl font-bold transform-transition duration-100 ${
                          activeMenu === index ? 'rotate-90' : ''
                        }`}
                      ></AiOutlineRight>
                    </motion.div>
                  </div>
                  <div className="pl-2">
                    {nav.subs.map((sub, indexSub) => {
                      return (
                        <div
                          className={`flex items-center mb-1 h-[30px] transition-height duration-700 ${
                            activeMenu === index
                              ? 'h-auto opacity-1'
                              : 'h-[0px] opacity-0'
                          }`}
                          key={indexSub}
                        >
                          <AiOutlineRight className="text-xl text-w-pink-2"></AiOutlineRight>
                          <Link href={`/${sub.link}`}>
                            <a
                              className="uppercase"
                              onClick={changeToggleAndActive}
                            >
                              {sub.name}
                            </a>
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}

          <div className="mt-auto mb-6">
            <ButtonFill
              type="light"
              style="w-[80%] mt-6 mx-auto md:mx-0"
              link="/contact"
              text="Connect"
              onClick={changeToggleModal}
            />

            <div className="flex justify-center mt-4">
              <div className="flex flex-row font-source text-sm uppercase gap-3 sm:flex-col lg:flex-col">
                <Link href={'http://www.facebook.com'}>
                  <a className="p-1 ">
                    <FiFacebook className="w-6 h-6" />
                  </a>
                </Link>

                <Link href={'http://www.linkedin.com'}>
                  <a className="p-1">
                    <FiLinkedin className="w-6 h-6" />
                  </a>
                </Link>

                <Link href={'http://www.instagram.com'}>
                  <a className="p-1">
                    <FiInstagram className="w-6 h-6" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </>
  )
}

export default Navbar
