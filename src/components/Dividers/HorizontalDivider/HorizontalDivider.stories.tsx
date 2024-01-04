import { Meta, StoryObj } from '@storybook/react'
import { HorizontalDivider } from './HorizontalDivider'

const meta: Meta<typeof HorizontalDivider> = {
  title: 'Components/HorizontalDivider',
  component: HorizontalDivider,
  decorators: [(story) => <div style={{ padding: '32px', height: '20px', width: '300px', backgroundColor: '#ddd' }}>{story()}</div>],
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: undefined
  }
}