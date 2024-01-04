import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  decorators: [(story) => <div style={{ padding: '32px', backgroundColor: '#333' }}>{story()}</div>],
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const TextButton: Story = {
  args: {
    children: 'Text Button'
  }
}

export const IconButton: Story = {
  args: {
    icon: true,
    children: '>'
  }
}

export const ClassNameButton: Story = {
  args: {
    className: 'mll-w-72',
    children: 'ClassName Button'
  }
}