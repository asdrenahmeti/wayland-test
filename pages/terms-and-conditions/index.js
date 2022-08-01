/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import Container from '../../components/Container/Container'
import Section from '../../components/Section/Section'
import Head from 'next/head'

function index() {
  return (
    <>
      <Head>
        <title> Wayland | Terms and Conditions</title>
        <meta name="description" content="Wayland official website" />
      </Head>
      <Section style={'pt-32 pb-16 scroll-smooth'}>
        <Container style={'font-mulish'}>
          <h1 className="text-3xl font-bold mb-4">
            Website Terms and Conditions of Use
          </h1>
          <div className="flex flex-row items-center mt-6">
            <div className="w-[4px] h-[28px] bg-w-orange mr-2"></div>
            <h2 className="text-xl font-bold my-4">Terms</h2>
          </div>
          <p>
            By accessing this Website, accessible from{' '}
            <Link href="https://wayland.io">
              <a className="text-w-red font-bold">https://wayland.io</a>
            </Link>
            , you are agreeing to be bound by these Website Terms and Conditions
            of Use and agree that you are responsible for the agreement with any
            applicable local laws. If you disagree with any of these terms, you
            are prohibited from accessing this site. The materials contained in
            this Website are protected by copyright and trade mark law.
          </p>
          <div className="flex flex-row items-center mt-6">
            <div className="w-[4px] h-[28px] bg-w-orange mr-2"></div>
            <h2 className="text-xl font-bold my-4">Use license</h2>
          </div>{' '}
          <p>
            Permission is granted to temporarily download one copy of the
            materials on Wayland's Website for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
          </p>
          <ul className="ml-4 my-4 list-disc list-inside marker:text-w-orange flex flex-col gap-[6px]">
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose or for any public
              display;
            </li>
            <li>
              attempt to reverse engineer any software contained on Wayland's
              Website;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              transferring the materials to another person or "mirror" the
              materials on any other server.
            </li>
          </ul>
          <p>
            This will let Wayland to terminate upon violations of any of these
            restrictions. Upon termination, your viewing right will also be
            terminated and you should destroy any downloaded materials in your
            possession whether it is printed or electronic format.
          </p>
          <div className="flex flex-row items-center mt-6">
            <div className="w-[4px] h-[28px] bg-w-orange mr-2"></div>
            <h2 className="text-xl font-bold my-4">Disclaimer</h2>
          </div>
          <p>
            All the materials on Wayland’s Website are provided "as is". Wayland
            makes no warranties, may it be expressed or implied, therefore
            negates all other warranties. Furthermore, Wayland does not make any
            representations concerning the accuracy or reliability of the use of
            the materials on its Website or otherwise relating to such materials
            or any sites linked to this Website.
          </p>
          <div className="flex flex-row items-center mt-6">
            <div className="w-[4px] h-[28px] bg-w-orange mr-2"></div>
            <h2 className="text-xl font-bold my-4">Limitations</h2>
          </div>
          <p>
            Wayland or its suppliers will not be hold accountable for any
            damages that will arise with the use or inability to use the
            materials on Wayland’s Website, even if Wayland or an authorize
            representative of this Website has been notified, orally or written,
            of the possibility of such damage. Some jurisdiction does not allow
            limitations on implied warranties or limitations of liability for
            incidental damages, these limitations may not apply to you.
          </p>
          <div className="flex flex-row items-center mt-6">
            <div className="w-[4px] h-[28px] bg-w-orange mr-2"></div>
            <h2 className="text-xl font-bold my-4">Revisions and Errata</h2>
          </div>
          <p>
            The materials appearing on Wayland’s Website may include technical,
            typographical, or photographic errors. Wayland will not promise that
            any of the materials in this Website are accurate, complete, or
            current. Wayland may change the materials contained on its Website
            at any time without notice. Wayland does not make any commitment to
            update the materials.
          </p>
          <div className="flex flex-row items-center mt-6">
            <div className="w-[4px] h-[28px] bg-w-orange mr-2"></div>
            <h2 className="text-xl font-bold my-4">Links</h2>
          </div>
          <p>
            Wayland has not reviewed all of the sites linked to its Website and
            is not responsible for the contents of any such linked site. The
            presence of any link does not imply endorsement by Wayland of the
            site. The use of any linked website is at the user’s own risk.
          </p>
          <div className="flex flex-row items-center mt-6">
            <div className="w-[4px] h-[28px] bg-w-orange mr-2"></div>
            <h2 className="text-xl font-bold my-4">
              Site Terms of Use Modifications
            </h2>
          </div>
          <p>
            Wayland may revise these Terms of Use for its Website at any time
            without prior notice. By using this Website, you are agreeing to be
            bound by the current version of these Terms and Conditions of Use.
          </p>
          <div className="flex flex-row items-center mt-6">
            <div className="w-[4px] h-[28px] bg-w-orange mr-2"></div>
            <h2 className="text-xl font-bold my-4">Your privacy</h2>
          </div>
          <p>Please read our Privacy Policy.</p>
          <div className="flex flex-row items-center mt-6">
            <div className="w-[4px] h-[28px] bg-w-orange mr-2"></div>
            <h2 className="text-xl font-bold my-4">Governing Law</h2>
          </div>
          <p>
            Any claim related to Wayland's Website shall be governed by the laws
            of us without regards to its conflict of law provisions.
          </p>
        </Container>
      </Section>
    </>
  )
}

export default index
