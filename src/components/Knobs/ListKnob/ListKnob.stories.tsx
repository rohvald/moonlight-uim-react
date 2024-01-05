import { Meta, StoryObj } from '@storybook/react'
import { ListKnob } from './ListKnob'
import { instanceParameterHandler } from '../../../utils/mockedParameterHandlers'

const meta: Meta<typeof ListKnob> = {
  title: 'Components/ListKnob',
  component: ListKnob,
  decorators: [(story) => <div style={{ padding: '32px', backgroundColor: '#333' }}>{story()}</div>],
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {

    /* Standard Knob Props */
    channel: undefined,
    parameter: 'param-1',
    label: 'Param 1',
    unit: 'dB',
    parameterHandler: instanceParameterHandler,
    size: 'md',
    className: undefined,

    /* List Knob Props */
    value: 'c',
    list: ['a', 'b', 'c', 'd', 'e']
  }
}