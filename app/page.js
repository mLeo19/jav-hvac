import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import LogoCloud from './components/LogoCloud'
import ContactForm from './components/ContactForm'

export default function Home() {
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
    <main>
      <Hero heading='JAV Cooling' subheading='Team Up With HVAC Experts That Care About You' />
      <Services />
      <WhyChooseUs />
      <Testimonials testimonials={testimonials} />
      <LogoCloud />
      <ContactForm /> 
    </main>
  )
}
