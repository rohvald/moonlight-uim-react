import { Meta, StoryObj } from '@storybook/react'
import { InstanceToggleButton } from './InstanceToggleButton'
import { instanceParameterHandler } from '../../../utils/mockedParameterHandlers'

const meta: Meta<typeof InstanceToggleButton> = {
  title: 'Components/InstanceToggleButton',
  component: InstanceToggleButton,
  decorators: [(story) => <div style={{ width: '300px', padding: '32px', backgroundColor: '#333' }}>{story()}</div>],
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    toggled: false,
    parameterHandler: instanceParameterHandler,
    parameter: 'param-1',
    color: undefined,
    icon: false,
    className: undefined,
    children: 'Param 1'
  }
}