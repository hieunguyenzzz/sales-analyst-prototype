import Hero from '@components/Hero'
import Project from '@components/Project'
import Image from '@components/UI/Image'
import React from 'react'

export default function About({
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
        className={'text-sm'}
        heading={`We evolve and elevate ambitious and bold brands`}
        description={`We are an award winning and creative all-in-one studio from Berlin design and branding studio`}
      />
      <div className="divider-section" />
      <div className="container">
        <div className="ml-auto lg:mr-12 lg:max-w-2xl">
          <Image ratio={image.height / image.width} src={image.src} />
          <p className="mt-4 ">{image.alt}</p>
        </div>
        <div className="max-w-3xl mx-auto mt-24 space-y-12">
          <h2 className="font-light leading-none font-heading">
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
      <div className="divider-section" />
      <div className="container mt-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <h2 className="h2">{'Our values'}</h2>
          <div className="max-w-3xl col-span-full md:col-end-3 lg:col-start-2 lg:col-end-4 lg:mt-0">
            <ul className="grid gap-8 sm:grid-cols-2 md:pl-0 lg:gap-12">
              {[
                {
                  label: 'Honesty',
                  value: `Tristique cum sit sit at feugiat pharetra tincidunt in nibh. Tempor convallis venenatis aenean sapien arcu, proin enim eget. Sed amet, aenean suspendisse posuere malesuada faucibus odio quis.`,
                },
                {
                  label: 'Transparency',
                  value: `Tristique cum sit sit at feugiat pharetra tincidunt in nibh. Tempor convallis venenatis aenean sapien arcu, proin enim eget. Sed amet, aenean suspendisse posuere malesuada faucibus odio quis.`,
                },
                {
                  label: 'No bullshit',
                  value: `Tristique cum sit sit at feugiat pharetra tincidunt in nibh. Tempor convallis venenatis aenean sapien arcu, proin enim eget. Sed amet, aenean suspendisse posuere malesuada faucibus odio quis.`,
                },
                {
                  label: 'Gut feeling',
                  value: `Tristique cum sit sit at feugiat pharetra tincidunt in nibh. Tempor convallis venenatis aenean sapien arcu, proin enim eget. Sed amet, aenean suspendisse posuere malesuada faucibus odio quis.`,
                },
              ].map(({ label, value }) => (
                <React.Fragment key={label}>
                  <li>
                    <a href="#" className="block pb-4 space-y-6 ">
                      <div className="text-2xl leading-none lg:text-3xl">
                        {label}
                      </div>
                      <div>{value}</div>
                    </a>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 mr-auto lg:ml-12 lg:mt-24 lg:max-w-2xl">
          <Image ratio={image.height / image.width} src={image.src} />
          <p className="mt-4 ">{image.alt}</p>
        </div>
      </div>
      <div className="divider-section" />
      <div>
        <div className="container grid gap-6 md:grid-cols-2 md:gap-y-10">
          <h2 className="h2">The process</h2>
          <p className="mx-auto md:mt-0 md:max-w-[70%]">
            Ac viverra purus in in pretium arcu amet. Morbi nisl mauris sagittis
            purus donec lobortis amet.
          </p>
        </div>
        <ul className="container grid gap-12 mt-12 col-span-full sm:grid-cols-2 md:mt-24 lg:grid-cols-3">
          {[
            {
              label: 'Research',
              value:
                'Tristique cum sit sit at feugiat pharetra tincidunt in nibh. Tempor convallis venenatis aenean sapien arcu, proin enim eget. Sed amet, aenean suspendisse posuere malesuada faucibus odio quis.',
            },
            {
              label: 'Strategy',
              value:
                'Tristique cum sit sit at feugiat pharetra tincidunt in nibh. Tempor convallis venenatis aenean sapien arcu, proin enim eget. Sed amet, aenean suspendisse posuere malesuada faucibus odio quis.',
            },
            {
              label: 'Design',
              value:
                'Tristique cum sit sit at feugiat pharetra tincidunt in nibh. Tempor convallis venenatis aenean sapien arcu, proin enim eget. Sed amet, aenean suspendisse posuere malesuada faucibus odio quis.',
            },
            {
              label: 'Implement',
              value:
                'Tristique cum sit sit at feugiat pharetra tincidunt in nibh. Tempor convallis venenatis aenean sapien arcu, proin enim eget. Sed amet, aenean suspendisse posuere malesuada faucibus odio quis.',
            },
            {
              label: 'Test',
              value:
                'Tristique cum sit sit at feugiat pharetra tincidunt in nibh. Tempor convallis venenatis aenean sapien arcu, proin enim eget. Sed amet, aenean suspendisse posuere malesuada faucibus odio quis.',
            },
            {
              label: 'Launch',
              value:
                'Tristique cum sit sit at feugiat pharetra tincidunt in nibh. Tempor convallis venenatis aenean sapien arcu, proin enim eget. Sed amet, aenean suspendisse posuere malesuada faucibus odio quis.',
            },
          ].map(({ label, value }, i) => {
            return (
              <li key={label}>
                <a href="#" className="block pb-4 space-y-6 ">
                  <div className="pb-3 mb-6 border-b text-primary md:mt-12">
                    {i < 9 ? `0${i + 1}` : i + 1}
                  </div>
                  <div className="text-2xl leading-none md:text-3xl">
                    {label}
                  </div>
                  <div>{value}</div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="divider-section" />
      <Project />
    </>
  )
}
