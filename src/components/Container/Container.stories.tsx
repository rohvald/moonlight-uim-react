import { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'mll-w-96 mll-h-64 mll-p-4 mll-rounded-lg mll-flex mll-justify-center mll-items-center mll-text-white',
    children: 'Container'
  }
}