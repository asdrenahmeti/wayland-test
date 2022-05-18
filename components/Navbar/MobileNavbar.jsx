import React from 'react'
import NavItems from './NavItems'
import {AiOutlineRight} from 'react-icons/ai'
import {IoClose} from "react-icons/io5";
import styles from './MobileNavbar.module.scss'
import { useGlobalContext } from './../context'



function MobileNavbar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <div
      className={`h-screen w-full bg-primary p-4 text-white z-[1000] fixed ${
        isSidebarOpen ? '' : styles.hideMenu
      }`}
    >
      <IoClose
        className="text-white text-3xl w-[30px] h-[30px] absolute right-[25px] top-[25px] cursor-pointer"
        onClick={closeSidebar}
      />
      <div className="flex flex-col gap-9 h-full justify-center ">
        {NavItems.map(nav => {
          return (
            <div key={nav.id} className={`${styles.mobile}`}>
              <h1 className="text-white font-mulish font-bold text-2xl">
                {nav.name}
              </h1>
              <div className="h-0.5 w-100 mt-2 mb-2 bg-black mt-1 bg-gradient-to-r from-secondary to-quarternary"></div>

              <div className="flex flex-wrap pl-4">
                {nav.subs.map((sub, index) => {
                  return (
                    <p key={index} className="text-white w-3/6 uppercase pb-1">
                      <AiOutlineRight className="inline-block text-w-pink mr-2" />
                      {sub}
                    </p>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MobileNavbar