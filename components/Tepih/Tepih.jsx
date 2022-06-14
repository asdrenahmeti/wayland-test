/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import styles from './Tepih.module.scss'


function Tepih({count}) {
    const [dotCount, setDotCount] = useState(new Array(count).fill(0))
  return (
    <>
      <div>
        {dotCount.map((item, index) => {
          return (
            <div
              key={index}
              className={`${styles.dot} ${styles.bgGreen}`}
            ></div>
          )
        })}
      </div>
      <div className="flex items-center h-100 justify-center flex-column"></div>
    </>
  )
}

export default Tepih