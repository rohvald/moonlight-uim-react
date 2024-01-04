import React from 'react'
import { rescale } from '../../../utils/math'
import { GenericKnob, StandardKnobProps, isParameterHandlerWithChannel, isParameterHandlerWithoutChannel } from '../GenericKnob/GenericKnob'

interface OffableContinuousKnobProps {
  value: number,
  range: [number, number],
  off: number
}

export const OffableContinuousKnob: React.FC<OffableContinuousKnobProps & StandardKnobProps> = ({ value, range, off, channel, parameter, label, unit, parameterHandler, className, size }) => {

  const genericValue = () => {
    const rescaled = rescale(value, range, [0.2, 1])
    if (value !== off) return rescaled
    return 0
  }

  const toContinuousValue = (genericValue: number): number => {
    const rescaled = rescale(genericValue, [0.2, 1], range)
    if (genericValue >= 0.2) return rescaled
    return off
  }

  const wrappedParameterHandler = (genericValue: number) => {
    if (isParameterHandlerWithoutChannel(parameterHandler)) {
      parameterHandler(parameter, toContinuousValue(genericValue))
    }
    else if (isParameterHandlerWithChannel(parameterHandler)) {
      if (channel === undefined) throw Error(`Channel value not assigned to ${parameter}`)
      parameterHandler(parameter, toContinuousValue(genericValue), channel)
    } else throw Error(`Bad parameterHandler passed to ${parameter}`)
  }

  const getMiddleValue = (range: [number, number]): number => {
    if (range[0] === range[1]) throw Error('Bad range.')
    const diff = Math.abs(range[0] - range[1])
    const middleIndex = diff / 2
    if (range[0] < range[1]) return range[0] + middleIndex
    else return range[0]- middleIndex
  }
    
  return (
    <GenericKnob
      displayValue={value.toFixed(1)}
      genericValue={genericValue()}
      label={label}
      unit={unit}
      steps={2}
      legend={[range[0].toString(), getMiddleValue(range).toFixed(1), range[1].toString()]}
      parameterHandler={wrappedParameterHandler}
      className={className}
      size={size}
    />
  )
}
