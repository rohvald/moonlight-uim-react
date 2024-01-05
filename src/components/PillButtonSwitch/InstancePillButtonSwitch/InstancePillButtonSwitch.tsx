import React, { useEffect, useState } from 'react'
import { IPillButtonSwitchOption, PillButtonSwitch } from '../PillButtonSwitch'

type InstancePillButtonSwitchProps = {
  options: IPillButtonSwitchOption[],
  value: string,
  label?: string,
  parameter: string,
  parameterHandler: (parameter: string, value: string) => void,
  className?: string
}

export const InstancePillButtonSwitch: React.FC<InstancePillButtonSwitchProps> = ({ options, value, label, parameter, parameterHandler, className }) => {

  const [valueState, setValueState] = useState<string>(value)

  useEffect(() => {
    parameterHandler(parameter, valueState)
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