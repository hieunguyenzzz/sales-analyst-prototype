import Hero from '@components/Hero'
import Project from '@components/Project'
import Services from '@components/Services'
import Stats from '@components/Stats'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="divider-section" />
      <Project />
      <div className="divider-section" />
      <Services />
      <div className="divider-section" />
      <Stats />
    </>
  )
}
