import Hero from '@components/Hero'
import ServiceDetails from '@components/ServiceDetails'

export default function Home() {
  return (
    <>
      <Hero
        className={'text-sm'}
        heading={`Our range of services`}
        description={`We create value-adding digital solutions and identities  through brand strategy and design`}
      />
      <div className="divider-section" />
      <ServiceDetails url={false} />
    </>
  )
}
