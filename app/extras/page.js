import React from 'react'
import Hero from '../components/Hero'
import ExtraServices from '../components/ExtraServices'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import LogoCloud from '../components/LogoCloud'

const Extras = () => {
  const testimonials = [
    {
      img: '/testimonial-1.jpg',
      quote: "This company exceeded my expectations. Professional, efficient, and top-quality work for my new AC Unit",
      name: 'Frank J',
      role: 'AMD Inc.'
    },
    {
      img: '/testimonial-2.jpg',
      quote: "I was provided with much more breatheable air in our office . Trustworthy and skilled team.",
      name: 'Nick V',
      role: 'Malika Inc.'
    },
    {
      img: '/testimonial-3.jpg',
      quote: "Highly recommended! Seamless AC maintanance for my new project.",
      name: 'Amelia W',
      role: 'SE Restoration'
    }
  ]
  return (
    <div>
      <Hero bg='/water-heater-system.jpg' heading='Heating Services' subheading='Hire Experts in Heating Systems'  />
      <ExtraServices />
      <WhyChooseUs />
      <LogoCloud />
      <Testimonials testimonials={testimonials} />
    </div>
  )
}

export default Extras