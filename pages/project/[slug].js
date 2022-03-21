import Hero from '@components/Hero'
import Layout from '@components/Layout'
import Project from '@components/Project'
import Image from '@components/UI/Image'
import data from 'libs/data'

const ProjectSlug = ({ data }) => {
  return (
    <>
      <Hero heading={data.title} />
      <div className="container h-px mt-10 divider before:h-px after:h-px md:mb-16 md:mt-36" />
      <div className="container">
        <Image
          ratio={1067 / 1600}
          src="https://uploads-ssl.webflow.com/61602163503ce327d1bc7a7b/616322a4bbf68f70f013b959_team-fredi-ufcr9mjVeM0-unsplash-min.jpg"
        ></Image>
        <div className="divider-section divider-section-noborder" />
        <div className="grid gap-6 md:grid-cols-2">
          <p className="max-w-lg text-3xl">
            {`Consequatur quia magni fugit reprehenderit et quibusdam sunt ut fugit.
Dolorem voluptatem corrupti culpa est voluptatem est impedit.
Vel praesentium provident quibusdam optio `}
          </p>
          <div className="max-w-lg md:ml-auto">
            <p>
              Perspiciatis nihil neque ut consectetur dolorem quia quia officiis
              quo. Sed nulla ut ut. Eum necessitatibus
            </p>
            <div className="mt-16 text-3xl">We did</div>
            <ul className="mt-6 divide-y border-y">
              {['Packaging', 'Identity design', 'Brand strategy'].map(
                (item) => {
                  return (
                    <li className="py-2" key={item}>
                      {item}
                    </li>
                  )
                }
              )}
            </ul>
          </div>
        </div>
        <div className="divider-section divider-section-noborder" />
        <div className="space-y-[6vw] xl:space-y-12">
          <Image
            ratio={1067 / 1600}
            src={
              'https://uploads-ssl.webflow.com/61602163503ce327d1bc7a7b/616322b862ca0f33ebfe9f13_team-fredi-4sq_STuClTA-unsplash-min.jpg'
            }
          ></Image>
          <Image
            ratio={1067 / 1600}
            src={
              'https://uploads-ssl.webflow.com/61602163503ce327d1bc7a7b/616322b862ca0f33ebfe9f13_team-fredi-4sq_STuClTA-unsplash-min.jpg'
            }
          ></Image>
          <Image
            ratio={1067 / 1600}
            src={
              'https://uploads-ssl.webflow.com/61602163503ce327d1bc7a7b/616322b862ca0f33ebfe9f13_team-fredi-4sq_STuClTA-unsplash-min.jpg'
            }
          ></Image>
        </div>
      </div>
      <div className="divider-section" />
      <div>
        <div className="container grid gap-12 md:gap-y-10 lg:grid-cols-3">
          <h2>The client says</h2>
          <div className="max-w-3xl md:ml-auto lg:col-span-2">
            <p
              quote-symbol={'’’'}
              className="relative pl-12 font-heading text-[32px] font-light leading-snug tracking-[-1.5px] before:absolute before:left-0 before:top-[-0.2em] before:z-[-1] before:font-[Arial] before:text-[6em]  before:font-bold before:leading-none before:text-primary before:text-opacity-50 before:content-[attr(quote-symbol)] sm:text-[40px] lg:text-[3rem]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta ut
              nulla curabitur pulvinar tincidunt consequat etiam. Quis nisl orci
              diam id gravida feugiat .
            </p>
            <div className="w-full pl-12 mt-12 space-y-1">
              <div className="text-3xl" href="#">
                Phillip Aminoff
              </div>
              <div>Founder and CEO</div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider-section" />
      <Project />
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: data.projects.items.map((item) => {
      return '/project/' + item.title
    }),
    fallback: false,
  }
}
export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params
  console.log({ slug })
  return {
    props: {
      data: data.projects.items.find((item) => item.title === slug),
    },
  }
}
ProjectSlug.Layout = Layout
export default ProjectSlug
