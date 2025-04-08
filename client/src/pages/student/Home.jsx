import Footer from '@/components/student/Footer'
import CallToAction from '@/components/student/CallToAction'
import Companies from '@/components/student/Companies'
import CoursesSection from '@/components/student/CoursesSection'
import Hero from '@/components/student/Hero'
import Testimonial from '@/components/student/Testimonial'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <Companies/>
      <CoursesSection/>
      <Testimonial/> 
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home
