import React from 'react'
import { cn } from '../../../utils/cn'

type Props = {
  label: string,
  scale: string[],
  value_mono?: number,
  value_stereo?: [number, number],
  className?: string,
}

export const HorizontalMeter: React.FC<Props> = ({ className, scale, label, value_mono, value_stereo }) => {

  return (

    <div className={cn('mll-w-[300px] mll-p-4 mll-flex mll-flex-col mll-justify-center mll-items-center mll-gap-2 mll-bg-[#1c1e23] mll-font-jost mll-rounded-xl mll-shadow-readout', className)}>

      <div className={cn('mll-w-full mll-flex mll-flex-reverse mll-justify-between mll-text-neutral-400 mll-text-right mll-font-light mll-text-xs mll-cursor-default')} style={{ height: 'inherit' }}>
        { scale.map(item => (
          <div key={item} className='mll-flex mll-flex-col mll-justify-center mll-items-center'>
            <span>{item}</span>
            <span className='mll-text-neutral-600'>|</span>
          </div>
        ))}
      </div>

      <div className='mll-w-full mll-flex mll-flex-col mll-gap-2'>

        { value_mono && (
          <div id='mono-channel' className='mll-w-full mll-p-1 mll-flex mll-flex-row mll-justify-between mll-items-center mll-rounded-full mll-overflow-hidden mll-bg-neutral-900'>
            <div id='signal' className='mll-h-2 mll-my-[1px] mll-bg-gradient-to-b mll-from-p2 mll-to-p1 mll-opacity-50 mll-rounded-full' style={{ width: `${value_mono}%` }}/>
            <div id='cap' className='mll-bg-p2 mll-h-2 mll-w-[2px]'/>
          </div>
        )}

        { value_stereo && (
          <>
            <div id='left-channel' className='mll-w-full mll-p-1 mll-flex mll-flex-row mll-justify-between mll-items-center mll-rounded-full mll-overflow-hidden mll-bg-neutral-900'>
              <div id='signal' className='mll-h-2 mll-my-[1px] mll-bg-gradient-to-b mll-from-p2 mll-to-p1 mll-opacity-50 mll-rounded-full' style={{ width: `${value_stereo[0]}%` }}/>
              <div id='cap' className='mll-bg-p2 mll-h-2 mll-w-[2px]'/>
            </div>

            <div id='right-channel' className='mll-w-full mll-p-1 mll-flex mll-flex-row mll-justify-between mll-items-center mll-rounded-full mll-overflow-hidden mll-bg-neutral-900'>
              <div id='signal' className='mll-h-2 mll-my-[1px] mll-bg-gradient-to-b mll-from-p2 mll-to-p1 mll-opacity-50 mll-rounded-full' style={{ width: `${value_stereo[1]}%` }}/>
              <div id='cap' className='mll-bg-p2 mll-h-2 mll-w-[2px]'/>
            </div>
          </>
        )}

      </div>

      <div className='mll-w-full mll-text-sm mll-text-center mll-uppercase mll-text-neutral-400 mll-cursor-default'>{ label }</div>

    </div>
  )
}