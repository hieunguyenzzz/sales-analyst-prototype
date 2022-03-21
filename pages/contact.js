import Hero from '@components/Hero'
import Layout from '@components/Layout'
import Image from '@components/UI/Image'
import React from 'react'

export default function Contact({
  image = {
    src: 'https://uploads-ssl.webflow.com/615fecbd6a34450a0d2be0c2/61647341b798c820c85cf272_leon-6awfTPLGaCE-unsplash-min.jpg',
    width: 375,
    height: 250,
    alt: 'Our office in Berlin',
  },
}) {
  return (
    <>
      <Hero
        heading={`Contact`}
        description={`You're alwas more than welcome to reach out to us regarding exciting new projects`}
      />
      <div className="divider-section" />
      <div className="container">
        <div className="ml-auto lg:mr-12 lg:max-w-2xl">
          <Image ratio={image.height / image.width} src={image.src} />
          <p className="mt-4 ">{image.alt}</p>
        </div>
        <div className="max-w-3xl mx-auto mt-24 space-y-12">
          <h2 className="font-light leading-none h2 font-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta ut
            nulla curabitur pulvinar tincidunt consequat etiam. Quis nisl orci
            diam id gravida feugiat .
          </h2>
          <div className="gap-12 md:columns-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum. Tristique cum sit sit at
            feugiat pharetra tincidunt in nibh. Tempor convallis venenatis
            aenean sapien arcu, proin enim eget. Sed amet, aenean suspendisse
            posuere malesuada faucibus odio quis. nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </div>
        </div>
      </div>
    </>
  )
}
Contact.Layout = Layout
