import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './SwiperAbout.module.scss'
import SwiperItems from './../AboutSlider/AboutItems'

function SwiperAbout() {
  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)

  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: '.pagination',
          bulletActiveClass: styles.activeBullet,
          bulletClass: styles.bullets,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`
          }
        }}
        loop={true}
        navigation={{
          disabledClass: styles.test,
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current
        }}
        modules={[Navigation, Pagination]}
        className={`w-[100%] max-h-[450px] mt-8 overflow-visible flex items-center justify-end`}
        onInit={swiper => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current
          swiper.params.navigation.nextEl = swiperNavNextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
      >
        {SwiperItems.map((item, index) => {
          return (
            <SwiperSlide key={index} className="flex justify-center flex-end">
              <div className="justify-center flex-col flex w-[100%]">
                <div className="relative">
                  <h1 className="font-mulish text-xl lg:text-5xl uppercase absolute z-[100] top-1/2 -translate-y-1/2 tracking-widest font-semibold">
                    {item.name}
                  </h1>
                  <h1 className="font-mulish text-8xl text-w-lightorange opacity-50">
                    {item.id}
                  </h1>
                </div>
                <p>{item.description}</p>
              </div>
            </SwiperSlide>
          )
        })}

        <div className={styles.swiperButtonNext} ref={swiperNavNextRef}></div>
        <div className={styles.swiperButtonPrev} ref={swiperNavPrevRef}></div>
        <div className={`pagination ${styles.pagination}`}></div>
      </Swiper>
    </>
  )
}

export default SwiperAbout
