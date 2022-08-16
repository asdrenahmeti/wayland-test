import React from 'react'
import Container from '../../components/Container/Container'
import IndustryV1 from '../../components/IndustriesSliders/IndustryV1'
import IndustryV2 from '../../components/IndustriesSliders/IndustryV2'
import IndustryV3 from '../../components/IndustriesSliders/IndustryV3'
import IndustryV4 from '../../components/IndustriesSliders/IndustryV4'
import IndustryV5 from '../../components/IndustriesSliders/IndustryV5'

import Section from '../../components/Section/Section'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

// Import Swiper styles
import 'swiper/css/bundle'

function index() {
  return (
    <Section style={'flex py-12 h-screen cursor-pointer'}>
      <Swiper
        slidesPerView={1}
        onSlideChange={() => {}}
        onSwiper={() => {}}
        direction="vertical"
      >
        <SwiperSlide>
          <Section style={'h-screen'}>
            <Container>
              <IndustryV1 industry="Healthcare">asdasdas</IndustryV1>
            </Container>
          </Section>
        </SwiperSlide>
        <SwiperSlide>
          <Section style={'h-screen'}>
            <Container>
              <IndustryV2 industry="Education">asdasdas</IndustryV2>
            </Container>
          </Section>
        </SwiperSlide>
        <SwiperSlide>
          <Section style={'h-screen'}>
            <Container>
              <IndustryV3 industry="Cybersecurity">asdasdas</IndustryV3>
            </Container>
          </Section>
        </SwiperSlide>
        <SwiperSlide>
          <Section style={'h-screen'}>
            <Container>
              <IndustryV4 industry="Robotic">asdasdas</IndustryV4>
            </Container>
          </Section>
        </SwiperSlide>
        <SwiperSlide>
          <Section style={'h-screen'}>
            <Container>
              <IndustryV5 industry="Data mining">asdasdas</IndustryV5>
            </Container>
          </Section>
        </SwiperSlide>
      </Swiper>
    </Section>
    // <div className="pt-24 h-screen bg-primary text-white">
    //   <Swiper
    //     direction={'vertical'}
    //     pagination={{
    //       clickable: true
    //     }}
    //     className="mySwiper"
    //   >
    //     <SwiperSlide>Slide 1</SwiperSlide>
    //     <SwiperSlide>Slide 2</SwiperSlide>
    //     <SwiperSlide>Slide 3</SwiperSlide>
    //     <SwiperSlide>Slide 4</SwiperSlide>
    //     <SwiperSlide>Slide 5</SwiperSlide>
    //     <SwiperSlide>Slide 6</SwiperSlide>
    //     <SwiperSlide>Slide 7</SwiperSlide>
    //     <SwiperSlide>Slide 8</SwiperSlide>
    //     <SwiperSlide>Slide 9</SwiperSlide>
    //   </Swiper>
    // </div>
  )
}

export default index
