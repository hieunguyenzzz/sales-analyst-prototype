import Hero from '@components/Hero'
import Layout from '@components/Layout'
import Project from '@components/Project'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="container">
        <div className="w-full border-b" />
      </div>

      <Project />
    </Layout>
  )
}
