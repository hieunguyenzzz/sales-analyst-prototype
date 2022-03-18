import classNames from 'classnames'
import NextImage from 'next/image'
import React from 'react'
const rootClassName =
  'relative w-full before:contents before:w-full before:pb-[var(--ratio)] before:!block content'
export default function Image({
  className,
  size,
  ratio = 'auto',
  shape,
  src,
  ...props
}) {
  let finalSrc = src
  if (typeof src === typeof '' && src.includes('https://')) {
    finalSrc = 'https://image-proxy.ngohoanglongptit8635.workers.dev/' + src
  }
  if (ratio === 'auto') {
    return (
      <NextImage
        className={classNames(rootClassName, className)}
        src={finalSrc}
        layout="fill"
        {...props}
      />
    )
  }

  return (
    <div
      style={{
        '--ratio': `${ratio * 100}%`,
      }}
      className={classNames(rootClassName, className)}
    >
      <NextImage
        className="absolute inset-0 object-cover w-full h-full"
        layout="fill"
        src={finalSrc}
        {...props}
      />
    </div>
  )
}
// export default function Image(props) {
//   return <img {...props} />
// }
