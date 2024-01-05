import React from 'react'
import { cn } from '../../../utils/cn'

type Props = {
  label?: string,
  scale: string[],
  value_mono?: number,
  value_stereo?: [number, number],
  className?: string,
}

export const VerticalMeter: React.FC<Props> = ({ className, scale, label, value_mono, value_stereo }) => {

  return (

    <div className={cn('mll-h-64 mll-p-4 mll-flex mll-flex-col mll-justify-center mll-items-center mll-gap-2 mll-bg-[#1c1e23] mll-font-jost mll-rounded-xl mll-shadow-readout', className)}>

      <div className='mll-h-full mll-flex mll-justify-center mll-items-center'>

        <div className={cn('mll-pr-1 mll-flex mll-flex-col-reverse mll-justify-between mll-items-center mll-text-neutral-400 mll-text-right mll-font-light mll-text-sm mll-cursor-default')} style={{ height: 'inherit' }}>
          { scale.map(item => (
            <div key={item} className='mll-w-8 mll-flex mll-justify-end mll-items-center mll-gap-1'>
              <span>{item}</span>
              <span className='mll-text-neutral-600'>-</span>
            </div>
          ))}
        </div>

        { value_mono && (
          <div id='mono-channel' className='mll-h-full mll-p-1 mll-flex mll-flex-col-reverse mll-justify-between mll-items-center mll-rounded-full mll-overflow-hidden mll-bg-neutral-900'>
            <div id='signal' className='mll-w-2 mll-mx-[1px] mll-bg-gradient-to-b mll-from-p2 mll-to-p1 mll-opacity-50 mll-rounded-full' style={{ height: `${value_mono}%` }}/>
            <div id='cap' className='mll-w-2 mll-h-[2px] mll-bg-p2'/>
          </div>
        )}

        { value_stereo && (
          <>
            <div id='left-channel' className='mll-h-full mll-p-1 mll-flex mll-flex-col-reverse mll-justify-between mll-items-center mll-rounded-full mll-overflow-hidden mll-bg-neutral-900'>
              <div id='signal' className='mll-w-2 mll-mx-[1px] mll-bg-gradient-to-b mll-from-p2 mll-to-p1 mll-opacity-50 mll-rounded-full' style={{ height: `${value_stereo[0]}%` }}/>
              <div id='cap' className='mll-w-2 mll-h-[2px] mll-bg-p2 '/>
            </div>

            <div id='right-channel' className='mll-h-full mll-p-1 mll-flex mll-flex-col-reverse mll-justify-between mll-items-center mll-rounded-full mll-overflow-hidden mll-bg-neutral-900'>
              <div id='signal' className='mll-w-2 mll-mx-[1px] mll-bg-gradient-to-b mll-from-p2 mll-to-p1 mll-opacity-50 mll-rounded-full' style={{ height: `${value_stereo[1]}%` }}/>
              <div id='cap' className='mll-w-2 mll-h-[2px] mll-bg-p2'/>
            </div>
          </>
        )}

      </div>

      { label && <div className='mll-w-full mll-text-sm mll-text-center mll-uppercase mll-text-neutral-400 mll-cursor-default'>{ label }</div> }

    </div>
  )
}