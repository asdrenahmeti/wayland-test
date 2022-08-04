import React from 'react'
import Section from '../../components/Section/Section'
import Container from '../../components/Container/Container'
import Worker from '../../components/Worker/Worker'
import ButtonFill from '../../components/Button/ButtonFill'
import PartnerSlider from '../../components/PartnerSlider/PartnerSlider'
// import styles from '../../styles/About.module.scss'
import AboutItems from '../../components/AboutSlider/AboutSlider'
import SwiperPhoto from '../../components/SwiperPhoto/SwiperPhoto'
import SwiperAbout from '../../components/SwiperAbout/SwiperAbout'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import FinalStaff from '../../data/StaffList'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper'
import Head from 'next/head'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

function index() {
  return (
    <>
      <Head>
        <title> Wayland | About</title>
        <meta name="description" content="Wayland official website" />
      </Head>
      <Section style="pt-32 pb-16">
        <Container style="flex flex-col relative">
          <div className="lg:block hidden absolute top-1/2 -translate-y-1/2 -left-[60px]">
            <SectionTitle title="Our focus" />
          </div>

          <div className="lg:hidden mb-4">
            <SectionTitle title="Our focus" />
          </div>
          <p className="md:w-[100%] lg:max-w-[300px] font-source text-primary font-light">
            Our mission is to create valuable technology that will shape the
            future of applied science and the history of nations. Our vision is
            to develop and deploy innovation leaders that create future
            technologies today.
          </p>
          <div className="flex justify-center flex-col md:flex-row">
            <div className="flex lg:pl-8 items-center lg:items-start justify-center w-full mt-4 flex-col lg:flex-col">
              <p className="font-mulish text-xl">
                Our experts work with fascinating
                <span className="text-w-red font-bold">{''} clients</span> that
              </p>
              <p className="pl-4 font-mulish text-2xl font-bold">
                have problems worth solving.
              </p>
            </div>
            <div className="w-[100%] md:ml-auto md:w-[50%]">
              <SwiperPhoto></SwiperPhoto>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container style={'relative'}>
          <div className="lg:block hidden absolute top-1/2 z-[100] -translate-y-1/2 -left-[60px]">
            <SectionTitle title="Our team" />
          </div>

          <div className="lg:hidden mb-4 z-[100]">
            <SectionTitle title="Our team" />
          </div>

          <div className="flex w-[100%] relative flex-col scrollbar-hide justify-between md:flex-row">
            {/* <div className="flex w-[50%] flex-wrap justify-around">
              {FinalStaff.map((worker, index) => (
                <Worker
                  style={`${
                    index % 2 ? 'relative top-[82px]' : 'flex-row-reverse'
                  }`}
                  align={`${index % 2 ? 'text-left' : 'text-right'}`}
                  key={worker.id}
                  info={worker}
                />
              ))}
            </div> */}

            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="w-[240px] h-[400px]"
            >
              <SwiperSlide className="flex bg-w-red shadow-md justify-center items-center drop-shadow-lg rounded-lg">
                <p className="text-3xl text-center font-bold font-source text-white">
                  Swipe to explore our team
                </p>
              </SwiperSlide>

              {FinalStaff.map((worker, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-white bg-light drop-shadow-2xl border-r-4 border-w-red text-white rounded-lg"
                >
                  <Worker key={worker[0].id} info={worker[0]} />
                  {worker[1]?.id && (
                    <Worker key={worker[1].id} info={worker[1]} />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-10 md:mt-0 md:w-[50%] lg:mt-0 flex justify-center items-center flex-col lg:max-w-[580px] lg:mx-auto">
              <div className="flex flex-col justify-center ">
                <p className="font-source text-primary font-light mt-3">
                  At Wayland, we are Building Better - from smart technologies
                  for rural medicine and cleantech, to world-class medical
                  robotics and AI applications. Together with partners like you,
                  our mission is to unite the world’s technologies and make them
                  accessible and useful to people everywhere. How can we help
                  you?
                </p>

                <p className="font-source text-primary font-light mt-3">
                  At Wayland, we are Building Better - from smart technologies
                  for rural medicine and cleantech, to world-class medical
                  robotics and AI applications. Together with partners like you,
                  our mission is to unite the world’s technologies and make them
                  accessible and useful to people everywhere. How can we help
                  you?
                </p>

                <ButtonFill
                  type="light"
                  style="max-w-[130px] mt-6 mx-auto md:mx-0"
                  link="/careers"
                  text="Join Us"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section style={'mt-12'}>
        <Container style={'relative'}>
          <div className="lg:hidden mb-4 z-[100]">
            <SectionTitle title="Our values" />
          </div>

          <div className="absolute top-1/2 right-[50px] -translate-x-[50px] z-[1000] -translate-y-1/2 hidden lg:block">
            <SectionTitle title="Our values" />
          </div>

          <div className="hidden lg:block">
            <AboutItems></AboutItems>
          </div>
          <div className="lg:hidden">
            <SwiperAbout></SwiperAbout>
          </div>
        </Container>
      </Section>
      <Section style={'mb-10'}>
        <Container style={'relative py-10'}>
          <PartnerSlider></PartnerSlider>
        </Container>
      </Section>
    </>
  )
}

export default index
