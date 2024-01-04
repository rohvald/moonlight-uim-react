import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import ButtonBackground from '../../assets/images/svg/ButtonBackground.svg'

export type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { icon?: boolean }

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, icon = false, className, style, disabled, ...restProps }, ref) => {  
      
    return (
      <button
        ref={ref}
        {...restProps}
        type='button'
        className={cn(
          'mll-flex mll-justify-center mll-items-center mll-bg-cbg mll-font-jost mll-rounded-full mll-shadow-toggle-btn-bg',
          disabled ? 'mll-text-neutral-600' : 'mll-text-neutral-400',
          icon && 'mll-w-10 mll-h-10',
          !icon && 'mll-w-fit',
          className
        )}
        style={{
          ...style,
          backgroundImage: `url('data:image/svg+xml;base64,${btoa(ButtonBackground)}')`,
        }}
        disabled={disabled}
      >
        <div className={cn(
          'mll-m-[6px] mll-h-7 mll-w-full mll-flex mll-justify-center mll-items-center mll-bg-gradient-to-t mll-from-[#202227] mll-to-[#3b3d43] mll-rounded-full',
          'mll-shadow-pill-btn mll-duration-200',
          !disabled && 'hover:mll-from-[#2a2c33] hover:mll-to-[#43464d] active:mll-shadow-pill-btn-active'
        )}>
          <span className={cn('mll-w-full mll-flex mll-justify-center mll-items-center mll-text-center mll-text-md mll-font-jost', !icon && 'mll-p-3' )}>
            { children }
          </span>
        </div>
      </button>
    )
  }
)