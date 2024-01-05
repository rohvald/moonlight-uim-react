import { getClientXY } from '../../utils/touchutils'

export const updateFader = (target: HTMLDivElement | null, setPosition: (volume: number) => void, e: TouchEvent | MouseEvent) => {

  // if you remove CSS .track_fg { pointer-events-none }, the following will start to happen:
  // if e.target == index_fader_grip  --->   dy: always 17.5   rect.height: always 35           setPosition: always 0.5
  // if e.target == index_track_fg    --->   dy: correct       rect.height: track_fg height %   setPosition: BUGGED

  const rect = (target || e.target as HTMLDivElement).getBoundingClientRect()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clientX, clientY] = getClientXY(e)
  const dy = rect.bottom - clientY
  const newPosition = Math.min(Math.max(dy / rect.height, 0), 1)
  setPosition(newPosition)
}

