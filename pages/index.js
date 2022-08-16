/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Image from 'next/image'
// import Link from 'next/link'
import Head from 'next/head'
import Section from '../components/Section/Section'
import Container from '../components/Container/Container'
import Globe from '../public/assets/images/globe.svg'
// import Phone from '../public/assets/phone-animation.svg'
import Button from '../components/Button/Button'
import ButtonFill from '../components/Button/ButtonFill'
import ServiceSlider from '../components/ServiceSlider/ServiceSlider'
import EmbeddedIcon from '../public/assets/icons/embedded-systems.svg'
import DevopsIcon from '../public/assets/icons/devops.svg'
import AppDevelopmentIcon from '../public/assets/icons/app-development.svg'
import MachineLearning from '../public/assets/icons/machine-learning.svg'
import Particles from '../components/Particles/Particles'
import { motion } from 'framer-motion'
// import HomeHero from '../components/HomeHero/HomeHero'
import Lottie from 'lottie-react'
import PhoneAnimation from './../public/assets/phone-animation.json'

const Home = ({ name }) => {
  console.log('COMPONENT NAME', name)

  const cardVariants = {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1
      }
    }
  }

  return (
    <>
      <Head>
        <title> Wayland | Home</title>
        <meta name="description" content="Wayland official website" />
      </Head>

      <Section
        style={`flex items-center h-screen justify-center lg:block bg-[url('/assets/backgrounds/wayland-home.jpg')] bg-cover`}
      >
        <Container style="pt-12 h-full flex flex-col overflow-hidden items-center justify-center relative">
          <div className="absolute top-[45%] lg:top-[50%] -translate-y-2/4">
            {/* <HomeHero></HomeHero> */}
            {/* <Image
              src="/assets/home.svg"
              width="600"
              height="600"
              alt="Hero Image"
            ></Image> */}
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
                y: -200
              },
              visible: {
                scale: 1,
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1.3,
                  duration: 2
                }
              }
            }}
          >
            <h1 className="uppercase leading-normal text-center text-white text-4xl font-bold relative z-[50] lg:text-5xl">
              Systems engineering at <br /> the speed of innovation
            </h1>
          </motion.div>

          <Button text="Work with us" link="/contact" type="red"></Button>
        </Container>
      </Section>

      <Section style={`bg-white`}>
        <Container
          style={`min-h-[600px] z-100 lg:relative lg:max-h-[700px] py-[50px] md:py-[100px] lg:p-28 h-full justify-center lg:text-left lg:pt-14 lg:flex lg:justify-between xl:max-w-[65%] lg:gap-[50px] lg:items-center relative`}
        >
          <div className="mb-[50px] relative order-1 sm:w-full md:mb-[150px] lg:order-2 lg:mb-0 lg:max-w-[400px]">
            <div className="z-[20] relative">
              <div className="w-[3px] h-[54px] absolute -left-2 top-[5px] bg-gradient-to-b from-[#FF457E] to-[#B53BFF] opacity-80"></div>
              <p className="uppercase font-source text-primary font-light">
                Join the wayland hub
              </p>
              <h1 className="uppercase text-2xl md:text-4xl font-mulish font-bold leading-relaxed relative">
                SCALE SMARTER AND <br /> BUILD BETTER
              </h1>
              <p className="font-source text-primary font-light mt-3">
                At Wayland, we are Building Better for our clients every day.
                From top-tier medical robotics and AI applications to smart
                technologies for rural medicine and cleantech - companies come
                to Wayland to scale their teams and create market-ready IP. How
                can we help you?
              </p>

              <ButtonFill
                type="light"
                style="max-w-[130px] mt-6 mx-auto md:mx-0"
                link="/contact"
                text="Connect"
              />
            </div>
            <div className="w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] bg-secondary absolute rounded-full blur-[20px] top-2 right-0 md:left-16 md:-top-[50px] lg:left-[150px] lg:-top-[30px] z-[10] animate-pulse-slow"></div>
          </div>
          <div className="flex flex-col gap-3 relative order-2 md:flex-row lg:flex-row lg:order-1">
            <div className="gap-4 flex flex-col relative md:-top-[100px] lg:-top-[30px]">
              <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 1 }}
              >
                <motion.div
                  variants={cardVariants}
                  className="flex flex-col shadow-lg rounded-lg w-full py-20 gap-3 px-8 bg-white duration-300 cursor-default transform-gpu lg:max-w-[280px] lg:hover:scale-105 lg:py-24"
                >
                  <div className="flex relative">
                    <h1 className="uppercase font-bold font-mulish text-primary tracking-normal text-lg">
                      Embedded <br /> Systems
                    </h1>
                    <div className="absolute right-0 -top-10">
                      <Image
                        src={EmbeddedIcon}
                        width="50"
                        height="50"
                        alt="Embedded Icon"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-w-gray font-light font-source">
                    Complex embedded system engineering with applications in
                    surgical robotics and beyond.
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 1 }}
              >
                <motion.div
                  variants={cardVariants}
                  className="flex flex-col shadow-lg rounded-lg w-full py-20 gap-4 px-8 bg-white duration-300 cursor-default transform-gpu lg:max-w-[280px] lg:hover:scale-105 lg:py-24"
                >
                  <div className="flex relative">
                    <h1 className="uppercase font-bold font-mulish text-primary tracking-normal text-lg">
                      Machine <br /> Learning
                    </h1>
                    <div className="absolute right-0 -top-10">
                      <Image
                        src={MachineLearning}
                        width="50"
                        height="50"
                        alt="Level icon"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-w-gray font-light font-source">
                    Mobilize your data to create continuously smarter and more
                    valuable insights and applications.
                  </p>
                </motion.div>
              </motion.div>
            </div>
            <div className="gap-4 flex flex-col relative z-[50] lg:-bottom-[110px] ">
              <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 1 }}
              >
                <motion.div
                  variants={cardVariants}
                  className="flex flex-col shadow-lg rounded-lg z-[50] w-full py-20 gap-3 px-8 bg-white duration-300 cursor-default transform-gpu lg:max-w-[280px] lg:hover:scale-105 lg:py-24"
                >
                  <div className="flex relative">
                    <h1 className="uppercase font-bold font-mulish text-primary tracking-normal text-lg">
                      App
                      <br /> Development
                    </h1>
                    <div className="absolute right-0 -top-10">
                      <Image
                        src={AppDevelopmentIcon}
                        width="50"
                        height="50"
                        alt="Level icon"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-w-gray font-light font-source">
                    Wayland builds better apps. Intuitive, beautiful, and
                    well-crafted code for web, mobile, and desktop.
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 1 }}
              >
                <motion.div
                  variants={cardVariants}
                  className="flex flex-col shadow-lg rounded-lg w-full py-20 gap-3 px-8 bg-white duration-300 cursor-default transform-gpu lg:max-w-[280px] lg:hover:scale-105 lg:py-24"
                >
                  <div className="flex relative">
                    <h1 className="uppercase font-bold font-mulish text-primary tracking-normal text-lg">
                      Devops
                    </h1>
                    <div className="absolute right-0 -top-10">
                      <Image
                        src={DevopsIcon}
                        height="50"
                        width="50"
                        alt="Level icon"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-w-gray font-light font-source">
                    Deploying better to make your move to market secure,
                    well-tested, and responsive to feedback.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      <Section style={`bg-primary relative`}>
        <Container
          style={`overflow-hidden min-h-[600px] py-16 h-full lg:h-full flex justify-end`}
        >
          <div className="absolute -left-10 opacity-60 lg:opacity-100">
            <Particles quantity={600}></Particles>
            <Image src={Globe} alt="Globe animation"></Image>
          </div>

          <div className="z-30 flex flex-col w-full h-full justify-center gap-12 py-36 lg:w-6/12 gap-20">
            <div>
              <h1 className="font-mulish font-bold text-5xl text-white leading-[70px]">
                Industries Served
              </h1>
              <p className="font-mulish font-bold text-2xl text-w-white">
                Wayland specializes in complex applications.
              </p>
            </div>

            <ServiceSlider></ServiceSlider>
          </div>
        </Container>
      </Section>

      <Section style={`mb-12`}>
        <Container
          style={`min-h-[600px] h-full justify-center lg:h-full py-28 pb-0`}
        >
          <div className="flex flex-col-reverse justify-center gap-16 items-center h-full lg:flex-row">
            <div className="flex flex-col justify-center h-full w-full text-center lg:text-left lg:w-2/4">
              <h1 className="text-3xl text-w-white font-mulish font-bold uppercase leading-[40px]">
                Custom Software
              </h1>
              <p className="font-source text-md pt-10 lg:max-w-[500px] lg:text-xl">
                Deploy web applications, mobile apps (iOS & Android) and
                web-oriented projects on time and budget with a custom team from
                Wayland. You have options - either provide your own architecture
                and UI or our talented design team can create one for you. The
                market won't wait - let's move now.
              </p>
              <Button
                style="max-w-[200px] mx-auto lg:mx-0"
                text="Work with us"
                link="/contact"
                type="dark"
              ></Button>
            </div>
            <div className="flex flex-col justify-center w-full lg:h-full lg:w-2/4 relative">
              <Lottie animationData={PhoneAnimation} loop={true} />
            </div>
          </div>
        </Container>
      </Section>

      {/* <Section>
        <Container style="py-8">
          <h1 className="font-mulish font-bold text-4xl py-8 text-primary">
            News & Insights
          </h1>
          <div className="grid grid-cols-1 gap-4 gap-2 h-auto overflow-hidden sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 ">
            <div className="bg-green-300 min-h-[300px] relative flex items-center cursor-pointer overflow-hidden rounded-lg saturate-25 hover:saturate-100 transition-all duration-100">
              <Image
                src="/assets/blogs/blog-1.jpg"
                objectFit="cover"
                layout="fill"
                alt="Blog image"
                priority
              ></Image>

              <div className="w-full p-5 h-full flex flex-col justify-center z-50 relative">
                <h2 className="text-white font-mulish font-semibold text-xl">
                  Title of news: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </h2>

                <Link href="/">
                  <p className="text-white font-source font-normal z-50 absolute bottom-6">
                    Read blog
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-green-300 min-h-[300px] xl:col-span-2 relative flex justify-center cursor-pointer items-center overflow-hidden rounded-lg saturate-25 hover:saturate-100 transition-all duration-100">
              <Image
                src="/assets/blogs/blog-2.jpg"
                objectFit="cover"
                layout="fill"
                alt="Blog image"
                priority
              ></Image>
              <div className="w-full p-5 h-full flex flex-col justify-center z-50 relative">
                <h2 className="text-white font-mulish font-semibold text-xl ">
                  Title of news: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </h2>

                <Link href="/">
                  <p className="text-white font-source font-normal z-50 bottom-6 absolute xl:w-full xl:left-0 xl:bottom-6 xl:text-center">
                    Read blog
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-green-300 min-h-[300px] relative flex justify-center items-center cursor-pointer overflow-hidden rounded-lg saturate-25 hover:saturate-100 transition-all duration-100">
              <Image
                src="/assets/blogs/blog-3.jpg"
                objectFit="cover"
                layout="fill"
                alt="Blog image"
                priority
              ></Image>
              <div className="w-full p-5 h-full flex flex-col justify-center z-50 relative">
                <h2 className="text-white font-mulish font-semibold text-xl ">
                  Title of news: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </h2>

                <Link href="/">
                  <p className="text-white font-source font-normal z-50 absolute bottom-6">
                    Read blog
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-green-300 min-h-[300px] relative flex justify-center items-center cursor-pointer overflow-hidden rounded-lg saturate-25 hover:saturate-100 transition-all duration-100">
              <Image
                src="/assets/blogs/blog-4.jpg"
                objectFit="cover"
                layout="fill"
                alt="Blog image"
                priority
              ></Image>
              <div className="w-full p-5 h-full flex flex-col justify-center z-50 relative">
                <h2 className="text-white font-mulish font-semibold text-xl ">
                  Title of news: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </h2>

                <Link href="/">
                  <p className="text-white font-source font-normal z-50 absolute bottom-6">
                    Read blog
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-green-300 min-h-[300px] xl:col-span-2 relative flex justify-center cursor-pointer items-center overflow-hidden rounded-lg saturate-25 hover:saturate-100 transition-all duration-100">
              <Image
                src="/assets/blogs/blog-5.jpg"
                objectFit="cover"
                layout="fill"
                alt="Blog image"
                priority
              ></Image>
              <div className="w-full p-5 h-full flex flex-col justify-center z-50 relative">
                <h2 className="text-white font-mulish font-semibold text-xl ">
                  Title of news: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </h2>

                <Link href="/">
                  <p className="text-white font-source font-normal z-50 bottom-6 absolute xl:w-full xl:left-0 xl:bottom-6 xl:text-center">
                    Read blog
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-green-300 min-h-[300px] relative flex justify-center items-center cursor-pointer overflow-hidden rounded-lg saturate-25 hover:saturate-100 transition-all duration-100">
              <Image
                src="/assets/blogs/blog-1.jpg"
                objectFit="cover"
                layout="fill"
                alt="Blog image"
                priority
              ></Image>
              <div className="w-full p-5 h-full flex flex-col justify-center z-50 relative">
                <h2 className="text-white font-mulish font-semibold text-xl ">
                  Title of news: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </h2>

                <Link href="/">
                  <p className="text-white font-source font-normal z-50 absolute bottom-6">
                    Read blog
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section> */}
    </>
  )
}

export default Home
