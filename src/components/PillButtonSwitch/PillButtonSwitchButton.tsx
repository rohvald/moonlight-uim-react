import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { cn } from '../../utils/cn'

type Props = {
  selected: boolean
}

export const PillButtonSwitchButton: React.FC<Props & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({ selected, children, className, ...props }) => {

  return (
    <button
      {...props}
      className={cn('mll-my-[6px] mll-h-7 mll-w-fit mll-flex mll-justify-center mll-items-center mll-border mll-text-sm mll-font-jost mll-duration-200',
        'first:mll-ml-[6px] last:mll-mr-[6px] first:mll-pl-1 last:mll-pr-1 first:mll-rounded-l-full last:mll-rounded-r-full',
        !selected && 'mll-bg-gradient-to-t mll-from-[#202227] mll-to-[#3b3d43] hover:mll-from-[#2a2c33] hover:mll-to-[#43464d] mll-border-[#202227] mll-border-t-[#5f5f5f9e] mll-shadow-pill-btn',
        selected && 'mll-bg-gradient-to-b mll-from-[#131417] mll-to-[#232429] mll-border-p2 mll-border-t-p2 mll-shadow-pill-btn-active',
        className
      )}
    >
      <span className={cn('mll-w-full mll-block mll-text-neutral-400 mll-text-center mll-text-md mll-px-3', selected && 'mll-text-p2 mll-drop-shadow-span-text-active')}>
        { children }
      </span>
    </button>
  )
}