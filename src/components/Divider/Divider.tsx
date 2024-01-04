import React from 'react'
import { cn } from '../../utils/cn'

export type Props = {
  axis: 'horizontal' | 'vertical'
}

export const Divider: React.FC<Props> = ({ axis }) => {
  return (
    <div className={cn(
      'mll-border mll-border-black',
      axis === 'horizontal' && 'mll-w-full mll-shadow-divider-horizontal',
      axis === 'vertical' && 'mll-h-full mll-shadow-divider-vertical'
    )}/>
  )
}