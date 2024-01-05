import React from 'react'
import { cn } from '../../utils/cn'
import ToggleButtonBackground from '../../assets/images/svg/ToggleButtonBackground.svg?raw'
import { PillButtonSwitchButton } from './PillButtonSwitchButton'

export interface IPillButtonSwitchOption {
  value: string,
  altDisplayValue?: React.ReactNode
}

type PillButtonSwitchProps = {
  options: IPillButtonSwitchOption[],
  currentValue: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  label?: string,
  className?: string
}

export const PillButtonSwitch: React.FC<PillButtonSwitchProps> = ({ options, currentValue, label, setValue, className }) => {
  return (
    <div className={cn('mll-flex mll-flex-col mll-justify-center mll-items-center mll-gap-3 mll-font-jost', label && 'mll-mt-7', className)}>
      <div
        className='mll-flex mll-justify-center mll-items-center mll-bg-cbg mll-rounded-full mll-shadow-toggle-btn-bg'
        style={{ backgroundImage: `url('data:image/svg+xml;base64,${btoa(ToggleButtonBackground)}')` }}
      >
        {
          options.map((option) => (
            <PillButtonSwitchButton
              key={option.value.toString()}
              value={option.value}
              selected={option.value === currentValue}
              onClick={() => setValue(option.value)}
            >
              { option.altDisplayValue ? option.altDisplayValue : option.value }
            </PillButtonSwitchButton>
          ))
        }
      </div>
      { label && <div className='mll-text-neutral-400 mll-text-center mll-text-xs'>{ label }</div>}
    </div>
  )
}
