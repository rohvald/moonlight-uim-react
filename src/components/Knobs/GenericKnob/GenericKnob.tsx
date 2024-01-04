import React, { useEffect, useState } from 'react'
import { cn } from '../../../utils/cn'
import { getClientXY } from '../../../utils/touchutils'
import Pointer from '../../../assets/images/svg/Pointer.svg?raw'

/**
 * Userji expectajo precej od knofa:
 * - [x] da se ga da vlečt
 * - [ ] da se ga da resetirat (double click to default)
 * - [ ] da se ga da editirat (double click on value)
 * - [ ] da se ga it na specifično vrednost (click on label)
 * 
 * How to DRY up wrappers:
 * - dont repeat channel wrapping (GenericChannelKnob?)
 * - dont repeat parameter wrapping
 */

export const isParameterHandlerWithChannel = (handler: ParameterHandler): handler is ((parameter: string, value: string | number | boolean, channel: number) => void) => {
  return handler.length === 3
}

export const isParameterHandlerWithoutChannel = (handler: ParameterHandler): handler is ((parameter: string, value: string | number | boolean) => void) => {
  return handler.length === 2
}

export type ParameterHandlerWithChannel = (parameter: string, value: string | number | boolean, channel: number) => void
export type ParameterHandlerWithoutChannel = (parameter: string, value: string | number | boolean) => void
export type ParameterHandler = ParameterHandlerWithChannel | ParameterHandlerWithoutChannel

export interface StandardKnobProps {
  channel?: number,
  parameter: string,
  label: string,
  unit?: string,
  parameterHandler: ParameterHandler,
  size: 'xs' | 'sm' | 'md',
  className?: string
}

/**
 * GENERIC KNOB
 */

type GenericKnobProps = {
  displayValue: string,
  genericValue: number,
  label: string,
  unit?: string,
  steps: number[] | 2 | false,
  legend: string[] | false
  parameterHandler: (value: number) => void,
  size: 'xs' | 'sm' | 'md',
  className?: string
}

