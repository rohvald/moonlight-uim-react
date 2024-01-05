import { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { DropdownOptions } from '../../types'

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  decorators: [(story) => <div style={{ width: '300px', padding: '32px', backgroundColor: '#333' }}>{story()}</div>],
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

const mockedChangeHandler = (itemId: string) => console.log(itemId)

const options: DropdownOptions[] = [
  { objectId: 'opt-1', name: 'Option 1' },
  { objectId: 'opt-2', name: 'Option 2' },
  { objectId: 'opt-3', name: 'Option 3' },
  { objectId: 'opt-4', name: 'Option 4' },
]

export const Default: Story = {
  args: {
    options: options,
    selected: null,
    emptyLabel: '- Empty -',
    changeHandler: mockedChangeHandler,
    isLoading: false,
    disabled: false,
    className: undefined
  }
}