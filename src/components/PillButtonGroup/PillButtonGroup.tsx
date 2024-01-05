import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import ToggleButtonBackground from '../../assets/images/svg/ToggleButtonBackground.svg?raw'

export const PillButtonGroup: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { label: string }> = ({ label, className, children, ...restProps }) => {
  return (
    <div
      {...restProps}
      className={cn('mll-flex mll-flex-col mll-justify-center mll-items-center mll-gap-3 mll-font-jost', label && 'mll-mt-7', className)}
    >
      <div
        className='mll-flex mll-justify-center mll-items-center mll-bg-cbg mll-rounded-full mll-shadow-toggle-btn-bg'
        style={{ backgroundImage: `url('data:image/svg+xml;base64,${btoa(ToggleButtonBackground)}')` }}
      >
        { children }
      </div>
      { label && <div className='mll-text-neutral-400 mll-text-center mll-text-xs'>{ label }</div>}
    </div>
  )
}
