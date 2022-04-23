import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Section from '../components/Section/Section'
import Container from '../components/Container/Container'
import Blog1 from '../public/assets/images/blog-1.jpg'
import Globe from '../public/assets/images/globe.svg'
import Phone from '../public/assets/images/phone.svg'
import HomeRobot from '../public/assets/images/home-robot.svg'
import Button from '../components/Button/Button'
import Bubles from '../components/Bubles/Bubles'
import Draggable from '../components/Draggable/Draggable'

const Home = () => {
  let texts = ['APPS', 'SOFTWARE', 'WORLD']
  let count = 0
  let index = 0
  let currentText = ''
  let fullText = ''
  let action = true
  const switchy = useRef()

  const type = () => {
    if (action) {
      if (count === texts.length) {
        count = 0
      }
      fullText = texts[count]
      currentText = fullText.slice(0, ++index)

      switchy.current.innerHTML = currentText
      if (currentText.length === fullText.length) {
        action = false
      }
    }
    else {
      currentText = fullText.slice(0, --index)
      switchy.current.innerHTML = currentText
      if(currentText.length === 0) {
        count++
        index = 0
        action = true
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      type()
    }, 400)

    return () => clearInterval(interval) // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  })

  return (
    <>
      <Head>
        <title> Wayland | Home</title>
      </Head>

      <Section style={``}>
        <Draggable>
          <Container
            style={`min-h-[600px] h-[85vh] relative justify-center lg:text-left lg:flex lg:justify-between lg:items-center`}
          >
            <div className="flex gap-3 flex-1 absolute -translate-y-1/2 z-50">
              <h1 className="text-white text-5xl font-mulish font-bold">
                BUILDING BETTER
              </h1>
              <h1
                ref={switchy}
                className="text-w-red text-5xl font-mulish font-bold"
              >
                APPS
              </h1>
            </div>
            <Bubles count={20} height={600} width={600}>
              <Image src={HomeRobot} objectFit="contain" layout="fill"></Image>
            </Bubles>
          </Container>
        </Draggable>
      </Section>

      <Section
        style={`bg-primary bg-[url('./../public/assets/backgrounds/services.svg')] bg-no-repeat bg-[right_bottom_-10rem]`}
      >
        <Container
          style={`min-h-[600px] p-28 h-full justify-center lg:text-left lg:flex lg:justify-between lg:items-center`}
        >
          <div className="grid gap-10 text-center w-full sm:grid-cols-2 md:text-left lg:grid-cols-2">
            <div className="flex flex-col 2xl:max-w-[350px]">
              <h1 className="uppercase font-mulish text-md font-bold text-white">
                Embeded System
              </h1>
              <p className="font-source text-base text-white font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                urna sapien. Write stuff here
              </p>
            </div>

            <div className="flex flex-col 2xl:max-w-[350px]">
              <h1 className="uppercase font-mulish text-md font-bold text-white">
                Embeded System
              </h1>
              <p className="font-source text-base text-white font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                urna sapien. Write stuff here
              </p>
            </div>

            <div className="flex flex-col 2xl:max-w-[350px]">
              <h1 className="uppercase font-mulish text-md font-bold text-white">
                Embeded System
              </h1>
              <p className="font-source text-base text-white font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                urna sapien. Write stuff here
              </p>
            </div>

            <div className="flex flex-col 2xl:max-w-[350px]">
              <h1 className="uppercase font-mulish text-md font-bold text-white">
                Embeded System
              </h1>
              <p className="font-source text-base text-white font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                urna sapien. Write stuff here
              </p>
            </div>

            <div className="text-white sm:col-span-2 sm:text-left lg:col-start-3 lg:max-w-[400px] lg:justify-self-end lg:col-end-5 lg:row-start-1 lg:row-end-3">
              <p className="uppercase font-light font-source text-sm">
                Join the wayland hub
              </p>
              <h1 className="uppercase font-mulish text-3xl font-bold">
                Let us take your business to new level
              </h1>
              <p className="font-source text-sm text-normal">
                Wayland R&D is pursued so that research and education go hand in
                hand and where knowledge is contextually based on latest
                technologies and experience where engineers and trainers with an
                innovative attitude exchange and compare perspectives.
              </p>
              <p>Reach out to us</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section style={``}>
        <Container
          style={`min-h-[600px] h-full justify-center lg:h-full py-28`}
        >
          <div className="flex flex-col justify-center gap-16 items-center h-full lg:flex-row">
            <div className="flex flex-col justify-center h-full w-full lg:w-2/4">
              <h1 className="text-5xl text-w-white font-mulish font-bold leading-[60px]">
                We are telling the <br /> RIGHT STORIES
              </h1>
              <p className="font-source text-xl pt-10 max-w-[500px]">
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
          style={`overflow-hidden min-h-[600px] h-full lg:h-full flex justify-end`}
        >
          <div className="absolute -left-10 top-16 opacity-60 lg:opacity-100">
            <Image src={Globe}></Image>
          </div>

          <div className="z-30 flex flex-col w-full h-full justify-center gap-12 py-36 lg:w-5/12 gap-20">
            <div>
              <h1 className="font-mulish font-bold text-5xl text-white leading-[70px]">
                Our <br /> Industries
              </h1>
              <p className="font-mulish font-bold text-2xl text-w-white">
                Solving complex digital transformation.
              </p>
            </div>
            <div>
              <p className="font-mulish font-bold text-md text-white">
                Let’s get the conversation started, and see if we are the right
                company <br /> for what YOU need.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container style={`lg: h-screen`}>
          <h1 className="font-mulish font-bold text-4xl py-8 text-primary">
            News & Insights
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-2 h-[75vh]">
            <div className="bg-green-300 min-h-[300px] relative flex justify-center items-center cursor-pointer overflow-hidden rounded-lg saturate-50 hover:saturate-100">
              <Image src={Blog1} objectFit="cover" layout="fill"></Image>
              <h2 className="absolute text-white font-mulish text-2xl max-w-[80%]">
                Title of news: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </h2>
            </div>
            <div className="bg-green-300 min-h-[300px] xl:col-span-2 relative flex justify-center cursor-pointer items-center overflow-hidden rounded-lg saturate-50 hover:saturate-100">
              <Image src={Blog1} objectFit="cover" layout="fill"></Image>
              <h2 className="absolute text-white font-mulish text-2xl max-w-[80%]">
                Title of news: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </h2>
            </div>
            <div className="bg-green-300 min-h-[300px] relative flex justify-center items-center cursor-pointer overflow-hidden rounded-lg saturate-50 hover:saturate-100">
              <Image src={Blog1} objectFit="cover" layout="fill"></Image>
              <h2 className="absolute text-white font-mulish text-2xl max-w-[80%]">
                Title of news: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </h2>
            </div>
            <div className="bg-green-300 min-h-[300px] relative flex justify-center items-center cursor-pointer overflow-hidden rounded-lg saturate-50 hover:saturate-100">
              <Image src={Blog1} objectFit="cover" layout="fill"></Image>
              <h2 className="absolute text-white font-mulish text-2xl max-w-[80%]">
                Title of news: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </h2>
            </div>
            <div className="bg-green-300 min-h-[300px] xl:col-span-2 relative flex justify-center cursor-pointer items-center overflow-hidden rounded-lg saturate-50 hover:saturate-100">
              <Image src={Blog1} objectFit="cover" layout="fill"></Image>
              <h2 className="absolute text-white font-mulish text-2xl max-w-[80%]">
                Title of news: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </h2>
            </div>
            <div className="bg-green-300 min-h-[300px] relative flex justify-center items-center cursor-pointer overflow-hidden rounded-lg saturate-50 hover:saturate-100">
              <Image src={Blog1} objectFit="cover" layout="fill"></Image>
              <h2 className="absolute text-white font-mulish text-2xl max-w-[80%]">
                Title of news: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </h2>
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
