import React from 'react'
import { rescale } from '../../../utils/math'
import { GenericKnob, StandardKnobProps, isParameterHandlerWithChannel, isParameterHandlerWithoutChannel } from '../GenericKnob/GenericKnob'

interface ContinuousKnobProps {
  value: number,
  range: [number, number]
}

export const ContinuousKnob: React.FC<ContinuousKnobProps & StandardKnobProps> = ({ value, range, channel, parameter, label, unit, parameterHandler, className, size }) => {

  const genericValue = rescale(value, range, [0, 1])

  const toContinuousValue = (genericValue: number): number => {
    return rescale(genericValue, [0, 1], range)
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
      genericValue={genericValue}
      label={label}
      unit={unit}
      steps={false}
      legend={[range[0].toString(), getMiddleValue(range).toFixed(1), range[1].toString()]}
      parameterHandler={wrappedParameterHandler}
      className={className}
      size={size}
    />
  )
}
