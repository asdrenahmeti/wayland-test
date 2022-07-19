import React from 'react'
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

function index() {
  return (
    <>
      <Section style="pt-32 pb-16">
        <Container style="flex flex-col relative">
          <div className="lg:block hidden absolute top-1/2 -translate-y-1/2 -left-[60px]">
            <SectionTitle title="Our experts" />
          </div>

          <div className="lg:hidden mb-4">
            <SectionTitle title="Our experts" />
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
                Work with fascinating{' '}
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

          <div className="flex relative md:h-[450px] flex-col overflow-x-hidden scrollbar-hide justify-between md:flex-row">
            <div className="flex w-full relative md:h-[450px] h-[400px] md:w-[50%] overflow-x-hidden scrollbar-hide">
              <div
                className={`flex w-full gap-4 top-0 justify-around items-center left-0 absolute left-1/2 -translate-x-1/2 bg-white scrollbar-hide lg:w-[100%] lg:justify-start lg:justify-center ${styles.box}`}
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
                  link="/contact"
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
