import { Meta, StoryObj } from '@storybook/react'
import { ContinuousKnob } from './ContinuousKnob'
import { instanceParameterHandler } from '../../../utils/mockedParameterHandlers'

const meta: Meta<typeof ContinuousKnob> = {
  title: 'Components/ContinuousKnob',
  component: ContinuousKnob,
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

    /* Continuous Knob Props */
    value: 0,
    range: [0, 100]
  }
}