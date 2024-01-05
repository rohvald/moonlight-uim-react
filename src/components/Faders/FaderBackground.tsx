import React from 'react'
import { cn } from '../../utils/cn'

type FaderBackgroundProps = {
  children: React.ReactNode,
  className?: string
}

export const FaderBackground: React.FC<FaderBackgroundProps> = ({ children, className }) => {
  return (
    <div id='fader-bg' className={cn('mll-h-[254px] mll-bg-[#1c1e23] mll-flex mll-justify-center mll-items-center mll-shadow-fader', className)}>
      { children }
    </div>
  )
}