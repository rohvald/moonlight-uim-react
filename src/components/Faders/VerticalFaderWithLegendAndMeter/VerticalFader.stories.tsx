import { Meta, StoryObj } from '@storybook/react'
import { VerticalFaderWithLegendAndMeter } from './VerticalFaderWithLegendAndMeter'
import { channelParameterHandler } from '../../../utils/mockedParameterHandlers'

const meta: Meta<typeof VerticalFaderWithLegendAndMeter> = {
  title: 'Components/VerticalFaderWithLegendAndMeter',
  component: VerticalFaderWithLegendAndMeter,
  decorators: [(story) => <div style={{ padding: '32px', backgroundColor: '#333' }}>{story()}</div>],
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const MonoChannel: Story = {
  args: {
    horizontal: false,
    volume: 0,
    value_mono: 50,
    channel: 1,
    parameterHandler: channelParameterHandler,
    className: undefined
  }
}

export const StereoChannel: Story = {
  args: {
    horizontal: false,
    volume: 0,
    value_stereo: [50, 50],
    channel: 1,
    parameterHandler: channelParameterHandler,
    className: undefined
  }
}