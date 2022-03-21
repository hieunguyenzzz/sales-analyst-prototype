import React from 'react'
import Divider from './UI/Divider'

function ServiceDetails({
  heading = 'Our services',
  description = `Ac viverra purus in in pretium arcu amet. Morbi nisl mauris sagittis
  purus donec lobortis amet.`,
  url = '#',
  urlText = 'See all our work',
  items = [
    {
      label: 'Brand strategy',
      description: `Tristique cum sit sit at feugiat pharetra tincidunt in nibh. Tempor convallis venenatis aenean sapien arcu, proin enim eget. Sed amet, aenean suspendisse posuere malesuada faucibus odio quis.`,
      url: '#',
    },
    {
      label: 'Identity design',
      description: `Tristique cum sit sit at feugiat pharetra tincidunt in nibh. Tempor convallis venenatis aenean sapien arcu, proin enim eget. Sed amet, aenean suspendisse posuere malesuada faucibus odio quis.`,
      url: '#',
    },
    {
      label: 'Web design',
      description: `Tristique cum sit sit at feugiat pharetra tincidunt in nibh. Tempor convallis venenatis aenean sapien arcu, proin enim eget. Sed amet, aenean suspendisse posuere malesuada faucibus odio quis.`,
      url: '#',
    },
  ],
}) {
  return (
    <div className="container mt-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <h2 className="h2">{heading}</h2>
        <p className="md:mt-0 lg:col-span-1">{description}</p>
        {url && (
          <div className="mx-auto w-full md:col-start-2 lg:col-end-3">
            <a className="btn-animated group" href={url}>
              {urlText}
            </a>
          </div>
        )}
        <div className=" col-span-full mt-14 md:col-end-3 lg:col-start-2 lg:col-end-4">
          <ul className="grid gap-20 md:pl-0">
            {items.map(({ label, description, url }) => (
              <React.Fragment key={label}>
                <li className="max-w-lg ">
                  <div
                    href="#"
                    className="block font-heading text-[2rem] font-light leading-none hover:text-primary md:text-5xl"
                  >
                    {label}
                  </div>
                  <Divider className={'mb-8 mt-4'} />
                  <p>{description}</p>
                  <a href={url} className="btn-animated mt-8 inline-block">
                    {'Read more'}
                  </a>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails
