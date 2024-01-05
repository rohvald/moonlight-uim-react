import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { cn } from '../../utils/cn'

export const PillButtonGroupButton: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({ disabled, children, className, ...restProps }) => {

  return (
    <button
      {...restProps}
      className={cn('mll-my-[6px] mll-h-7 mll-w-fit mll-flex mll-justify-center mll-items-center mll-border mll-text-sm mll-font-jost mll-duration-200',
        'first:mll-ml-[6px] last:mll-mr-[6px] first:mll-pl-1 last:mll-pr-1 first:mll-rounded-l-full last:mll-rounded-r-full',
        'mll-bg-gradient-to-t mll-from-[#202227] mll-to-[rgb(59,61,67)] mll-border-[#202227] mll-border-t-[#5f5f5f9e] mll-shadow-pill-btn',
        !disabled && 'hover:mll-from-[#2a2c33] hover:mll-to-[#43464d] active:mll-bg-gradient-to-b active:mll-from-[#131417] active:mll-to-[#232429] active:mll-border-p2 active:mll-border-t-p2 active:mll-shadow-pill-btn-active',
        className
      )}
      disabled={disabled}
    >
      <span className={cn(
        'mll-block mll-w-full mll-px-3 mll-text-center mll-text-lg mll-duration-200',
        disabled
          ? 'mll-text-neutral-600'
          : 'mll-text-neutral-400 active:mll-text-p2 active:mll-drop-shadow-span-text-active'
        )}
      >
        { children }
      </span>
    </button>
  )
}