import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './SwiperCareer.module.scss'
import CareerItem from '../CareerItem/CareerItem'

function SwiperCareer({ openModal }) {
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
        className={`w-[100%] mt-8 bg-white box-content !py-[30px] drop-shadow-[10px_10px_6px_rgba(0,0,0,0.05)] rounded-md overflow-visible flex items-center justify-end`}
        onInit={swiper => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current
          swiper.params.navigation.nextEl = swiperNavNextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
      >
        <SwiperSlide className="flex justify-center flex-end w-full">
          <div className="w-[90%] flex flex-col items-center justify-center p-[5px]">
            <CareerItem openModal={openModal}></CareerItem>
            <CareerItem openModal={openModal}></CareerItem>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center flex-end w-full">
          <div className="w-[90%] flex flex-col items-center justify-center">
            <CareerItem openModal={openModal}></CareerItem>
          </div>
        </SwiperSlide>

        <div className={styles.swiperButtonNext} ref={swiperNavNextRef}></div>
        <div className={styles.swiperButtonPrev} ref={swiperNavPrevRef}></div>
        <div className={`pagination ${styles.pagination}`}></div>
      </Swiper>
    </>
  )
}

export default SwiperCareer
