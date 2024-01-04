import { Meta, StoryObj } from '@storybook/react'
import { VerticalDivider } from './VerticalDivider'

const meta: Meta<typeof VerticalDivider> = {
  title: 'Components/VerticalDivider',
  component: VerticalDivider,
  decorators: [(story) => <div style={{ padding: '32px', height: '300px', width: '20px', backgroundColor: '#ddd' }}>{story()}</div>],
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: undefined
  }
}