import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Section from '../components/Section/Section'
import Container from '../components/Container/Container'
import Globe from '../public/assets/images/globe.svg'
import Phone from '../public/assets/phone-animation.svg'
import HomeRobot from '../public/assets/images/home-robot.svg'
import Button from '../components/Button/Button'
import ButtonFill from '../components/Button/ButtonFill'
import Bubles from '../components/Bubles/Bubles'
import Draggable from '../components/Draggable/Draggable'
import ServiceSlider from '../components/ServiceSlider/ServiceSlider'
import Blog1 from '../public/assets/blogs/blog-1.jpg'
import Blog2 from '../public/assets/blogs/blog-2.jpg'
import Blog3 from '../public/assets/blogs/blog-3.jpg'
import Blog4 from '../public/assets/blogs/blog-4.jpg'
import Blog5 from '../public/assets/blogs/blog-5.jpg'
import Particles from '../components/Particles/Particles'

const Home = () => {
  let texts = ['APPS', 'SOFTWARE', 'WORLD']
  let count = 0
  let index = 0
  let currentText = ''
  let fullText = ''
  let action = true
  const switchyOne = useRef()
  const switchyTwo = useRef()

  const type = () => {
    if (action) {
      if (count === texts.length) {
        count = 0
      }
      fullText = texts[count]
      currentText = fullText.slice(0, ++index)

      switchyOne.current.innerHTML = currentText
      switchyTwo.current.innerHTML = currentText
      if (currentText.length === fullText.length) {
        action = false
      }
    } else {
      currentText = fullText.slice(0, --index)
      switchyOne.current.innerHTML = currentText
      switchyTwo.current.innerHTML = currentText
      if (currentText.length === 0) {
        count++
        index = 0
        action = true
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      type()
    }, 200)

    return () => clearInterval(interval) // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  })

  return (
    <>
      <Head>
        <title> Wayland | Home</title>
      </Head>

      <Section style={`hidden lg:block`}>
        <Draggable>
          <Container
            style={`min-h-[600px] h-[85vh] relative justify-center lg:text-left lg:flex lg:justify-between lg:items-center`}
          >
            <div className="flex gap-3 flex-1 absolute -translate-y-1/2 z-50">
              <h1 className="text-white text-4xl font-mulish font-bold">
                BUILDING BETTER
              </h1>
              <h1
                ref={switchyOne}
                className="text-w-red text-4xl font-mulish font-bold"
              >
                APPS
              </h1>
            </div>
            <Bubles count={50} height={600} width={600}>
              <Image src={HomeRobot} objectFit="contain" layout="fill"></Image>
            </Bubles>
          </Container>
        </Draggable>
      </Section>

      <Section style={`h-[550px] block bg-primary lg:hidden`}>
        <Container
          style={`h-[550px] relative py-28 px-6 bg-primary relative justify-center lg:text-left lg:flex lg:justify-between lg:items-center`}
        >
          <h1 className="text-white text-4xl font-mulish font-bold">
            BUILDING
            <br />
            BETTER
          </h1>
          <h1
            ref={switchyTwo}
            className="text-white text-4xl font-mulish font-bold relative after:content-[' '] after:w-[2px] after:bg-w-pink-2 after:h-[28px] after:relative after:top-[1px] after:inline-block after:ml-1"
          >
            APPS
          </h1>

          <div className="absolute left-2/4 w-[300px] h-[250px] bottom-[50px] -translate-x-2/4">
            <Image src={HomeRobot} objectFit="contain" layout="fill"></Image>
          </div>
        </Container>
      </Section>

      <Section style={`relative sm:hidden`}>
        <Container
          style={`flex justify-center items-center overflow-hidden h-[400px] relative`}
        >
          <div className="w-[220px] h-[220px] bg-secondary absolute rounded-full blur-[20px] -left-32 bottom-10 animate-pulse-slow"></div>
          <div className="w-[220px] h-[220px] bg-secondary absolute opacity-50 rounded-full blur-[20px] -right-32 top-10 animate-pulse-slow"></div>

          <div className=" w-[100%] relative z-50 flex flex-col justify-center px-6 gap-5 text-primary ">
            <p className="uppercase font-source font-normal text-xl">
              Join the wayland hub
            </p>

            <h1 className="font-mulish uppercase font-bold text-2xl">
              LET US TAKE YOUR BUSINESS TO NEW LEVELS
            </h1>
          </div>
        </Container>
      </Section>

      <Section style={`bg-primary`}>
        <Container
          style={`min-h-[600px] lg:relative pt-16 lg:p-28 h-full justify-center lg:text-left lg:flex lg:justify-between lg:items-center relative`}
        >
          <div className="grid gap-10 text-left w-full sm:grid-cols-2 md:text-left lg:grid-cols-2">
            <div className="flex flex-col lg:max-w-[220px] 2xl:max-w-[350px]">
              <h1 className="uppercase font-mulish relative text-md font-bold text-white mb-2">
                Embeded <br /> System{' '}
                <span className="w-[2px] absolute top-0 bottom-0 left-24 bg-w-pink-2 h-full lg:hidden"></span>
              </h1>
              <p className="max-w-[200px] font-source text-base text-white font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                urna sapien. Write stuff here
              </p>
            </div>

            <div className="flex flex-col ml-auto lg:ml-0 lg:pl-0 lg:max-w-[220px] 2xl:max-w-[350px]">
              <h1 className="uppercase font-mulish text-md font-bold text-white mb-2">
                Embeded <br /> System
              </h1>
              <p className="max-w-[200px] font-source text-base text-white font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                urna sapien. Write stuff here
              </p>
            </div>

            <div className="flex flex-col lg:max-w-[220px] 2xl:max-w-[350px]">
              <h1 className="uppercase font-mulish relative text-md font-bold text-white mb-2">
                Embeded <br /> System{' '}
                <span className="w-[2px] absolute top-0 bottom-0 left-24 bg-w-pink-2 h-full lg:hidden"></span>
              </h1>
              <p className="max-w-[200px] font-source text-base text-white font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                urna sapien. Write stuff here
              </p>
            </div>

            <div className="flex flex-col ml-auto lg:ml-0 lg:pl-0 lg:max-w-[220px] 2xl:max-w-[350px]">
              <h1 className="uppercase font-mulish text-md font-bold text-white mb-2">
                Embeded <br /> System
              </h1>
              <p className="max-w-[200px] font-source text-base text-white font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                urna sapien. Write stuff here
              </p>
            </div>

            <div className="text-white hidden relative lg:-top-10 lg:block sm:col-span-2 sm:text-left lg:col-start-3 lg:max-w-[400px] lg:justify-self-end lg:col-end-5 lg:row-start-1 lg:row-end-3">
              <p className="uppercase pl-3 font-lightfont-source text-sm">
                Join the wayland hub
              </p>
              <h1 className="uppercase pl-3 font-mulish my-5 text-3xl font-bold">
                Let us take your business to new <br /> level
              </h1>
              <p className="border-l-2 pl-3 border-w-red h-[40px] font-source text-sm text-normal">
                Wayland R&D is pursued so that research and education go hand in
                hand and where knowledge is contextually based on latest
                technologies and experience where engineers and trainers with an
                innovative attitude exchange and compare perspectives.
              </p>
            </div>
          </div>

          <div className="mt-10 h-[200px] relative top-[40px] left-0 w-full lg:absolute lg:w-[100%] lg:top-[400px] lg:right-0 lg:max-w-[150px] lg:ml-auto lg:-translate-x-[150%]">
            <div className="relative w-[200px] h-[200px] relative bg-secondary rounded-full blur-xl mx-auto block animate-pulse-slow lg:mx-0"></div>
            <div className="w-[90%] lg:w-[200px] p-[24px] mx-auto bg-primary gap-10 -top-[150px] relative rounded-xl flex flex-col pt-5 justify-between items-center font-mulish font-bold text-3xl text-white lg:mx-0">
              Reach out
              <br />
              to us
              <ButtonFill link="/connect" type="light" text="Connect" />
            </div>
          </div>
        </Container>
      </Section>

      <Section style={``}>
        <Container
          style={`min-h-[600px] h-full justify-center lg:h-full py-28`}
        >
          <div className="flex flex-col-reverse justify-center gap-16 items-center h-full lg:flex-row">
            <div className="flex flex-col justify-center h-full w-full lg:w-2/4">
              <h1 className="text-3xl text-w-white font-mulish font-bold leading-[40px]">
                We are telling the <br /> RIGHT STORIES
              </h1>
              <p className="font-source text-md pt-10 max-w-[500px] lg:text-xl">
                Design web applications and any web-oriented projects. We are
                ready for projects with already-prepared designs as well as
                full-circle projects. We are willing to start working on your
                web idea. <span className="font-bold">With Wayland</span> you
                can also develop iOS and Android applications based on Java
                technologies.
              </p>
              <Button text="Work with us" link="" type="dark"></Button>
            </div>
            <div className="flex flex-col justify-center w-full h-full lg:w-2/4 relative">
              <Image src={Phone}></Image>
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
            <Image src={Globe}></Image>
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
      <Section>
        <Container>
          <h1 className="font-mulish font-bold text-4xl py-8 text-primary">
            News & Insights
          </h1>
          <div className="grid grid-cols-1 gap-4 gap-2 h-auto overflow-hidden sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 ">
            <div className="bg-green-300 min-h-[300px] relative flex items-center cursor-pointer overflow-hidden rounded-lg saturate-25 hover:saturate-100 transition-all duration-100">
              <Image src={Blog1} objectFit="cover" layout="fill"></Image>

              <div className="w-full p-5 h-full flex flex-col justify-center z-50 relative">
                <h2 className="text-white font-mulish font-semibold text-xl">
                  Title of news: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </h2>

                <Link href="">
                  <p className="text-white font-source font-normal z-50 absolute bottom-6">
                    Read blog
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-green-300 min-h-[300px] xl:col-span-2 relative flex justify-center cursor-pointer items-center overflow-hidden rounded-lg saturate-25 hover:saturate-100 transition-all duration-100">
              <Image src={Blog2} objectFit="cover" layout="fill"></Image>
              <div className="w-full p-5 h-full flex flex-col justify-center z-50 relative">
                <h2 className="text-white font-mulish font-semibold text-xl ">
                  Title of news: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </h2>

                <Link href="">
                  <p className="text-white font-source font-normal z-50 bottom-6 absolute xl:w-full xl:left-0 xl:bottom-6 xl:text-center">
                    Read blog
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-green-300 min-h-[300px] relative flex justify-center items-center cursor-pointer overflow-hidden rounded-lg saturate-25 hover:saturate-100 transition-all duration-100">
              <Image src={Blog3} objectFit="cover" layout="fill"></Image>
              <div className="w-full p-5 h-full flex flex-col justify-center z-50 relative">
                <h2 className="text-white font-mulish font-semibold text-xl ">
                  Title of news: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </h2>

                <Link href="">
                  <p className="text-white font-source font-normal z-50 absolute bottom-6">
                    Read blog
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-green-300 min-h-[300px] relative flex justify-center items-center cursor-pointer overflow-hidden rounded-lg saturate-25 hover:saturate-100 transition-all duration-100">
              <Image src={Blog4} objectFit="cover" layout="fill"></Image>
              <div className="w-full p-5 h-full flex flex-col justify-center z-50 relative">
                <h2 className="text-white font-mulish font-semibold text-xl ">
                  Title of news: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </h2>

                <Link href="">
                  <p className="text-white font-source font-normal z-50 absolute bottom-6">
                    Read blog
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-green-300 min-h-[300px] xl:col-span-2 relative flex justify-center cursor-pointer items-center overflow-hidden rounded-lg saturate-25 hover:saturate-100 transition-all duration-100">
              <Image src={Blog5} objectFit="cover" layout="fill"></Image>
              <div className="w-full p-5 h-full flex flex-col justify-center z-50 relative">
                <h2 className="text-white font-mulish font-semibold text-xl ">
                  Title of news: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </h2>

                <Link href="">
                  <p className="text-white font-source font-normal z-50 bottom-6 absolute xl:w-full xl:left-0 xl:bottom-6 xl:text-center">
                    Read blog
                  </p>
                </Link>
              </div>
            </div>
            <div className="bg-green-300 min-h-[300px] relative flex justify-center items-center cursor-pointer overflow-hidden rounded-lg saturate-25 hover:saturate-100 transition-all duration-100">
              <Image src={Blog1} objectFit="cover" layout="fill"></Image>
              <div className="w-full p-5 h-full flex flex-col justify-center z-50 relative">
                <h2 className="text-white font-mulish font-semibold text-xl ">
                  Title of news: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </h2>

                <Link href="">
                  <p className="text-white font-source font-normal z-50 absolute bottom-6">
                    Read blog
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="text-w-red font-mulish font-bold text-lg p-4">
                DISCOVER
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Home
