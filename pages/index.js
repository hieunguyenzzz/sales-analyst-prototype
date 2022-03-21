import Hero from '@components/Hero'
import Layout from '@components/Layout'
import Project from '@components/Project'
import Services from '@components/Services'
import Stats from '@components/Stats'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="container divider mt-10 h-px before:h-px after:h-px md:mb-16 md:mt-36" />
      <Project />
      <div className="container divider mt-10 h-px before:h-px after:h-px md:mb-16 md:mt-36" />
      <Services />
      <div className="container divider mt-10 h-px before:h-px after:h-px md:mb-16 md:mt-36" />
      <Stats />
    </Layout>
  )
}
