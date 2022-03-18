import classNames from 'classnames'
import React from 'react'

export default function Button({
  size,
  shape,
  active,
  disabled,
  variant,
  color,
  glass,
  loading,
  className,
  children,
}) {
  const btnProps = {
    disabled,
    className: classNames(
      'btn ',
      size && {
        'btn-lg': size === 'lg',
        'btn-md': size === 'md',
        'btn-sm': size === 'sm',
        'btn-xs': size === 'xs',
      },
      shape && {
        'btn-wide': shape === 'wide',
        'btn-block': shape === 'block',
        'btn-circle': shape === 'circle',
        'btn-square': shape === 'square',
      },
      variant && {
        'btn-ghost': variant === 'ghost',
        'btn-link': variant === 'link',
        'btn-outline': variant === 'outline',
      },
      color && {
        'btn-primary': color === 'primary',
        'btn-secondary': color === 'secondary',
        'btn-accent': color === 'accent',
        'btn-info': color === 'info',
        'btn-success': color === 'success',
        'btn-warning': color === 'warning',
        'btn-error': color === 'error',
      },
      active,
      glass,
      loading,
      className
    ),
    role: 'button',
  }
  if (typeof children === 'function') {
    return children(btnProps)
  }
  return <button {...btnProps}>{children}</button>
}
