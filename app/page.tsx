import Approach from '@/components/Approach'
import Clients from '@/components/Clients'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import OurTeam from '@/components/OurTeam'
import RecentProjects from '@/components/RecentProjects'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { navItems } from '@/data'

export default function Home() {
  return (
    <main className='relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Approach />
        <Experience />
        <OurTeam />
        <Footer />
      </div>
    </main>
  )
}
