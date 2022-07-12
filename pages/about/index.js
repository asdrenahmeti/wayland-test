import React from 'react'
import Section from '../../components/Section/Section'
import Container from '../../components/Container/Container'
import Worker from '../../components/Worker/Worker'
import ButtonFill from '../../components/Button/ButtonFill'
import PartnerSlider from '../../components/PartnerSlider/PartnerSlider'
import styles from '../../styles/About.module.scss'
import AboutItems from '../../components/AboutSlider/AboutSlider'
import SwiperPhoto from '../../components/SwiperPhoto/SwiperPhoto'

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

        <div className="lg:ml-auto lg:w-[45%]">
          <SwiperPhoto></SwiperPhoto>
        </div>

        <div className="flex relative flex-col overflow-hidden scrollbar-hide justify-between mt-8 lg:flex-row">
          <div className="flex w-full relative h-[400px] lg:w-[50%] overflow-hidden scrollbar-hide">
            <div
              className={`flex w-full pt-10 gap-4 top-0 left-0 absolute left-1/2 -translate-x-1/2 bg-white scrollbar-hide lg:w-[100%] ${styles.box}`}
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
          <div className="mt-10 lg:w-[50%] lg:mt-0 pl-16 flex justify-center items-center flex-col max-w-[580px]">
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
        <AboutItems></AboutItems>
        <PartnerSlider></PartnerSlider>
      </Container>
    </Section>
  )
}

export default index
