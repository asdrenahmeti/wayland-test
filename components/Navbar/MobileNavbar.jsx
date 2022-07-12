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
      className={`h-screen w-full bg-zinc-100 p-4 text-primary z-[1000] fixed ${
        isSidebarOpen ? '' : styles.hideMenu
      }`}
    >
      <IoClose
        className="text-primary text-3xl w-[30px] h-[30px] absolute right-[25px] top-[25px] cursor-pointer"
        onClick={closeSidebar}
      />
      <div className="flex flex-col pt-10 gap-9 h-full justify-center">
        {NavItems.map(nav => {
          return (
            <div key={nav.id} className={`${styles.mobile}`}>
              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-primary font-mulish font-bold text-2xl mb-1">
                    {nav.name}
                  </h1>
                  <AiOutlineRight className="text-3xl"></AiOutlineRight>
                </div>
                <div className="pl-4">
                  {nav.subs.map((sub, index) => {
                  return (
                    <div className="flex items-center mb-1" key={index}>
                      <AiOutlineRight className="text-2xl text-w-pink-2"></AiOutlineRight>
                      <p className="uppercase">{sub.name}</p>
                    </div>
                  )
                })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MobileNavbar