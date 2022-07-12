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

const wave1 =
  'M0.5 96.4301C141.87 80.0281 79.4668 88.0811 220.5 69C313.022 56.4822 502.632 29.5221 595.5 19.9065C684.039 10.7391 734.045 9.10302 823 5.90647C948.082 1.41169 1018.61 -2.4093 1143.5 5.90647C1256.23 13.413 1319.48 21.4561 1430.5 42.4065'

const wave1animation =
  'M0.5,96.4301c141.37-16.402,69.827155-16.391189,210.860355-35.472289c92.522-12.5178,290.318201-8.935711,383.186201-18.551311c88.539-9.1674,141.592714-14.821776,230.547714-18.018326c125.082-4.49478,193.106848,9.702556,317.996848,18.018326c112.73,7.50653,176.388882-20.9504,287.408882,0'

const wave2 =
  'M-1 84.9062C66.4422 93.286 104.573 96.253 172.5 98.4062C287.182 102.042 351.666 94.5565 466 84.9062C517.828 80.5317 546.806 77.1523 598.5 71.4062C686.335 61.6429 735.357 54.2646 823 42.9062C913.047 31.2363 963.092 20.8363 1053.5 12.4062C1131.99 5.0875 1176.17 -0.0806056 1255 0.406231C1326.42 0.847333 1366.63 3.49133 1437.5 12.4062'

const wave2animation =
  'M-1,84.9062c67.4422,8.3798,105.239477-2.1532,173.166477,0c114.682,3.6358,175.889489-14.761944,290.223489-24.412244c51.828-4.3745,97.516946,30.158344,149.210946,24.412244c87.835-9.7633,122.236134-13.053844,209.879134-24.412244c90.047-11.6699,142.426663-14.52543,232.834663-22.95553c78.49-7.3187,134.328495,11.974737,213.158495,12.461574c71.42.441102,99.156796-46.50867,170.026796-37.5938'

function index() {
  return (
    <Section style="pt-32 pb-16">
      <Container style="flex flex-col">
        <div className="w-full h-[400px]">
          <svg
            width="100%"
            height="200"
            viewBox="0 0 1431 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={`${wave1}`}
              fill="none"
              stroke="black"
              strokeOpacity="0.6"
              strokeWidth="0.5"
            >
              <animate
                attributeName="d"
                values={`${wave1};${wave1animation};${wave1}`}
                dur="5s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
          <svg
            className="relative -top-[150px]"
            width="100%"
            height="200"
            viewBox="0 0 1431 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={`${wave2}`}
              fill="none"
              stroke="black"
              strokeOpacity="0.6"
              strokeWidth="0.5"
            >
              <animate
                attributeName="d"
                values={`${wave2};${wave2animation};${wave2}`}
                dur="5s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        <p className="md:max-w-[300px] lg:text-xs lg:font-light">
          Our mission is to create valuable technology that will shape the
          future of applied science and the history of nations. Our vision is to
          develop and deploy innovation leaders that create future technologies
          today.
        </p>

        <div className="lg:ml-auto lg:w-[45%]">
          <SwiperPhoto></SwiperPhoto>
        </div>

        <div className="flex relative md:h-[450px] flex-col overflow-hidden scrollbar-hide justify-between mt-8 md:flex-row">
          <div className="flex w-full relative md:h-[450px] h-[400px] md:w-[50%] overflow-hidden scrollbar-hide">
            <div
              className={`flex w-full pt-10 gap-4 top-0 justify-around lg:justify-between left-0 absolute left-1/2 -translate-x-1/2 bg-white scrollbar-hide lg:w-[100%] lg:justify-start ${styles.box}`}
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
          <div className="mt-10 md:mt-0 md:w-[45%] lg:mt-0 lg:pl-16 flex justify-center items-center flex-col lg:max-w-[580px]">
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
