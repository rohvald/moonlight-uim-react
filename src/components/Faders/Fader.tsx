import React, { createRef, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import { getClientXY } from '../utils/touchutils'
import { rescale } from '../utils/math'
import { VerticalMeter } from './Meters/VerticalMeter'

// FADER BACKROUND

type FaderBackgroundProps = {
  children: React.ReactNode,
  className?: string
}

export const FaderBackground: React.FC<FaderBackgroundProps> = ({ children, className }) => {
  return (
    <div id='fader-bg' className={classNames('h-[254px] bg-[#1c1e23] inline-flex justify-center items-center shadow-fader', className)}>
      { children }
    </div>
  )
}

// UPDATE FADER FUNCTION

function updateFader(target: HTMLDivElement | null, setPosition: (volume: number) => void, e: TouchEvent | MouseEvent) {

  // if you remove CSS .track_fg { pointer-events-none }, the following will start to happen:
  // if e.target == index_fader_grip  --->   dy: always 17.5   rect.height: always 35           setPosition: always 0.5
  // if e.target == index_track_fg    --->   dy: correct       rect.height: track_fg height %   setPosition: BUGGED

  const rect = (target || e.target as HTMLDivElement).getBoundingClientRect()
  const [clientX, clientY] = getClientXY(e)
  const dy = rect.bottom - clientY
  const newPosition = Math.min(Math.max(dy / rect.height, 0), 1)
  setPosition(newPosition)
}

// FADER SLIDER

type FaderSliderProps = {
  position: number,
  setPosition: (value: number) => void
}

export const FaderSlider: React.FC<FaderSliderProps> = ({ position, setPosition }) => {

  const ref = createRef<HTMLDivElement>()

  const [onDragStart, onEvent] = useMemo(() => {
    return [
      (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        window.onmousemove = updateFader.bind(null, ref.current, setPosition)
        window.onmouseup = () => {
          window.onmousemove = null
          window.onmouseup = null
        }
      },
      updateFader.bind(null, ref.current, setPosition)
    ]
  }, [ref, setPosition])

  const doubleClickHandler = () => {
    // first number (0) sets db
    setPosition(rescale(0, [-46, 10], [0, 1]))
  }

  return (
    <div
      id='track-bg'
      className='relative w-[10px] h-[222px] mx-3 flex bg-[#17191e] rounded-full cursor-pointer shadow-fader'
      // onClick={onEvent}
      onDoubleClick={doubleClickHandler}
      onMouseDown={onDragStart}
      ref={ref}
    >
      <div
        id='track-fg'
        className='bg-gradient-to-t from-p1h to-p2h rounded-full w-[10px] self-end pointer-events-none'
        style={{height: `${position * 100}%`}}
      >
        <div
          id='fader-grip'
          className='relative h-9 w-[10px] -top-[18px] flex justify-center items-center bg-gradient-to-t from-bgt to-bgb rounded-full shadow-fader-grip'
          draggable
          onDragStart={onDragStart}
          // onTouchMove={onEvent}
        >
          <div
            id='fader-grip-inner'
            className='w-full h-1 bg-p2 '
          />
        </div>
      </div>
    </div>
  )
}

// FADER LEGEND

export const FaderLegend: React.FC = () => {
    
  return (
    <div
      id='fader-legend'
      className={classNames('pt-[5px] pb-[8px] ml-[10px] flex flex-col justify-between text-neutral-400 text-right font-light font-jost text-sm whitespace-nowrap')}
      style={{ height: 'inherit' }}
      >
      <span>9 -</span>
      <span>0 -</span>
      <span>9 -</span>
      <span>18 -</span>
      <span>27 -</span>
      <span>36 -</span>
      <span>inf -</span>
    </div>
  )
}

// VERTICAL FADER

type VerticalFaderProps = {
  children?: React.ReactNode,
  className?: string,
  horizontal?: boolean,
  volume: number,
  channel: number,
  parameterHandler: (parameter: string, value: string | number | boolean, channel: number) => void
}

export const VerticalFader: React.FC<VerticalFaderProps> = ({ children, className, volume, channel, parameterHandler }) => {

  const [position, setPosition] = useState(rescale(volume, [-46, 10], [0, 1]))

  return (
    <FaderBackground className={classNames('rounded-full', className)}>
      <FaderSlider position={position} setPosition={setPosition} />
      { children }
    </FaderBackground>
  )
}

// VERTICAL FADER W LEGEND

type VerticalFaderWithLegendProps = {
  className?: string,
  horizontal?: boolean,
  volume: number,
  channel: number,
  parameterHandler: (parameter: string, value: string | number | boolean, channel: number) => void
}

export const VerticalFaderWithLegend: React.FC<VerticalFaderWithLegendProps> = ({ className, volume, channel, parameterHandler }) => {

  const [position, setPosition] = useState(rescale(volume, [-46, 10], [0, 1]))

  return (
    <FaderBackground className={classNames('rounded-xl', className)} >
      <FaderLegend />
      <FaderSlider position={position} setPosition={setPosition} />
    </FaderBackground>
  )
}

// VERTICAL FADER WITH LEGEND AND METER

type VerticalFaderWithLegendAndMeterProps = {
  className?: string,
  horizontal?: boolean,
  volume: number,
  channel: number,
  parameterHandler: (parameter: string, value: string | number | boolean, channel: number) => void
}

export const VerticalFaderWithLegendAndMeter: React.FC<VerticalFaderWithLegendAndMeterProps> = ({ className, volume, channel, parameterHandler }) => {

  const [position, setPosition] = useState(rescale(volume, [-46, 10], [0, 1]))

  useEffect(() => {
    const volume = rescale(position, [0, 1], [-46, 10])
    parameterHandler('input', volume, channel)
  }, [position])

  useEffect(() => {
    setPosition(rescale(volume, [-46, 10], [0, 1]))
  }, [volume])

  return (
    <div className={classNames('flex space-x-2', className)}>
      <FaderBackground className={classNames('rounded-xl', className)} >
        <FaderLegend />
        <FaderSlider position={position} setPosition={setPosition} />
      </FaderBackground>
      <VerticalMeter scale={['-inf', '-36', '-27', '-18', '-9', '0', '9']} />
    </div>
  )
}