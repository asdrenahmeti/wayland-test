import React, {useEffect, useRef} from 'react'
import styles from './ContactAnimation.module.scss'
import Image from 'next/image'
import Arrow from './../../public/assets/arrow.svg'


function ContactAnimation({firstPhrase, secondPhrase, type}) {
    const black = useRef(null)
    const dotsType = type === 'light' ? 'blackDots' : 'whiteDots'
    useEffect(() => {
        console.log(black.current)
    }, [])

    console.log(dotsType)

  return (
    <div className="my-8 w-[280px] h-[400px] flex relative items-center">
      <div className={`${styles[dotsType]} w-[40px] h-[400px]`}>
        <div
          className={`w-[80px] h-[80px] absolute top-0 -left-[20px] ${styles.test}`}
          ref={black}
        ><Image src={Arrow} layout="fill" alt="Arrow image"></Image></div>
      </div>

      <h1 className="font-mulish ml-4 leading-[55px] font-bold text-5xl">
        Come <br /> hang <br /> with us <br /> we <br /> would <br /> love
        <br /> to{' '}
        <span className={`text-w-red  ${styles.text}`}>{firstPhrase}</span>{' '}
        <br />{' '}
        <span className={`text-w-red  ${styles.text}`}>{secondPhrase}</span> you
      </h1>
    </div>
  )
}

export default ContactAnimation