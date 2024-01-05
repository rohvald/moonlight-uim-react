import React, { useEffect, useState, HTMLProps } from 'react'
import { IPillButtonSwitchOption, PillButtonSwitch } from '../PillButtonSwitch'

type ChannelPillButtonSwitchProps = {
  options: IPillButtonSwitchOption[],
  value: string,
  label?: string,
  channel: number,
  parameter: string,
  parameterHandler: (parameter: string, value: string, channel: number) => void,
  className?: string
}

export const ChannelPillButtonSwitch: React.FC<HTMLProps<HTMLDivElement> & ChannelPillButtonSwitchProps> = ({ options, value, label, channel, parameter, parameterHandler, className }) => {

  const [valueState, setValueState] = useState<string>(value)

  useEffect(() => {
    parameterHandler(parameter, valueState, channel)
  }, [valueState])

  return (
    <PillButtonSwitch
      options={options}
      currentValue={valueState}
      setValue={setValueState}
      label={label}
      className={className}
    />
  )
}