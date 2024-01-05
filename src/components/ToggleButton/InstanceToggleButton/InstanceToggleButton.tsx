import React, { useEffect, useState, ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { ToggleButton } from '../ToggleButton'

type Props = {
  toggled: boolean,
  parameterHandler: (parameter: string, value: string | number | boolean) => void,
  parameter: string,
  color?: 'red' | 'green',
  icon: boolean,
  className?: string
}

export const InstanceToggleButton: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & Props> = ({ toggled, parameterHandler, parameter, color, icon, className, children, ...restProps }) => {

  const [toggleState, setToggleState] = useState(toggled)

  useEffect(() => {
    parameterHandler(parameter, toggleState)
  }, [toggleState])

  return (
    <ToggleButton
      {...restProps}
      toggled={toggleState}
      setToggled={setToggleState}
      color={color}
      icon={icon}
      className={className}
    >
      { children }
    </ToggleButton>
  )
}