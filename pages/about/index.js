import React from 'react'
import Image from 'next/image'
import Section from '../../components/Section/Section'
import Container from '../../components/Container/Container'
import Worker from '../../components/Worker/Worker'
import ButtonFill from '../../components/Button/ButtonFill'
import PartnerSlider from '../../components/PartnerSlider/PartnerSlider'
import styles from '../../styles/About.module.scss'
import AboutItems from '../../components/AboutSlider/AboutSlider'
import SwiperPhoto from '../../components/SwiperPhoto/SwiperPhoto'
import SwiperAbout from '../../components/SwiperAbout/SwiperAbout'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Asdren from './../../public/assets/staff/asdren.png'

function index() {
  return (
    <Section style="pt-32 pb-16">
      <Container style="flex flex-col">
        <p className="md:max-w-[300px] lg:text-xs lg:font-light">
          Our mission is to create valuable technology that will shape the
          future of applied science and the history of nations. Our vision is to
          develop and deploy innovation leaders that create future technologies
          today.
        </p>
        <div className="flex justify-center flex-col lg:flex-row">
          <div className="flex lg:items-center w-full mt-4 flex-col lg:flex-row">
            <SectionTitle title="Our experts" />

            <div className="flex max-w-[100px]">
              <div className="flex relative z-[20]">
                <div className="w-[35px] h-[35px] bg-white rounded-full relative border border-w-orange overflow-hidden">
                  <Image
                    src={Asdren}
                    layout="fill"
                    objectFit="cover"
                    alt="Profile picture"
                  ></Image>
                </div>
              </div>
              <div className="flex relative -left-[10px] z-[10]">
                <div className="w-[35px] h-[35px] bg-white rounded-full relative border border-w-orange overflow-hidden">
                  <Image
                    src={Asdren}
                    layout="fill"
                    objectFit="cover"
                    alt="Profile picture"
                  ></Image>
                </div>
              </div>
              <div className="flex relative -left-[20px] z-[20]">
                <div className="w-[35px] h-[35px] bg-white rounded-full relative border border-w-red overflow-hidden">
                  <Image
                    src={Asdren}
                    layout="fill"
                    objectFit="cover"
                    alt="Profile picture"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:ml-auto lg:w-[50%]">
            <SwiperPhoto></SwiperPhoto>
          </div>
        </div>

        <div className="flex relative md:h-[450px] flex-col overflow-x-hidden scrollbar-hide justify-between mt-8 md:flex-row">
          <div className="flex w-full relative md:h-[450px] h-[400px] md:w-[50%] overflow-x-hidden scrollbar-hide">
            <div
              className={`flex w-full p-20 gap-4 top-0 justify-around lg:justify-between left-0 absolute left-1/2 -translate-x-1/2 bg-white scrollbar-hide lg:w-[100%] lg:justify-start ${styles.box}`}
            >
              <div className={`relative bg-white`}>
                <Worker
                  info={{
                    name: 'Veton Vela',
                    email: 'veton@wayland.io',
                    position: 'CEO'
                  }}
                  direction="reverse"
                ></Worker>
                <Worker
                  info={{
                    name: 'Veton Vela',
                    email: 'veton@wayland.io',
                    position: 'CEO'
                  }}
                  direction="reverse"
                ></Worker>
                <Worker
                  info={{
                    name: 'Veton Vela',
                    email: 'veton@wayland.io',
                    position: 'CEO'
                  }}
                  direction="reverse"
                ></Worker>
                <Worker
                  info={{
                    name: 'Veton Vela',
                    email: 'veton@wayland.io',
                    position: 'CEO'
                  }}
                  direction="reverse"
                ></Worker>
              </div>
              <div className={`relative top-[70px]`}>
                <Worker
                  info={{
                    name: 'Veton Vela',
                    email: 'veton@wayland.io',
                    position: 'CEO'
                  }}
                  direction=""
                ></Worker>
                <Worker
                  info={{
                    name: 'Veton Vela',
                    email: 'veton@wayland.io',
                    position: 'CEO'
                  }}
                  direction=""
                ></Worker>
                <Worker
                  info={{
                    name: 'Veton Vela',
                    email: 'veton@wayland.io',
                    position: 'CEO'
                  }}
                  direction=""
                ></Worker>
                <Worker
                  info={{
                    name: 'Veton Vela',
                    email: 'veton@wayland.io',
                    position: 'CEO'
                  }}
                  direction=""
                ></Worker>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-[45%] lg:mt-0 flex justify-center items-center flex-col lg:max-w-[580px]">
            <div className="flex flex-col justify-center ">
              <p className="font-source text-primary font-light mt-3">
                At Wayland, we are Building Better - from smart technologies for
                rural medicine and cleantech, to world-class medical robotics
                and AI applications. Together with partners like you, our
                mission is to unite the world’s technologies and make them
                accessible and useful to people everywhere. How can we help you?
              </p>

              <p className="font-source text-primary font-light mt-3">
                At Wayland, we are Building Better - from smart technologies for
                rural medicine and cleantech, to world-class medical robotics
                and AI applications. Together with partners like you, our
                mission is to unite the world’s technologies and make them
                accessible and useful to people everywhere. How can we help you?
              </p>

              <ButtonFill
                type="light"
                style="max-w-[130px] mt-6 mx-auto md:mx-0"
                link="/contact"
                text="Join Us"
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <AboutItems></AboutItems>
        </div>
        <div className="lg:hidden">
          <SwiperAbout></SwiperAbout>
        </div>
        <PartnerSlider></PartnerSlider>
      </Container>
    </Section>
  )
}

export default index
