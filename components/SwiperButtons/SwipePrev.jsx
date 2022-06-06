import { React } from 'react'
import { useSwiper } from 'swiper/react'
import Image from 'next/image'
import ArrowTop from '../../public/assets/icons/arrow-top.svg'

export default function SlideNextButton() {
  const swiper = useSwiper()

  return (
    <div onClick={() => swiper.slidePrev()} className="cursor-pointer">
      <Image src={ArrowTop}  width={70} height={70} alt="Slider arrow top"></Image>
    </div>
  )
}
