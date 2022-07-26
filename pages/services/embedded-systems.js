/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import Container from '../../components/Container/Container'
import Section from '../../components/Section/Section'
import { AiFillCheckCircle } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import EmbeddedList from './EmbeddedList'

function index() {
  return (
    <>
      <Section style={'pt-32 pb-16 scroll-smooth'}>
        <Container>
          <div className="flex flex-row justify-between items-center">
            <div>
              <h1 className="font-mulish font-bold text-4xl mb-4">
                Embedded Systems <br /> Engineering
              </h1>
              <p className="font-source font-light">
                Your project team needs affordable custom embedded <br />{' '}
                systems engineering support – problem solved.
              </p>
            </div>

            <div className="relative w-[45%] h-[400px]">
              <div className="absolute left-[100px]">
                <Image
                  src="/assets/services/embedded-photo-1.png"
                  alt="Service Photo"
                  width="170"
                  height="200"
                  objectFit="cover"
                ></Image>
              </div>
              <div className="absolute top-[30%] z-[100]">
                <Image
                  src="/assets/services/embedded-photo-2.png"
                  alt="Service Photo"
                  width="170"
                  height="200"
                  objectFit="cover"
                ></Image>
              </div>
              <div className="absolute top-[60%] left-[170px] z-[200]">
                <Image
                  src="/assets/services/embedded-photo-3.png"
                  alt="Service Photo"
                  width="170"
                  height="200"
                  objectFit="cover"
                ></Image>
              </div>
              <div className="absolute top-[20%] left-[270px] z-[100]">
                <Image
                  src="/assets/services/embedded-photo-4.png"
                  alt="Service Photo"
                  width="170"
                  height="200"
                  objectFit="cover"
                ></Image>
              </div>
            </div>
          </div>
        </Container>
        <div className="relative h-[170px]">
          <Image
            src="/assets/services/line.png"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col mt-20 gap-[40px] lg:flex-row">
            <div className="flex">
              <AiFillCheckCircle className="w-[200px] mt-1" />
              <div className="flex flex-col">
                <h1 className="font-mulish font-bold">Easy to Use</h1>
                <p className="font-source font-light">
                  Wayland teams work closely with your project management or
                  provide our own - our goal is smooth integration.
                </p>
              </div>
            </div>
            <div className="flex">
              <AiFillCheckCircle className="w-[200px] mt-1" />
              <div className="flex flex-col">
                <h1 className="font-mulish font-bold">Easy to Use</h1>
                <p className="font-source font-light">
                  You need a trustworthy team to follow through on every detail.
                  This is the only way our teams work.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <AiFillCheckCircle className="w-[200px] mt-1" />
              <div className="flex flex-col">
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
    </>
  )
}

export default index
