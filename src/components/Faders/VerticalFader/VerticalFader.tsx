import React, { useState } from 'react'
import { cn } from '../../../utils/cn'
import { rescale } from '../../../utils/math'
import { FaderBackground } from '../FaderBackground'
import { FaderSlider } from '../FaderSlider'

type VerticalFaderProps = {
  children?: React.ReactNode,
  className?: string,
  horizontal?: boolean,
  volume: number,
  channel: number,
  parameterHandler: (parameter: string, value: string | number | boolean, channel: number) => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const VerticalFader: React.FC<VerticalFaderProps> = ({ children, className, volume, channel, parameterHandler }) => {

  const [position, setPosition] = useState(rescale(volume, [-46, 10], [0, 1]))

  return (
    <FaderBackground className={cn('mll-rounded-full', className)}>
      <FaderSlider position={position} setPosition={setPosition} />
      { children }
    </FaderBackground>
  )
}