import { Meta, StoryObj } from '@storybook/react'
import { Readout } from './Readout'

const meta: Meta<typeof Readout> = {
  title: 'Components/Readout',
  component: Readout,
  decorators: [(story) => <div style={{ width: '200px', padding: '32px', backgroundColor: '#333' }}>{story()}</div>],
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: '- 3.2 dB',
    className: undefined
  }
}