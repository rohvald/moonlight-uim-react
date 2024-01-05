import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { cn } from '../../utils/cn'
import ToggleButtonBackground from '../../assets/images/svg/ToggleButtonBackground.svg'

type Props = {
  toggled: boolean,
  setToggled: React.Dispatch<React.SetStateAction<boolean>>,
  color?: 'red' | 'green',
  icon: boolean
}

export const ToggleButton: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & Props> = ({ toggled, setToggled, color, icon, disabled, className, children, ...restProps }) => {

  return (
    <button
      {...restProps}
      className={cn(
        'mll-pt-[4px] mll-px-[5px] mll-pb-[6px] mll-flex mll-justify-center mll-items-center mll-bg-cbg mll-font-jost mll-rounded-full mll-shadow-toggle-btn-bg',
        icon ? 'mll-w-10 mll-h-10' : 'mll-w-fit mll-p-1',
        className
      )}
      style={{ backgroundImage: `url('data:image/svg+xml;base64,${btoa(ToggleButtonBackground)}')` }}
      onClick={() => setToggled(!toggled)}
      disabled={disabled}
    >
      <div
        className={cn('mll-w-full mll-h-full mll-rounded-full mll-flex mll-justify-center mll-items-center mll-border mll-duration-200',
          !toggled && 'mll-bg-gradient-to-t mll-from-[#202227] mll-to-[#3b3d43] mll-border-[#202227]',
          !disabled && !toggled && 'hover:mll-from-[#2a2c33] hover:mll-to-[#43464d]',
          !disabled && toggled && !color && 'mll-bg-gradient-to-b mll-from-[#131417] mll-to-[#232429] mll-border-p2',
          !disabled && toggled && color === 'red' && 'mll-border-red-600',
          !disabled && toggled && color === 'green' && 'mll-border-emerald-600',
          !disabled && toggled ? 'mll-shadow-pill-btn-active' : 'mll-shadow-pill-btn'
        )}
      >
        <div
          className={cn('mll-w-full mll-pt-[1px] mll-text-center mll-text-sm mll-uppercase mll-duration-200',
            !icon && 'mll-px-2',
            disabled && 'mll-text-neutral-600',
            !disabled && !toggled && 'mll-text-neutral-400',
            !disabled && toggled && color === 'red' && 'mll-text-red-600 mll-drop-shadow-span-text-active-red',
            !disabled && toggled && color === 'green' && 'mll-text-emerald-600 mll-drop-shadow-span-text-active-green',
            !disabled && toggled && !color && 'mll-text-p2 mll-drop-shadow-span-text-active'
          )}
        >{ children }</div>
      </div>
    </button>
  )
}