import { Meta, StoryObj } from '@storybook/react'
import { HorizontalMeter } from './HorizontalMeter'

const meta: Meta<typeof HorizontalMeter> = {
  title: 'Components/HorizontalMeter',
  component: HorizontalMeter,
  decorators: [(story) => <div style={{ padding: '32px', backgroundColor: '#333' }}>{story()}</div>],
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Mono: Story = {
  args: {
    label: 'Mono CH 1',
    scale: ['-30', '-28', '-26', '-24', '-22', '-20', '-18', '-16', '-14', '-12', '-10', '-8', '-6', '-4', '-2', '0'],
    value_mono: 50,
    value_stereo: undefined,
    className: undefined
  }
}

export const Stereo: Story = {
  args: {
    label: 'Stereo CH 2',
    scale: ['-30', '-28', '-26', '-24', '-22', '-20', '-18', '-16', '-14', '-12', '-10', '-8', '-6', '-4', '-2', '0'],
    value_mono: undefined,
    value_stereo: [50, 50],
    className: undefined
  }
}