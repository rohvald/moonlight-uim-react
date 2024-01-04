import React, { HTMLAttributes, DetailedHTMLProps } from 'react'
import { cn } from '../../utils/cn'
import Background from '../../assets/images/svg/Background.svg?raw'

export const Container: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ children, style, className, ...restProps}) => {

  // TO-DO:
  // - maybe switch from inlining the image ot referencing it like originally `url(${Background})`
  // - also do this for all other components that use image assets

  return (
    <div
      {...restProps}
      className={cn('mll-relative mll-border-y mll-border-t-neutral-500 mll-border-b-neutral-900', className)}
      style={{
        ...style,
        backgroundImage: `url('data:image/svg+xml;base64,${btoa(Background)}')`,
        backgroundSize: 'cover',
        boxShadow: '2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07)'
      }}
    >
      { children }
    </div>
  )
}