export const GenericKnob: React.FC<GenericKnobProps> = ({ displayValue, genericValue, label, unit, steps, legend, parameterHandler, size, className }) => {

  const [pointerValue, setPointerValue] = useState(genericValue)

  const pointerDegrees = (pointerValue - 0.5) * 270

  function updateSmallKnob(target: HTMLDivElement | null, setPointerValue: React.Dispatch<React.SetStateAction<number>>, e: TouchEvent | MouseEvent) {
    const rect = (target || e.target as HTMLDivElement).getBoundingClientRect()
    const cx = rect.x + rect.width / 2
    const cy = rect.y + rect.height / 2
  
    const [clientX, clientY] = getClientXY(e)
    const dx = cx - clientX
    const dy = cy - clientY
    let angle = (Math.atan2(dy, dx) / Math.PI + 1) / 2
    angle -= 0.25
    if (angle < 0) {
      angle += 1
    }
    angle = Math.min(Math.max(angle, 1 / 8), 7 / 8)

    const newPointerValue = (angle - 1 / 8) * 8 / 6

    switch (steps) {
      case false:
        setPointerValue(newPointerValue)
        break
      case 2:
        if (newPointerValue > 0.2) {
          setPointerValue(newPointerValue)
        } else {
          if (newPointerValue > 0.1 && newPointerValue <= 0.2) setPointerValue(0.2)
          else setPointerValue(0)
        }
        break
      default: {
        const preciseValue = (angle - 1 / 8) * 8 / 6
        const closestStepValue = steps.reduce((prevValue, currentValue) => Math.abs(currentValue - preciseValue) < Math.abs(prevValue - preciseValue) ? currentValue : prevValue)
        setPointerValue(closestStepValue)
        break
      }
    }
  }
  
  // const onEventHandler = useMemo(() => {
  //   return updateSmallKnob.bind(null, null, setPointerValue)
  // }, [setPointerValue])


  const onDragStartHandler = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    // console.log(`onDragStart: ${label}`)
    if ("changedTouches" in e) {
      window.ontouchmove = updateSmallKnob.bind(null, e.target as HTMLDivElement, setPointerValue)
      window.ontouchend = () => {
        window.ontouchmove = null
        window.ontouchend = null
      }
    } else {
      window.onmousemove = updateSmallKnob.bind(null, e.target as HTMLDivElement, setPointerValue)
      window.onmouseup = () => {
        window.onmousemove = null
        window.onmouseup = null
      }
    }
  }

  const doubleClickHandler = () => {
    const defaultValue = 0.5
    setPointerValue((defaultValue - 1 / 8) * 8 / 6)
  }

  useEffect(() => {
    parameterHandler(pointerValue)
  }, [pointerValue])

  return (
    <div className={cn('mll-relative mll-w-[140px] mll-h-[140px] mll-flex mll-justify-center mll-items-center mll-font-jost',
      size === 'md' && 'mll-w-[120px] mll-h-[120px]',
      size === 'sm' && 'mll-w-[100px] mll-h-[100px]',
      size === 'xs' && 'mll-w-[80px] mll-h-[80px]',
      className
    )}>
      
      { legend !== false && (
        <GenericCircleLegend
          values={legend}
          size={size}
        />
      )}

      <div
        id='small-knob'
        className={cn('mll-relative mll-w-[77px] mll-h-[77px] mll-flex mll-justify-center mll-items-center mll-bg-cbg mll-rounded-full mll-touch-none mll-shadow-knob-outer',
          size === 'md' && 'mll-scale-100',
          size === 'sm' && 'mll-scale-75',
          size === 'xs' && 'mll-scale-50',
          className
        )}
        draggable
        onDragStart={onDragStartHandler}
        // onClick={onEventHandler}
        onDoubleClick={doubleClickHandler}
        // onTouchMove={onEventHandler}
      >
        <div id='small-knob-inner' className='mll-w-[63px] mll-h-[63px] mll-flex mll-justify-center mll-items-center mll-bg-gradient-to-b mll-from-[#626469] mll-to-[#181A1D] mll-rounded-full mll-cursor-pointer mll-shadow-knob-inner'>
          <div id='small-knob-grip' className='mll-w-[55px] mll-h-[55px] mll-flex mll-justify-center mll-items-center mll-bg-gradient-to-b mll-from-bgb mll-to-cbgb mll-rounded-full mll-shadow-knob-grip'>
            <div className={cn('mll-text-center', unit ? 'mll-pt-4' : 'mll-pt-1')}>
              <div className='mll-text-neutral-400 mll-text-md'>{ displayValue }</div>
              { unit && <div className='mll-text-neutral-500 mll-text-xs'>{ unit }</div> }
            </div>
          </div>
        </div>

        <div
          id='small-knob-pointer'
          className="mll-absolute mll-w-[11px] mll-h-[11px] mll-top-[10px] mll-pointer-events-none"
          style={{
            backgroundImage: `url('data:image/svg+xml;base64,${btoa(Pointer)}')`,
            transform: `translateY(24px) rotate(${pointerDegrees}deg) translateY(-24px)`
          }}
        />

      </div>

      <div className='mll-absolute mll-bottom-0 mll-w-full mll-text-neutral-400 mll-text-center mll-text-xs' >{ label }</div>

    </div>
  )
}

type GenericCircleLegendProps = {
  values: string[],
  size: 'xs' | 'sm' | 'md'
}

export const GenericCircleLegend: React.FC<GenericCircleLegendProps> = ({ values, size }) => {

  const count = values.length - 1
  const angle = 270 / count

  const translateXfromSize = (): number => {
    switch (size) {
      case 'md': return -55
      case 'sm': return -45
      case 'xs': return -40
      default: return -55
    }
  }

  return (
    <div className={cn('mll-absolute mll-flex mll-justify-center mll-items-center',
      size === 'md' && 'mll-w-[110px] mll-h-[110px]',
      size === 'sm' && 'mll-w-[90px] mll-h-[90px]',
      size === 'xs' && 'mll-w-[70px] mll-h-[70px]'
    )}>
      {
        values.map((value, index) => {
          
          const offsetAngle = (index - count / 6) * angle
          
          return (
            <span
              key={index}
              className='mll-absolute mll-text-neutral-400 mll-font-normal mll-font-jost mll-text-sm mll-drop-shadow-knob-legend'
              style={{ transform: `rotate(${offsetAngle}deg) translateX(${translateXfromSize()}px) rotate(${-offsetAngle}deg)` }}
            >
              { value }
            </span>
          )
        })
      }
    </div>
  )
}
