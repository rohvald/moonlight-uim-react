import React from 'react'
import { cn } from '../../utils/cn'

type Props = {
  value: boolean,
  parameterHandler: () => void,
  vertical?: boolean
}

export const Toggle: React.FC<Props> = ({ value, parameterHandler, vertical = false }) => {

  return (
    <div
      className={cn(
        'mll-w-[68px] mll-h-8 mll-flex mll-flex-col mll-items-center mll-bg-cbg mll-border-2 mll-border-[#303238] mll-rounded-full mll-cursor-pointer mll-shadow-toggle-bg',
        vertical && '-mll-rotate-90'
      )}
      onClick={parameterHandler}>
      <div
        className={cn('mll-w-10 mll-h-[26px] mll-m-1 mll-flex mll-bg-gradient-to-b mll-from-[#202227] mll-to-[#3b3d43] mll-rounded-full mll-duration-300 mll-ease-in-out',
          'mll-shadow-toggle-inner mll-rotate-180',
          value ? 'mll-translate-x-[15%]' : '-mll-translate-x-[20%]'
        )}
      >
        <span className={cn('mll-w-[6px] mll-h-[6px] mll-rounded-full mll-m-auto', value ? 'mll-bg-p2 mll-shadow-toggle-inner-span' : 'mll-bg-black' )} />
      </div>
    </div>
  )
}