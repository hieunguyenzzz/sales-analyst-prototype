import Hero from '@components/Hero'
import Project from '@components/Project'
import Services from '@components/Services'
import Stats from '@components/Stats'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container h-px mt-10 divider before:h-px after:h-px md:mb-16 md:mt-36" />
      <Project />
      <div className="container h-px mt-10 divider before:h-px after:h-px md:mb-16 md:mt-36" />
      <Services />
      <div className="container h-px mt-10 divider before:h-px after:h-px md:mb-16 md:mt-36" />
      <Stats />
    </>
  )
}
