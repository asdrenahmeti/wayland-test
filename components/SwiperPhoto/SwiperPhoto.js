import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './SwiperPhoto.module.scss'

function SwiperPhoto() {
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
        className={`w-[100%] mt-8 h-[250px] overflow-visible flex items-center justify-end`}
        onInit={swiper => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current
          swiper.params.navigation.nextEl = swiperNavNextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
      >
        <SwiperSlide className="flex justify-center flex-end">
          <div className="relative w-[90%] top-0 h-[220px] rounded-md overflow-hidden">
            <Image
              src="/assets/blogs/blog-1.jpg"
              alt="Johnson & Johnson Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center flex-end">
          <div className="relative w-[90%] top-0 h-[220px] rounded-md overflow-hidden">
            <Image
              src="/assets/blogs/blog-1.jpg"
              alt="Johnson & Johnson Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center flex-end">
          <div className="relative w-[90%] top-0 h-[220px] rounded-md overflow-hidden">
            <Image
              src="/assets/blogs/blog-1.jpg"
              alt="Johnson & Johnson Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>

        <div className={styles.swiperButtonNext} ref={swiperNavNextRef}></div>
        <div className={styles.swiperButtonPrev} ref={swiperNavPrevRef}></div>
        <div className={`pagination ${styles.pagination}`}></div>
      </Swiper>
    </>
  )
}

export default SwiperPhoto
