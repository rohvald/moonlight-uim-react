import { Meta, StoryObj } from '@storybook/react'
import { InstancePillButtonSwitch } from './InstancePillButtonSwitch'
import { instanceParameterHandler } from '../../../utils/mockedParameterHandlers'
import { IPillButtonSwitchOption } from '../PillButtonSwitch'

const meta: Meta<typeof InstancePillButtonSwitch> = {
  title: 'Components/InstancePillButtonSwitch',
  component: InstancePillButtonSwitch,
  decorators: [(story) => <div style={{ width: '300px', padding: '32px', backgroundColor: '#333' }}>{story()}</div>],
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

const mockedOptions: IPillButtonSwitchOption[] = [
  { value: 'a', altDisplayValue: 'A' },
  { value: 'b', altDisplayValue: 'B' },
  { value: 'c', altDisplayValue: 'C' }
]

export const Channel: Story = {
  args: {
    options: mockedOptions,
    value: 'a',
    label: 'Instance',
    parameter: 'param-1',
    parameterHandler: instanceParameterHandler,
    className: undefined
  }
}