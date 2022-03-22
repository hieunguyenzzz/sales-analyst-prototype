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
      onTransitionEnd={() => alert(123)}
      className={classNames(
        'flex w-full items-center justify-center py-24',
        className
      )}
    >
      <div className="container max-w-5xl ">
        <h1 className="ease-in-out h1 animate-fadeInUp animate-delay-100">
          {heading}
        </h1>
        <p className="ease-in-out animate-fadeInUp animate-delay-300">
          {description}
        </p>
        {time && (
          <div className="mt-[1em] animate-fadeInUp text-sm opacity-60 ease-in-out animate-delay-500">
            {time}
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
