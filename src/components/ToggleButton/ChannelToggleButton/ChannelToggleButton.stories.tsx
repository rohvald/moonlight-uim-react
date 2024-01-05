import { Meta, StoryObj } from '@storybook/react'
import { ChannelToggleButton } from './ChannelToggleButton'
import { channelParameterHandler } from '../../../utils/mockedParameterHandlers'

const meta: Meta<typeof ChannelToggleButton> = {
  title: 'Components/ChannelToggleButton',
  component: ChannelToggleButton,
  decorators: [(story) => <div style={{ width: '300px', padding: '32px', backgroundColor: '#333' }}>{story()}</div>],
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    toggled: false,
    parameterHandler: channelParameterHandler,
    channel: 1,
    parameter: 'param-1',
    color: undefined,
    icon: false,
    className: undefined,
    children: 'Param 1'
  }
}