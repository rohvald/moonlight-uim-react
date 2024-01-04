import React from 'react'
import { rescale } from '../../../utils/math'
import { GenericKnob, StandardKnobProps, isParameterHandlerWithChannel, isParameterHandlerWithoutChannel } from '../GenericKnob/GenericKnob'
import { listToLegend } from './listToLegend'

interface ListKnobProps {
  value: string,
  list: string[]
}

export const ListKnob: React.FC<ListKnobProps & StandardKnobProps> = ({ value, list, channel, parameter, label, unit, parameterHandler, className, size }) => {

  if (list.indexOf(value) === -1) throw Error(`Provided value '${value}' to '${parameter}' is not a valid step within the provided list [${list}].`)

  const genericValue = rescale(list.indexOf(value), [0, list.length-1], [0, 1])

  const toListValue = (genericValue: number): string => {
    const float = rescale(genericValue, [0, 1], [0, list.length-1])
    const index = Math.round(float)
    return list[index]
  }

  const wrappedParameterHandler = (genericValue: number) => {
    if (isParameterHandlerWithoutChannel(parameterHandler)) {
      parameterHandler(parameter, toListValue(genericValue))
    }
    else if (isParameterHandlerWithChannel(parameterHandler)) {
      if (channel === undefined) throw Error(`Channel value not assigned to ${parameter}`)
      parameterHandler(parameter, toListValue(genericValue), channel)
    } else throw Error(`Bad parameterHandler passed to ${parameter}`)
  }

  return (
    <GenericKnob
      displayValue={value}
      genericValue={genericValue}
      label={label}
      unit={unit}
      steps={list.map((item, index) => index / (list.length - 1))}
      legend={listToLegend(list)}
      parameterHandler={wrappedParameterHandler}
      className={className}
      size={size}
    />
  )
}