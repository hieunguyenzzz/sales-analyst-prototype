import classNames from 'classnames'
import React from 'react'

function Hero({
  heading = `We are a design
and branding studio`,
  time,
  description = `We develop brands and engaging digital experiences across platforms.`,
  className,
}) {
  return (
    <div
      className={classNames(
        'flex w-full items-center justify-center py-24',
        className
      )}
    >
      <div className="container max-w-5xl ">
        <h1>{heading}</h1>
        <p className="">{description}</p>
        {time && <div className="mt-[1em] text-sm opacity-60">{time}</div>}
      </div>
    </div>
  )
}

export default Hero
