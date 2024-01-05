import React, { useEffect, useState, ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { ToggleButton } from '../ToggleButton'

type Props = {
  toggled: boolean,
  parameterHandler: (parameter: string, value: string | number | boolean, channel: number) => void,
  channel: number,
  parameter: string,
  color?: 'red' | 'green',
  icon: boolean,
  className?: string
}

export const ChannelToggleButton: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & Props> = ({ toggled, parameterHandler, channel, parameter, color, icon, className, children, ...restProps }) => {

  const [toggleState, setToggleState] = useState(toggled)

  useEffect(() => {
    parameterHandler(parameter, toggleState, channel)
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