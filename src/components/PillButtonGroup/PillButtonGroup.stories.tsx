import { Meta, StoryObj } from '@storybook/react'
import { PillButtonGroup } from './PillButtonGroup'
import { PillButtonGroupButton } from './PillButtonGroupButton'

const meta: Meta<typeof PillButtonGroup> = {
  title: 'Components/PillButtonGroup',
  component: PillButtonGroup,
  decorators: [(story) => <div style={{ width: '300px', padding: '32px', backgroundColor: '#333' }}>{story()}</div>],
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Default',
    children:[
      <PillButtonGroupButton onClick={() => console.log('Opt 1 clicked...')}>Opt 1</PillButtonGroupButton>,
      <PillButtonGroupButton onClick={() => console.log('Opt 2 clicked...')}>Opt 2</PillButtonGroupButton>,
      <PillButtonGroupButton onClick={() => console.log('Opt 3 clicked...')}>Opt 3</PillButtonGroupButton>
    ],
    className: undefined
  }
}