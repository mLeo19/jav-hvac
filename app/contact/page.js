import React from 'react'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import Testimonials from '../components/Testimonials'
import LogoCloud from '../components/LogoCloud'

const Contact = () => {

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
      <Hero bg='/ac-repair.jpg' heading='Contact Us Anytime, Anywhere' subheading='To Meet Any Kind of Solution At Your Earliest Convenience' />
      <ContactForm />
      <Testimonials testimonials={testimonials}/>
      <LogoCloud />
    </div>
  )
}

export default Contact