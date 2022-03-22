import React from 'react'

function Stats({
  heading = 'In numbers',
  description = `Ac viverra purus in in pretium arcu amet. Morbi nisl mauris sagittis
  purus donec lobortis amet.`,
  url,
  urlText = 'See all our work',
  items = [
    { label: 'Projects completed', value: '120+' },
    { label: 'Team members', value: 6 },
    { label: 'Happy customers', value: '50+' },
    { label: 'Year of experience', value: '10+' },
  ],
}) {
  return (
    <div className="container mt-12">
      <div className="grid items-baseline gap-8 md:grid-cols-2 lg:grid-cols-3">
        <h2 className="h2">{heading}</h2>
        <p className="md:mt-0 lg:col-span-1">{description}</p>
        {url && (
          <div className="w-full mx-auto md:col-start-2 lg:col-end-3">
            <a className="btn-animated group" href={url}>
              {urlText}
            </a>
          </div>
        )}
        <div className="max-w-3xl col-span-full mt-14 md:col-end-3 lg:col-start-2 lg:col-end-4">
          <ul className="grid gap-8 sm:grid-cols-2 md:pl-0 lg:gap-12">
            {items.map(({ label, value }) => (
              <React.Fragment key={label}>
                <li>
                  <a href="#" className="block pb-4 border-b ">
                    <div className="font-heading text-[40px] font-light leading-none text-primary sm:text-6xl lg:text-7xl">
                      {value}
                    </div>
                    <div>{label}</div>
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

export default Stats
