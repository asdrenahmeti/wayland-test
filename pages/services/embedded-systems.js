/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import Container from '../../components/Container/Container'
import Section from '../../components/Section/Section'
import { AiFillCheckCircle } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import EmbeddedList from '../../data/EmbeddedList'
import Button from '../../components/Button/Button'
import ServiceCard from '../../components/ServiceCard/ServiceCard'

function index() {
  return (
    <>
      <Section style={'pt-32 pb-8 scroll-smooth'}>
        <Container>
          <div className="flex-col flex lg:flex-row justify-between items-center">
            <div className="mb-8">
              <h1 className="font-mulish font-bold text-4xl mb-4">
                Embedded Systems <br /> Engineering
              </h1>
              <p className="font-source font-light">
                Your project team needs affordable custom embedded <br />{' '}
                systems engineering support – problem solved.
              </p>
            </div>

            <div className="relative w-full lg:w-[45%] h-[400px]">
              <Image
                src="/assets/services/embedded-photos.png"
                layout="fill"
                objectFit="contain"
                alt="Embedded Images"
              ></Image>
              {/* <div className="absolute left-[100px] w-[130px] h-[170px] lg:w-[170px] lg:h-[200px]">
                <Image
                  src="/assets/services/embedded-photo-1.png"
                  alt="Service Photo"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
              <div className="absolute top-[30%] z-[100] w-[130px] h-[170px] lg:w-[170px] lg:h-[200px]">
                <Image
                  src="/assets/services/embedded-photo-2.png"
                  alt="Service Photo"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
              <div className="absolute top-[60%] left-[128px] lg:left-[170px] z-[200] w-[130px] h-[170px] lg:w-[170px] lg:h-[200px]">
                <Image
                  src="/assets/services/embedded-photo-3.png"
                  alt="Service Photo"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
              <div className="absolute top-[28%] lg:top-[20%] left-[180px] lg:left-[270px] z-[100] w-[130px] h-[170px] lg:w-[170px] lg:h-[200px]">
                <Image
                  src="/assets/services/embedded-photo-4.png"
                  alt="Service Photo"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div> */}
            </div>
          </div>
        </Container>
        <div className="relative h-[80px] lg:h-[170px]">
          <Image
            src="/assets/services/line.svg"
            layout="fill"
            objectFit="contain"
            priority
            alt="Line Wave"
          ></Image>
        </div>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col mt-12 gap-[40px] lg:flex-row">
            <div className="flex">
              <AiFillCheckCircle className="mt-1 mr-4 !text-2xl w-[20px] h-[20px]" />
              <div className="flex flex-1 flex-col">
                <h1 className="font-mulish font-bold">Easy to Use</h1>
                <p className="font-source font-light">
                  Wayland teams work closely with your project management or
                  provide our own - our goal is smooth integration.
                </p>
              </div>
            </div>
            <div className="flex">
              <AiFillCheckCircle className="mt-1 mr-4 !text-2xl w-[20px] h-[20px]" />
              <div className="flex flex-1 flex-col">
                <h1 className="font-mulish font-bold">Easy to Use</h1>
                <p className="font-source font-light">
                  You need a trustworthy team to follow through on every detail.
                  This is the only way our teams work.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <AiFillCheckCircle className="mt-1 mr-4 !text-2xl w-[20px] h-[20px]" />
              <div className="flex flex-1 flex-col">
                <h1 className="font-mulish font-bold">Easy to Use</h1>
                <p className="font-source font-light">
                  Your IP is valuable - we are used to working in secure
                  environments alongside medical and government clients.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section style={'my-32'}>
        <Container>
          <div className="mx-auto md:max-w-[70%] text-center">
            <h1 className="font-mulish font-bold text-4xl mb-6">
              Inviting title here
            </h1>
            <p className="font-source font-light">
              Embedded Systems Engineering team offers you efficiency,
              reliability, and expertise from senior-level embedded engineers –
              at a fraction of the cost of the US or EU. You can grow your team,
              hit your milestones, and meet your budget expectations – we are
              here to make sure you win.
            </p>
          </div>
        </Container>
      </Section>

      <Section style={'my-8'}>
        <Container>
          <div className="flex gap-[10px] flex-wrap justify-between">
            {EmbeddedList.map(item => {
              return (
                <div
                  key={item.id}
                  className="flex w-full md:w-[45%] gap-[10px] mb-2"
                >
                  <div className="w-[25px] h-[25px]">
                    <TiTick
                      style={{
                        width: '25px',
                        height: '25px',
                        fontSize: 30,
                        color: '#FF5454'
                      }}
                    ></TiTick>
                  </div>
                  <p className="font-source">{item.text}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section
        style={`my-8 h-[200px] bg-[url('/assets/backgrounds/embedded-background.png')]`}
      >
        <Container
          style={
            'flex h-[200px] font-source justify-center flex-col items-center'
          }
        >
          <div>
            <h2 className="text-white font-bold text-3xl">
              Flexible options of ways to grow your team.
            </h2>
            <p className="text-white">Let our team win your confidence</p>
          </div>
        </Container>
      </Section>

      <Section style={`my-6 mb-16`}>
        <Container
          style={
            'lg:h-[400px] sm:gap-[40px] flex flex-col justify-center md:flex-row'
          }
        >
          <div className="h-[300px] lg:h-[400px] md:w-[50%] lg:w-[50%] relative">
            <Image
              src="/assets/services/embedded-section-1.png"
              layout="fill"
              objectFit="contain"
              alt="Embedded Section Photo"
            ></Image>
          </div>
          <div className="w-[100%] md:w-[50%] lg:w-[30%] relative flex flex-col justify-center items-center">
            <p className="font-source">
              Discover the innovative thinking and point of view from the
              embedded sector, meet the experts and tell us what you have in
              mind and want to achieve. We can provide you with any service
              ranging from the entire spectrum – from construction elements
              through modules and full systems, operating systems, hardware and
              software to services and maintenance.
            </p>

            <Button
              style="max-w-[200px] mx-auto"
              text="Contact us"
              link=""
              type="red"
            ></Button>
          </div>
        </Container>
      </Section>

      <Section style={`mb-8`}>
        <Container style={'flex flex-col justify-center'}>
          <h1 className="font-mulish text-2xl font-bold mb-2">
            LOOKING FOR SOMETHING ELSE ?
          </h1>
          <p className="font-source">
            Our team offers a range of services, to keep you and your clients up
            to date.
          </p>

          <div className="mx-auto justify-between mt-8 flex flex-wrap">
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default index
