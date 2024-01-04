import React from 'react'
import { cn } from '../../../utils/cn'

export type Props = {
  className?: string
}

export const HorizontalDivider: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('mll-w-full mll-border mll-border-black mll-shadow-divider-horizontal', className)} />
  )
}