import Hero from '@components/Hero'
import Layout from '@components/Layout'
import ServiceDetails from '@components/ServiceDetails'

export default function Home() {
  return (
    <Layout>
      <Hero
        className={'text-sm'}
        heading={`Our range of services`}
        description={`We create value-adding digital solutions and identities  through brand strategy and design`}
      />
      <div className="container divider mt-10 h-px before:h-px after:h-px md:mb-16 md:mt-36" />
      <ServiceDetails url={false} />
    </Layout>
  )
}
