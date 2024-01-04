import React, { useMemo } from 'react'
import { rescale } from '../../../utils/math'
import { GenericKnob, StandardKnobProps, isParameterHandlerWithChannel, isParameterHandlerWithoutChannel } from '../GenericKnob/GenericKnob'
import { listToLegend } from '../ListKnob/listToLegend'

interface SteppedKnobProps {
  value: number,
  range: [number, number],
  step: number
}

export const SteppedKnob: React.FC<SteppedKnobProps & StandardKnobProps> = ({ value, range, step, channel, parameter, label, unit, parameterHandler, className, size }) => {

  if ((range[0] - range[1]) % step !== 0) throw Error('Provided step forces last step out of range.')

  const list = useMemo(() => {
    const list: number[] = []
    for (let i = 0; range[0] + i * step <= range[1]; i++) {
      list.push(range[0] + i * step)
    }
    return list
  }, [range, step])

  if (list.indexOf(value) === -1) throw Error(`Provided value ${value} to '${parameter}' is not a valid step within the provided range [${range[0]}, ${range[1]}].`)

  const genericValue = rescale(list.indexOf(value), [0, list.length-1], [0, 1])

  const toSteppedValue = (genericValue: number): number => {
    const float = rescale(genericValue, [0, 1], [0, list.length-1])
    const index = Math.round(float)
    return list[index]
  }

  const wrappedParameterHandler = (genericValue: number) => {
    if (isParameterHandlerWithoutChannel(parameterHandler)) {
      parameterHandler(parameter, toSteppedValue(genericValue))
    }
    else if (isParameterHandlerWithChannel(parameterHandler)) {
      if (channel === undefined) throw Error(`Channel value not assigned to ${parameter}`)
      parameterHandler(parameter, toSteppedValue(genericValue), channel)
    } else throw Error(`Bad parameterHandler passed to ${parameter}`)
  }
  
  return (
    <GenericKnob
      displayValue={value.toString()}
      genericValue={genericValue}
      label={label}
      unit={unit}
      steps={list.map((_, index) => index / (list.length -1 ))}
      legend={listToLegend(list)}
      parameterHandler={wrappedParameterHandler}
      className={className}
      size={size}
    />
  )
}
