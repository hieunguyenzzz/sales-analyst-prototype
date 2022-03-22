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
      <div className="divider-section" />
      <Project />
    </>
  )
}
