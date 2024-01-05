import React from 'react'
import { cn } from '../../utils/cn'

type Props = {
  value: string,
  className?: string,
}

export const Readout: React.FC<Props> = ({ value, className }) => {
    
  return (
    <div className={cn(
      'mll-relative mll-flex mll-justify-center mll-items-center mll-bg-cbg mll-font-jost mll-font-light mll-rounded-full mll-shadow-readout',
      className || 'mll-w-full mll-h-8'
    )}>
      <div className='mll-w-full mll-text-center mll-text-p2 mll-text-sm mll-drop-shadow-span-text-active'>
        { value }
      </div>
    </div>
  )
}