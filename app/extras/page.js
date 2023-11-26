import React from 'react'
import Hero from '../components/Hero'
import ExtraServices from '../components/ExtraServices'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import LogoCloud from '../components/LogoCloud'
import Info from '../components/Info'
import { PiToolboxFill } from 'react-icons/pi'
import { MdRoofing, MdHvac } from 'react-icons/md'

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

  let heading = 'Florida\'s Premier HVAC Solutions'
  let title = 'Efficient HVAC Services for West Palm Beach and Beyond'
  let desc = 'Our expert team ensures optimal performance and comfort, extending our services from West Palm Beach to cities across the state.'
  let img = '/mini-splits.jpg'

  const features = [
    {
      name: 'Precision Performance by Tech Pros',
      description: 'Our certified technicians guarantee precision in installing, maintaining, and repairing HVAC systems, ensuring peak performance and energy efficiency.',
      icon: PiToolboxFill,
    },
    {
      name: 'Climate Mastery with Tailored Solutions',
      description: 'We specialize in crafting personalized cooling solutions, understanding the unique demands of Florida\'s climate to keep your indoor environment consistently comfortable.',
      icon: MdRoofing,
    },
    {
      name: 'Reliability You Can Trust',
      description: 'Count on us for reliable, prompt service. From routine maintenance to emergency repairs, we\'re dedicated to ensuring your HVAC system operates seamlessly year-round.',
      icon: MdHvac,
    },
  ]

  return (
    <div>
      <Hero bg='/extra-services.jpg' heading='Extra Services' subheading='Hire Versatile Experts For Any HVAC Needs'  />
      <ExtraServices />
      <Info heading={heading} title={title} desc={desc} features={features} img={img} />
      <WhyChooseUs />
      <LogoCloud />
      <Testimonials testimonials={testimonials} />  
    </div>
  )
}

export default Extras