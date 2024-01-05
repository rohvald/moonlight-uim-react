import React from 'react'
import { cn } from '../../utils/cn'

export const FaderLegend: React.FC = () => {
    
  return (
    <div
      id='fader-legend'
      className={cn(
        'mll-pt-[5px] mll-pb-[8px] mll-ml-[10px]',
        'mll-flex mll-flex-col mll-justify-between mll-text-neutral-400 mll-text-right mll-font-light mll-font-jost mll-text-sm mll-whitespace-nowrap'
      )}
      style={{ height: 'inherit' }}
    >
      <span>9 -</span>
      <span>0 -</span>
      <span>9 -</span>
      <span>18 -</span>
      <span>27 -</span>
      <span>36 -</span>
      <span>inf -</span>
    </div>
  )
}