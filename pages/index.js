/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Section from '../components/Section/Section'
import Container from '../components/Container/Container'
import Globe from '../public/assets/images/globe.svg'
import Phone from '../public/assets/phone-animation.svg'
import Button from '../components/Button/Button'
import ButtonFill from '../components/Button/ButtonFill'

import ServiceSlider from '../components/ServiceSlider/ServiceSlider'
import Blog1 from '../public/assets/blogs/blog-1.jpg'
import Blog2 from '../public/assets/blogs/blog-2.jpg'
import Blog3 from '../public/assets/blogs/blog-3.jpg'
import Blog4 from '../public/assets/blogs/blog-4.jpg'
import Blog5 from '../public/assets/blogs/blog-5.jpg'
import LevelIcon from '../public/assets/icons/custom-1.svg'
import Particles from '../components/Particles/Particles'
import { motion } from 'framer-motion'

const Home = () => {
  
  return (
    <>
      <Head>
        <title> Wayland | Home</title>
      </Head>

      <Section
        style={`flex items-center h-screen justify-center lg:block bg-primary`}
      >
        <Container style="pt-12 h-full flex flex-col items-center justify-center relative">
          <div className="absolute w-full top-[50%] -translate-y-2/4 left-[50%] -translate-x-2/4"></div>

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
            <h1 className="uppercase leading-normal text-center text-white text-5xl font-bold relative z-[50]">
              Let&apos;s dive together <br /> into digital magic
            </h1>
          </motion.div>

          <Button text="Work with us" link="" type="red"></Button>
        </Container>
      </Section>

      <Section style={`bg-white`}>
        <Container
          style={`min-h-[600px] z-100 lg:relative lg:max-h-[700px] py-[50px] md:py-[100px] lg:p-28 h-full justify-center lg:text-left lg:pt-14 lg:flex lg:justify-between lg:items-center relative`}
        >
          <div className="mb-[50px] relative order-1 sm:w-full md:mb-[150px] lg:order-2 lg:mb-0 lg:max-w-[400px]">
            <div className="z-[20] relative">
              <p className="uppercase font-source text-primary font-light">
                Join the wayland hub
              </p>
              <h1 className="uppercase text-2xl md:text-4xl font-mulish font-bold leading-relaxed relative">
                Take your <br /> business to new <br /> levels
              </h1>
              <p className="font-source text-primary font-light">
                Wayland R&D is pursued so that research and education go hand in
                hand and where knowledge is contextually based on latest
                technologies and experience where engineers and trainers with an
                innovative attitude exchange and compare perspectives.
              </p>

              <ButtonFill type="light" style="max-w-[130px] mt-6 bg-blue-300" link="/contact" text="Connect" />
            </div>
            <div className="w-[150px] h-[150px] lg:w-[220px] lg:h-[220px] bg-secondary absolute rounded-full blur-[20px] top-0 left-20 md:left-16 md:-top-[50px] lg:left-[150px] lg:-top-[30px] z-[10] animate-pulse-slow"></div>
          </div>
          <div className="flex flex-col gap-3 relative order-2 md:flex-row lg:flex-row lg:order-1">
            <div className="gap-4 flex flex-col relative md:-top-[100px] lg:-top-[30px]">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.5
                    }
                  }
                }}
              >
                <div className="flex flex-col shadow-lg rounded-lg w-full py-20 gap-3 px-8 bg-white duration-300 cursor-default transform-gpu lg:max-w-[280px] lg:hover:scale-105 lg:py-24">
                  <div className="flex relative">
                    <h1 className="uppercase font-bold font-mulish text-primary tracking-normal text-lg">
                      Embeded <br /> System
                    </h1>
                    <div className="absolute right-0 -top-10">
                      <Image src={LevelIcon} alt="Level icon" />
                    </div>
                  </div>
                  <p className="text-sm text-w-gray font-light font-source">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus urna sapien. Write stuff here
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.7
                    }
                  }
                }}
              >
                <div className="flex flex-col shadow-lg rounded-lg w-full py-20 gap-4 px-8 bg-white duration-300 cursor-default transform-gpu lg:max-w-[280px] lg:hover:scale-105 lg:py-24">
                  <div className="flex relative">
                    <h1 className="uppercase font-bold font-mulish text-primary tracking-normal text-lg">
                      Brand <br /> Marketing
                    </h1>
                    <div className="absolute right-0 -top-10">
                      <Image src={LevelIcon} alt="Level icon" />
                    </div>
                  </div>
                  <p className="text-sm text-w-gray font-light font-source">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus urna sapien. Write stuff here
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="gap-4 flex flex-col relative z-[50] lg:-bottom-[80px] ">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.9
                    }
                  }
                }}
              >
                <div className="flex flex-col shadow-lg rounded-lg z-[50] w-full py-20 gap-3 px-8 bg-white duration-300 cursor-default transform-gpu lg:max-w-[280px] lg:hover:scale-105 lg:py-24">
                  <div className="flex relative">
                    <h1 className="uppercase font-bold font-mulish text-primary tracking-normal text-lg">
                      Custom <br /> Software
                    </h1>
                    <div className="absolute right-0 -top-10">
                      <Image src={LevelIcon} alt="Level icon" />
                    </div>
                  </div>
                  <p className="text-sm text-w-gray font-light font-source">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus urna sapien. Write stuff here
                  </p>
                </div>
              </motion.div>
              <motion.div
                exit={{ opacity: 0 }}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 1.1
                    }
                  }
                }}
              >
                <div className="flex flex-col shadow-lg rounded-lg w-full py-20 gap-3 px-8 bg-white duration-300 cursor-default transform-gpu lg:max-w-[280px] lg:hover:scale-105 lg:py-24">
                  <div className="flex relative">
                    <h1 className="uppercase font-bold font-mulish text-primary tracking-normal text-lg">
                      App <br /> Development
                    </h1>
                    <div className="absolute right-0 -top-10">
                      <Image src={LevelIcon} alt="Level icon" />
                    </div>
                  </div>
                  <p className="text-sm text-w-gray font-light font-source">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus urna sapien. Write stuff here
                  </p>
                </div>
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
                Our <br /> Industries
              </h1>
              <p className="font-mulish font-bold text-2xl text-w-white">
                Solving complex digital transformation.
              </p>
            </div>

            <ServiceSlider></ServiceSlider>
          </div>
        </Container>
      </Section>

      <Section style={``}>
        <Container
          style={`min-h-[600px] h-full justify-center lg:h-full py-28`}
        >
          <div className="flex flex-col-reverse justify-center gap-16 items-center h-full lg:flex-row">
            <div className="flex flex-col justify-center h-full w-full text-center lg:text-left lg:w-2/4">
              <h1 className="text-3xl text-w-white font-mulish font-bold leading-[40px]">
                We are telling the <br /> RIGHT STORIES
              </h1>
              <p className="font-source text-md pt-10 lg:max-w-[500px] lg:text-xl">
                Design web applications and any web-oriented projects. We are
                ready for projects with already-prepared designs as well as
                full-circle projects. We are willing to start working on your
                web idea. <span className="font-bold">With Wayland</span> you
                can also develop iOS and Android applications based on Java
                technologies.
              </p>
              <Button text="Work with us" link="" type="dark"></Button>
            </div>
            <div className="flex flex-col justify-center w-full lg:h-full lg:w-2/4 relative">
              <Image src={Phone} alt="Phone animation image"></Image>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container style="py-8">
          <h1 className="font-mulish font-bold text-4xl py-8 text-primary">
            News & Insights
          </h1>
          <div className="grid grid-cols-1 gap-4 gap-2 h-auto overflow-hidden sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 ">
            <div className="bg-green-300 min-h-[300px] relative flex items-center cursor-pointer overflow-hidden rounded-lg saturate-25 hover:saturate-100 transition-all duration-100">
              <Image
                src={Blog1}
                objectFit="cover"
                layout="fill"
                alt="Blog image"
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
                src={Blog2}
                objectFit="cover"
                layout="fill"
                alt="Blog image"
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
                src={Blog3}
                objectFit="cover"
                layout="fill"
                alt="Blog image"
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
                src={Blog4}
                objectFit="cover"
                layout="fill"
                alt="Blog image"
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
                src={Blog5}
                objectFit="cover"
                layout="fill"
                alt="Blog image"
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
                src={Blog1}
                objectFit="cover"
                layout="fill"
                alt="Blog image"
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
      </Section>
    </>
  )
}

export default Home
