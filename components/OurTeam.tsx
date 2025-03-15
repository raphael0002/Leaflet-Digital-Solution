import { AnimatedTestimonials } from './ui/AnimatedTestimonials'
import { ourTeam } from '@/data'
const OurTeam = () => {
  return (
    <section id='our-team' className='py-20'>
      <h1 className='heading'>
        Our
        <span className='text-orange-500'> Team</span>
      </h1>
      <AnimatedTestimonials testimonials={ourTeam} />
    </section>
  )
}

export default OurTeam
