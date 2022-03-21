import Hero from '@components/Hero'
import Layout from '@components/Layout'
import Image from '@components/UI/Image'
import data from 'libs/data'

const ProjectSlug = ({ data }) => {
  return (
    <>
      <Hero heading={data.title} time={new Date().toDateString()} />
      <div className="container h-px mt-10 divider before:h-px after:h-px md:mb-16 md:mt-36" />
      <div className="container">
        <Image
          ratio={1067 / 1600}
          src="https://uploads-ssl.webflow.com/61602163503ce327d1bc7a7b/616322a4bbf68f70f013b959_team-fredi-ufcr9mjVeM0-unsplash-min.jpg"
        ></Image>
        <div className="grid gap-8 mt-24 lg:grid-cols-3 ">
          <div className="mx-auto prose prose-headings:font-heading prose-headings:font-light prose-headings:tracking-wide lg:col-start-2 lg:col-end-4 lg:mx-0">
            <h2>Qui quaerat eos minima provident.</h2>
            <p>
              Pariatur dolore est dicta ab enim aperiam nihil doloribus
              similique. Repudiandae et ratione ea enim minus est aliquid totam
              repudiandae. Nihil autem quaerat necessitatibus assumenda quaerat
              voluptates animi. Repudiandae reiciendis minima.
            </p>
            <h3>
              Porro reiciendis animi ullam fugit est vitae voluptas
              voluptatibus.
            </h3>
            <blockquote>
              Amet ipsa mollitia. Impedit nihil magni dolor modi sequi saepe.
              Minus ullam sequi nostrum qui et et est qui. Reiciendis modi
              voluptas ipsam. Nemo voluptatibus laboriosam excepturi quod
              dignissimos nobis. Magnam assumenda doloribus repellendus sapiente
              numquam consequatur quod aliquam quidem.
            </blockquote>
            <p>
              Quo et voluptatem ipsam vero. Libero accusantium officia culpa
              labore ut. Voluptatum sit aut perspiciatis corporis. Voluptatem
              rerum veniam itaque quos nihil eaque.
            </p>
            <p>
              Et doloremque et. Veniam iure ut laboriosam voluptate omnis
              consectetur. A mollitia tenetur non eius quae quisquam.
            </p>
            <h2>Dolores est tempore perferendis ipsa numquam.</h2>
            <p>
              Veniam qui autem dignissimos vel ex. Rerum illum neque error.
              Asperiores provident laboriosam cupiditate soluta vero ab sit. Aut
              facilis nobis soluta natus eum velit corporis. Sit id nisi et aut.
              Quia accusantium et sunt laboriosam alias.
            </p>
            <h3>Architecto hic molestias cumque fugit possimus sit vero.</h3>
            <blockquote>
              Excepturi minus autem. Nobis autem placeat nihil vel placeat
              dignissimos rem doloribus nostrum. Laborum voluptas repellat vel
              minus rem. Rerum quibusdam est velit dolores velit fugit. Eius
              possimus dolor. Distinctio ducimus earum quae.
            </blockquote>
            <p>
              Quas qui ab. Omnis quasi ea enim facilis qui autem. Impedit velit
              quibusdam nihil. Deserunt rerum quisquam amet.
            </p>
            <p>
              Distinctio non consequatur. Ex aut libero. Ipsam ut nulla qui non
              eaque non.
            </p>
            <h2>Reiciendis aliquid vitae sunt voluptatum.</h2>
            <p>
              A perspiciatis asperiores accusantium magnam quos. Autem expedita
              quia quod autem corrupti maxime provident in rerum. Veritatis
              nesciunt nobis consequatur dolore id.
            </p>
            <h3>Qui voluptas occaecati eius et distinctio vel officia.</h3>
            <blockquote>
              Et non nemo atque consequatur corrupti. Illum qui enim et. Est ex
              sed.
            </blockquote>
            <p>
              Ullam placeat et et veritatis non laudantium. Sapiente cumque
              pariatur. Harum voluptatibus laborum molestiae sed itaque.
              Voluptatem repellat aspernatur veritatis. Voluptatum eos inventore
              iste mollitia nemo voluptas.
            </p>
            <p>
              Expedita molestias rerum facere sint vero at beatae qui. Aut
              incidunt rerum assumenda eaque delectus. Enim eos explicabo.
              Perferendis totam quod consequatur et quaerat quia necessitatibus.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: data.projects.items.map((item) => {
      return '/post/' + item.title
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
