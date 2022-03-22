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
      <div className="container h-px mt-10 divider before:h-px after:h-px md:mb-16 md:mt-36" />
      <ServiceDetails url={false} />
    </>
  )
}
