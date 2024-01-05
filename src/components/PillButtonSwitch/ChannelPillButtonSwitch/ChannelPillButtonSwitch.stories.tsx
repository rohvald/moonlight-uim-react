import { Meta, StoryObj } from '@storybook/react'
import { ChannelPillButtonSwitch } from './ChannelPillButtonSwitch'
import { channelParameterHandler } from '../../../utils/mockedParameterHandlers'
import { IPillButtonSwitchOption } from '../PillButtonSwitch'

const meta: Meta<typeof ChannelPillButtonSwitch> = {
  title: 'Components/ChannelPillButtonSwitch',
  component: ChannelPillButtonSwitch,
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
    label: 'Channel',
    channel: undefined,
    parameter: 'param-1',
    parameterHandler: channelParameterHandler,
    className: undefined
  }
}