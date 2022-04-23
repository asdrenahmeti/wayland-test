import React from 'react'
import Section from '../../components/Section/Section'
import Image from 'next/image'
import ContactPattern from './../../public/assets/images/contact-pattern.svg'
import Container from '../../components/Container/Container'


function Connect() {

  return (
    <>
      <Section style={'flex'}>
        <Container style={'flex items-center'}>
          <div className="flex flex-col w-2/4 items-end"></div>
          <div className="flex flex-col w-2/4 items-end">
            <Image
              src={ContactPattern}
              height={300}
              width={300}
              alt="Wayland Logo"
            />
            <h2 className="font-mulish text-xl font-bold uppercase self-start">
              Wayland
            </h2>
            <div className="h-0.5 bg-w-gray my-3 w-full"></div>
            <div className="flex gap-32 justify-between w-full">
              <p className="font-source text-base max-w-[280px] font-light">
                Weather you’re a client, potential partner, or just want to know
                more about wayland. We will be happy to talk with you.
              </p>

              <div className="flex gap-5">
                <div className="flex flex-col font-source font-bold">
                  <p>US</p> <p>NMK</p> <p>RKS</p>
                </div>
                <div className="flex flex-col font-source font-bold">
                  <p>+1 456 841 7484 </p>
                  <p>+389 75 123 432 </p>
                  <p>+383 49 234 232</p>
                </div>
                <div className="flex flex-col font-source font-bold">
                  <p>info@wayland.io</p>
                  <p>info@wayland.io</p>
                  <p>info@wayland.io</p>
                </div>
              </div>
            </div>

            <div className="flex gap-20 pt-20">
              <p className="font-source text-base max-w-[230px] font-light">
                Feel free to reach out if you want to collaborate with us, or
                simply have a chat
              </p>

              <div className="flex gap-5">
                <div className="flex flex-col font-source font-light border-r border-w-gray pr-3">
                  <h3 className="font-bold pb-5">US Office</h3>
                  <p>Inform Innovation Inc</p>
                  <p>Austin, Texas</p>
                  <p>Texas, 22300</p>
                  <p>Texas, 22300</p>
                </div>
                <div className="flex flex-col font-source font-light border-r border-w-gray pr-3">
                  <h3 className="font-bold pb-5">Skopje Office</h3>
                  <p>Wayland Skopje</p>
                  <p>Orce Nikolov 190/3/6</p>
                  <p>Skopje, 1000</p>
                  <p>North Macedonia</p>
                </div>
                <div className="flex flex-col font-source font-light">
                  <h3 className="font-bold pb-5">Prishtina Office</h3>
                  <p>Wayland Prishtina</p>
                  <p>St. Garibaldi, 32/2</p>
                  <p>Prishtina 10000</p>
                  <p>Kosovo</p>
                </div>
              </div>
            </div>
          </div>

          <button className="fixed bg-red-300">TEST</button>
        </Container>
      </Section>
      <Section style={'bg-primary text-white flex'}>
        <Container style={'flex items-center'}>
          <div className="flex flex-col w-2/4 items-end"></div>
          <div className="flex flex-col w-2/4 items-center">
            <div className="font-mulish w-3/4">
              <div className="border-l-2 p-6 font-light">
                <h2 className="text-xl font-bold pb-3">
                  Let&apos;s make your <br /> project reality
                </h2>
                <p className="font-source text-sm">
                  Weather you’re a client, potential partner, or just want to
                  know <br /> more about wayland. We will be happy to talk with
                  you.
                </p>
              </div>

              <form className="flex flex-col gap-5 mt-20">
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="name"
                    name="name"
                    className="block pl-4 py-3 px-0 w-full text-sm text-secondary bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:text-white focus:ring-0 focus:border-[#FF5177] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute pl-5 text-md text-white uppercase dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="email"
                    name="email"
                    className="block pl-4 py-3 px-0 w-full text-sm text-secondary text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:text-white focus:ring-0 focus:border-[#FF5177] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute pl-5 text-md text-white uppercase dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    email
                  </label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <textarea
                    name="message"
                    className="block pl-4 resize-none h-32 py-3 px-0 w-full text-sm text-secondary text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:text-white focus:ring-0 focus:border-[#FF5177] peer"
                    placeholder=" "
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute pl-5 text-md text-white uppercase dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Message
                  </label>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Connect
