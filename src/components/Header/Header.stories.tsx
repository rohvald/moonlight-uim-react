import { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  decorators: [(story) => <div style={{ padding: '32px', backgroundColor: '#333' }}>{story()}</div>],
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Type1: Story = {
  args: {
    shadowType: 1,
    children: 'Type 1',
    className: undefined
  }
}

export const Type2: Story = {
  args: {
    shadowType: 2,
    children: 'Type 2',
    className: undefined
  }
}