import React, { createRef, useMemo } from 'react'
import { rescale } from '../../utils/math'
import { updateFader } from './updateFader'

type FaderSliderProps = {
  position: number,
  setPosition: (value: number) => void
}

export const FaderSlider: React.FC<FaderSliderProps> = ({ position, setPosition }) => {

  const ref = createRef<HTMLDivElement>()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      className='mll-relative mll-w-[10px] mll-h-[222px] mll-mx-3 mll-flex mll-bg-[#17191e] mll-rounded-full mll-cursor-pointer mll-shadow-fader'
      // onClick={onEvent}
      onDoubleClick={doubleClickHandler}
      onMouseDown={onDragStart}
      ref={ref}
    >
      <div
        id='track-fg'
        className='mll-w-[10px] mll-bg-gradient-to-t mll-from-p1h mll-to-p2h mll-rounded-full mll-self-end mll-pointer-events-none'
        style={{height: `${position * 100}%`}}
      >
        <div
          id='fader-grip'
          className='mll-relative mll-h-9 mll-w-[10px] -mll-top-[18px] mll-flex mll-justify-center mll-items-center mll-bg-gradient-to-t mll-from-bgt mll-to-bgb mll-rounded-full mll-shadow-fader-grip'
          draggable
          onDragStart={onDragStart}
          // onTouchMove={onEvent}
        >
          <div
            id='fader-grip-inner'
            className='mll-w-full mll-h-1 mll-bg-p2'
          />
        </div>
      </div>
    </div>
  )
}