import { React } from 'react'
import { useSwiper } from 'swiper/react'
import Image from 'next/image'
import ArrowBottom from '../../public/assets/icons/arrow-bottom.svg'


export default function SlideNextButton() {
  const swiper = useSwiper()

  return (
      <div onClick={() => swiper.slideNext()} className="cursor-pointer">
      <Image src={ArrowBottom} width={70} height={70}></Image>
      </div>
  )
}
