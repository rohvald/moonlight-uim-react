import { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    axis: 'horizontal'
  },
  decorators: [(story) => <div style={{ width: '300px', height: '20px', padding: '32px', backgroundColor: '#333' }}>{story()}</div>],
}

export const Vertical: Story = {
  args: {
    axis: 'vertical'
  },
  decorators: [(story) => <div style={{ width: '20px', height: '300px', padding: '32px', backgroundColor: '#333' }}>{story()}</div>],
}