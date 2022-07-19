import React from 'react'
import Image from 'next/image'
import Container from '../../components/Container/Container'
import Section from '../../components/Section/Section'

function index() {
  return (
    <Section style={'pt-32 pb-16 h-screen'}>
      <Container style={'flex h-full w-full justify-center items-center'}>
        <div className="flex w-full relative justify-center items-center gap-[10px]">
          <div>
            <h1 className="uppercase font-bold text-3xl text-right mb-4">
              Coming soon
            </h1>
            <p className="uppercase font-light text-right">
              THIS PAGE IS Undergoing creative improvements. <br />
              New information will be up in a few days!
            </p>
          </div>
          <div className="relative w-[100px] h-[200px] lg:h-[350px]">
            <Image
              src="/assets/construction.png"
              layout="fill"
              objectFit="contain"
              alt="Under construction image"
            ></Image>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default index
