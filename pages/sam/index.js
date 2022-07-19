import React from 'react'
import Image from 'next/image'
import Container from '../../components/Container/Container'
import Section from '../../components/Section/Section'
import { AiFillCheckCircle } from 'react-icons/ai'
import SwiperProduct from '../../components/SwiperProduct/SwiperProduct'
import { AiOutlineArrowRight } from 'react-icons/ai'

function index() {
  return (
    <Section style={'pt-32 pb-16'}>
      <Container>
        <div>
          <h1 className="uppercase font-mulish font-bold text-5xl">
            Pulse Oximetry
          </h1>

          <p className="font-source text-base font-light lg:max-w-[50%] pt-4">
            Measurement of the oxygen saturation of the blood improved the
            safety of anesthesia, perhaps more than any other innovation in
            history.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[50px] items-center">
          <div className="w-[100%] lg:w-[50%] ">
            <SwiperProduct></SwiperProduct>
          </div>
          <p className="w-[100%] lg:w-[50%] font-source text-base font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            arcu rhoncus at duis quisque. Posuere morbi eget suspendisse morbi
            penatibus dolor integer et velit. Sed velit orci elementum nibh
            tristique. Felis vel tellus tincidunt malesuada porttitor. Posuere
            morbi eget suspendisse morbi penatibus dolor integer et velit. Sed
            velit orci elementum nibh tristique.
          </p>
        </div>

        <div className="flex flex-col mt-20 gap-[40px] lg:flex-row">
          <div className="flex">
            <AiFillCheckCircle className="w-[200px] mt-1" />
            <div className="flex flex-col">
              <h1 className="font-mulish font-bold">Easy to Use</h1>
              <p className="font-source font-light">
                The SAM is understandable and straightforward to use for the
                non-technician, as well as the experienced physician.
                Recognizable visual cues and a reserved design create the space
                for clear, timely information.
              </p>
            </div>
          </div>
          <div className="flex">
            <AiFillCheckCircle className="w-[200px] mt-1" />
            <div className="flex flex-col">
              <h1 className="font-mulish font-bold">Easy to Use</h1>
              <p className="font-source font-light">
                The SAM is understandable and straightforward to use for the
                non-technician, as well as the experienced physician.
                Recognizable visual cues and a reserved design create the space
                for clear, timely information.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <AiFillCheckCircle className="w-[200px] mt-1" />
            <div className="flex flex-col">
              <h1 className="font-mulish font-bold">Easy to Use</h1>
              <p className="font-source font-light">
                The SAM is understandable and straightforward to use for the
                non-technician, as well as the experienced physician.
                Recognizable visual cues and a reserved design create the space
                for clear, timely information.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col">
          <h1 className="font-mulish font-bold text-2xl">
            Everyone Deserves Safe <br /> Surgery
          </h1>
          <div className="flex mt-6 flex-col lg:flex-row gap-[20px] items-center">
            <div className="flex flex-col w-[100%] lg:max-w-[50%]">
              <h1 className="font-source text-xl text-bold mb-2">
                Main Feature
              </h1>
              <p className="w-[100%] lg:w-[100%] font-source text-base font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                arcu rhoncus at duis quisque. Posuere morbi eget suspendisse
                morbi penatibus dolor integer et velit. Sed velit orci elementum
                nibh tristique. Felis vel tellus tincidunt malesuada porttitor.
                Posuere morbi eget suspendisse morbi penatibus dolor integer et
                velit. Sed velit orci elementum nibh tristique.
              </p>
            </div>
            <div className="mt-4 w-full h-[300px] relative">
              <Image
                src="/assets/career/feature.png"
                layout="fill"
                objectFit="cover"
                alt="Feature image"
              ></Image>
            </div>
          </div>
        </div>

        <div className="flex mt-20 flex-col lg:flex-row gap-[40px]">
          <div className="flex-1 relative">
            <Image
              src="/assets/career/career-1.png"
              layout="fill"
              objectFit="cover"
              alt="Career image"
            ></Image>
          </div>
          <div className="flex-1">
            <h1 className="font-source text-xl">Other feature</h1>
            <p className="font-source font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sit pretium vel ornare quam rutrum. Facilisi id suspendisse
              adipiscing convallis fermentum sit turpis ornare cras. Natoque
              venenatis varius scelerisque vitae mus eu arcu at id. Sit pretium
              pulvinar tristique facilisi nullam felis iaculis.
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-20 gap-[20px] lg:flex-row items-center">
          <div className="lg:w-[50%]">
            <p className="font-light font-source flex-1">
              The SAM system is built on the foundational idea that the computer
              in your pocket is more powerful than the one that put men on the
              moon.
            </p>

            <div className="mt-8 overflow-hidden">
              <p className="uppercase font-mulish text-sm">Learn more</p>
              <div className="flex items-center relative left-[40px]">
                <div className="w-[50px] h-[2px] bg-black"></div>
                <AiOutlineArrowRight
                  style={{
                    position: 'relative',
                    left: -4,
                    fontSize: 28
                  }}
                />
              </div>
            </div>
          </div>

          <div className="lg:max-w-[30%]">
            <p className="uppercase text-w-gray text-sm mb-6">Lorem ipsum</p>

            <p className="uppercase">
              Of the annual 1/4 billion surgeries/year worldwide, merely 3.5%
              are done on the world’s poorest 1/3rd
            </p>

            <div className="lg:w-[50%] bg-[#72B3FC] h-[2px] my-6"></div>

            <p className="uppercase">
              At least 4·8 billion people do not have access to surgery
            </p>
          </div>
        </div>

        <div className="flex flex-col font-source lg:flex-row lg:justify-around shadow-lg p-6 mt-10 gap-[10px]">
          <div className="flex items-center">
            <div className="w-[8px] h-[8px] rounded-full bg-[#4694FF] mr-2"></div>
            <p>Share the Story of The SAM</p>
          </div>
          <div className="flex items-center">
            <div className="w-[8px] h-[8px] rounded-full bg-[#4694FF] mr-2"></div>
            <p>Volunteer or Make Helpful Connections</p>
          </div>
          <div className="flex items-center">
            <div className="w-[8px] h-[8px] rounded-full bg-[#4694FF] mr-2"></div>
            <p>Join #TheSAMGlobalTeam as a Monthly Partner</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default index
