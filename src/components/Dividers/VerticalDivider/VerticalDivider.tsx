import React from 'react'
import { cn } from '../../../utils/cn'

export type Props = {
  className?: string
}

export const VerticalDivider: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('mll-h-full mll-border mll-border-neutral-900 mll-shadow-divider-verical', className)} />
  )
}