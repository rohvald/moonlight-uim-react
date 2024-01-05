import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type Props = {
  shadowType?: 1 | 2
}

export const Header: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & Props> = ({ shadowType = 1, children, className, ...restProps }) => (
  <h1
    {...restProps}
    className={cn('mll-text-neutral-400 mll-text-xl mll-font-bold mll-font-jost',
    shadowType === 1 && 'mll-dropshadowheader-1',
    shadowType === 2 && 'mll-dropshadowheader-2',
    className
  )}>
    { children }
  </h1>
)
