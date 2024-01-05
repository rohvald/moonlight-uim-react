import { Meta, StoryObj } from '@storybook/react'
import { Toggle } from './Toggle'

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  decorators: [(story) => <div style={{ width: '200px', padding: '32px', backgroundColor: '#333' }}>{story()}</div>],
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

const mockedParameterHandler = () => console.log('Toggled!')

export const On: Story = {
  args: {
    value: true,
    parameterHandler: mockedParameterHandler,
    vertical: undefined
  }
}

export const Off: Story = {
  args: {
    value: false,
    parameterHandler: mockedParameterHandler,
    vertical: undefined
  }
}
