import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './SwiperProduct.module.scss'

function SwiperProduct() {
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
        modules={[Navigation, Pagination]}
        className={`w-[100%] mt-8 bg-white box-content !py-[30px] drop-shadow-[10px_10px_6px_rgba(0,0,0,0.05)] rounded-md overflow-visible flex items-center justify-end`}
        onInit={swiper => {
          swiper.navigation.init()
          swiper.navigation.update()
        }}
      >
        <SwiperSlide className="flex justify-center flex-end w-full">
          <div className="relative w-[90%] top-0 h-[300px]  rounded-md overflow-hidden">
            <Image
              src="/assets/blogs/blog-2.jpg"
              alt="Johnson & Johnson Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center flex-end w-full">
          <div className="relative w-[90%] top-0 h-[300px] rounded-md overflow-hidden">
            <Image
              src="/assets/blogs/blog-2.jpg"
              alt="Johnson & Johnson Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>

        <div className={`pagination ${styles.pagination}`}></div>
      </Swiper>
    </>
  )
}

export default SwiperProduct
