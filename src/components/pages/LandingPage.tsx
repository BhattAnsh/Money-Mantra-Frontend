import React from 'react'
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import Services from '../component/Services';
import AboutUs from '../component/AboutUs';
import { Hero } from '../component/Hero';


type Props = {}

export default function LandingPage({}: Props) {
  return (
    <main className='relative z-10'>
      <Navbar></Navbar>
      <section className='relative z-1'>
        <Hero></Hero>
      </section>

      <section className="h-[fit-content] flex flex-col justify-center align-center py-10 ">
        <Services></Services>
      </section>
      <section className='py-20'>
        <AboutUs></AboutUs>
      </section>
      <Footer></Footer>
    </main>
  )
}