import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import GoogleLogo from './../../public/assets/icons/google-logo.svg'
import AsanaLogo from './../../public/assets/icons/asana-logo.svg'
import Image from 'next/image'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './PartnerSlider.module.scss'

function PartnerSlider() {
  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)

  return (
    <Swiper
      pagination={{
        clickable: true
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }}
      navigation={{
        disabledClass: styles.test,
        prevEl: swiperNavPrevRef.current,
        nextEl: swiperNavNextRef.current
      }}
      modules={[Navigation]}
      className={`w-[100%] mt-20 h-[80px] flex items-center justify-center`}
      onInit={swiper => {
        swiper.params.navigation.prevEl = swiperNavPrevRef.current
        swiper.params.navigation.nextEl = swiperNavNextRef.current
        swiper.navigation.init()
        swiper.navigation.update()
      }}
    >
      <SwiperSlide className="flex justify-center items-center">
        <div className="relative">
          <Image src={AsanaLogo} alt="Asana Logo" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <div className="relative">
          <Image src={GoogleLogo} alt="Google Logo" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <div className="relative">
          <Image src={AsanaLogo} alt="Asana Logo" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <div className="relative">
          <Image src={GoogleLogo} alt="Google Logo" />
        </div>
      </SwiperSlide>

      <div className={styles.swiperButtonNext} ref={swiperNavNextRef}></div>
      <div className={styles.swiperButtonPrev} ref={swiperNavPrevRef}></div>
    </Swiper>
  )
}

export default PartnerSlider
