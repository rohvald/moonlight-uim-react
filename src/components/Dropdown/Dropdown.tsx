import React, { Fragment  } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { cn } from '../../utils/cn'
import DropdownCaret from '../../assets/images/svg/DropdownCaret.svg?raw'
import DropdownCaretNeutral from '../../assets/images/svg/DropdownCaretNeutral.svg?raw'
import { DropdownOptions } from '../../types'

type Props = {
  options: DropdownOptions[],
  selected: string | null,
  emptyLabel: string,
  changeHandler: (itemId: string) => void,
  isLoading: boolean,
  disabled: boolean,
  className?: string
}

export const Dropdown: React.FC<Props> = ({ options, selected, emptyLabel, changeHandler, isLoading, disabled, className }) => {

  return (
    <Menu as='div' className={cn('mll-relative mll-font-jost', className)}>

      <Menu.Button
        className='mll-relative mll-w-full mll-h-10 mll-px-4 mll-flex mll-justify-between mll-items-center mll-gap-2 mll-bg-cbg mll-rounded-full mll-shadow-toggle-btn-bg'
        disabled={disabled}
      >
        <span className={cn('mll-font-normal mll-text-sm mll-text-ellipsis mll-whitespace-nowrap mll-truncate mll-overflow-hidden',
          disabled ? 'mll-text-neutral-600' : 'mll-text-p2 mll-drop-shadow-span-text-active'
        )}>
          { isLoading && 'Loading...' }
          { !isLoading && selected === null && emptyLabel }
          { !isLoading && selected !== null && options.find(item => item.objectId === selected)?.name }
        </span>
        <span
          className='mll-min-w-[12px] mll-h-[10px]'
          style={{
            backgroundImage:
              disabled
              ? `url('data:image/svg+xml;base64,${btoa(DropdownCaretNeutral)}')`
              : `url('data:image/svg+xml;base64,${btoa(DropdownCaret)}`
          }}
        />
      </Menu.Button>

      {/* Dropdown menu */}
      <Transition
        as={Fragment}
        enter="mll-transition mll-ease-out mll-duration-100"
        enterFrom="mll-transform mll-opacity-0 mll-scale-95"
        enterTo="mll-transform mll-opacity-100 mll-scale-100"
        leave="mll-transition mll-ease-in mll-duration-75"
        leaveFrom="mll-transform mll-opacity-100 mll-scale-100"
        leaveTo="mll-transform mll-opacity-0 mll-scale-95"
      >
        <Menu.Items
          className='mll-absolute mll-w-full mll-left-0 mll-origin-top-right mll-px-4 mll-py-4 mll-flex mll-flex-col mll-justify-center mll-items-start mll-gap-1 mll-bg-cbg mll-rounded-lg mll-cursor-pointer mll-z-50'
          style={{ boxShadow: 'inset 0 -1px 1px 0 #5f5f5f9e, inset 0 1px 1px 0 #121212, 0px 0.3px 0.7px rgba(0, 0, 0, 0.028), 0px 1.1px 2.2px rgba(0, 0, 0, 0.042), 0px 5px 10px rgba(0, 0, 0, 0.07)' }}
        >
          {
            options.map(item => 
              <Menu.Item key={item.objectId} as='button' onClick={() => changeHandler(item.objectId)} disabled={disabled}>
                {
                  ({ active }) =>
                    <div
                      className={cn('mll-max-w-xs mll-text-neutral-400 mll-text-sm mll-font-normal mll-whitespace-nowrap mll-truncate',
                        (active || (item.objectId === selected)) && 'mll-text-p2',
                        active && 'mll-drop-shadow-span-text-active'
                      )}
                    >
                      { item.name }
                    </div>
                }
              </Menu.Item>
            )
          }
        </Menu.Items>
      </Transition>
    </Menu>
  )
}