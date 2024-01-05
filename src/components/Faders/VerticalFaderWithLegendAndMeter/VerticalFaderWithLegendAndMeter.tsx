import React, { useEffect, useState } from 'react'
import { cn } from '../../../utils/cn'
import { rescale } from '../../../utils/math'
import { FaderBackground } from '../FaderBackground'
import { FaderLegend } from '../FaderLegend'
import { FaderSlider } from '../FaderSlider'
import { VerticalMeter } from '../../Meters/VerticalMeter/VerticalMeter'

type VerticalFaderWithLegendAndMeterProps = {
  horizontal?: boolean,
  volume: number,
  channel: number,
  value_mono?: number,
  value_stereo?: [number, number],
  parameterHandler: (parameter: string, value: string | number | boolean, channel: number) => void,
  className?: string
}

export const VerticalFaderWithLegendAndMeter: React.FC<VerticalFaderWithLegendAndMeterProps> = ({ className, volume, channel, value_mono, value_stereo, parameterHandler }) => {

  const [position, setPosition] = useState(rescale(volume, [-46, 10], [0, 1]))

  useEffect(() => {
    const volume = rescale(position, [0, 1], [-46, 10])
    parameterHandler('input', volume, channel)
  }, [position])

  useEffect(() => {
    setPosition(rescale(volume, [-46, 10], [0, 1]))
  }, [volume])

  return (
    <div id='fader' className={cn('mll-flex mll-space-x-2', className)}>
      <FaderBackground className={cn('mll-rounded-xl', className)} >
        <FaderLegend />
        <FaderSlider position={position} setPosition={setPosition} />
      </FaderBackground>
      <VerticalMeter scale={['-inf', '-36', '-27', '-18', '-9', '0', '9']} value_mono={value_mono} value_stereo={value_stereo} />
    </div>
  )
}