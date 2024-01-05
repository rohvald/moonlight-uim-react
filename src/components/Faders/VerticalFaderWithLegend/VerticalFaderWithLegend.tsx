import React, { useState } from 'react'
import { cn } from '../../../utils/cn'
import { rescale } from '../../../utils/math'
import { FaderBackground } from '../FaderBackground'
import { FaderLegend } from '../FaderLegend'
import { FaderSlider } from '../FaderSlider'

type VerticalFaderWithLegendProps = {
  className?: string,
  horizontal?: boolean,
  volume: number,
  channel: number,
  parameterHandler: (parameter: string, value: string | number | boolean, channel: number) => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const VerticalFaderWithLegend: React.FC<VerticalFaderWithLegendProps> = ({ className, volume, channel, parameterHandler }) => {

  const [position, setPosition] = useState(rescale(volume, [-46, 10], [0, 1]))

  return (
    <FaderBackground className={cn('mll-rounded-xl', className)} >
      <FaderLegend />
      <FaderSlider position={position} setPosition={setPosition} />
    </FaderBackground>
  )
}