import Hero from '@components/Hero'
import Project from '@components/Project'

export default function Home() {
  return (
    <>
      <Hero
        className={'text-sm'}
        heading={`A selection of our work`}
        description={`Over the years, we have solved ​​different challenges 
        in collaboration with our customers`}
      />
      <div className="container h-px mt-10 divider before:h-px after:h-px md:mb-16 md:mt-36" />
      <Project />
    </>
  )
}
