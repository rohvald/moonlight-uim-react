import { Meta, StoryObj } from '@storybook/react'
import { VerticalMeter } from './VerticalMeter'

const meta: Meta<typeof VerticalMeter> = {
  title: 'Components/VerticalMeter',
  component: VerticalMeter,
  decorators: [(story) => <div style={{ width: '200px', padding: '32px', backgroundColor: '#333' }}>{story()}</div>],
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Mono: Story = {
  args: {
    label: 'Mono CH 1',
    scale: ['-inf', '-36', '-27', '-18', '-9', '0', '9'],
    value_mono: 50,
    value_stereo: undefined,
    className: undefined
  }
}

export const Stereo: Story = {
  args: {
    label: 'Stereo CH 2',
    scale: ['-inf', '-36', '-27', '-18', '-9', '0', '9'],
    value_mono: undefined,
    value_stereo: [50, 50],
    className: undefined
  }
}