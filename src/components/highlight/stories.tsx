import { Meta, StoryObj } from '@storybook/react'
import Highlight from '.'
import { HighlightProps } from '@/components/highlight/types'
import LinkButton from '@/components/link-button'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead is back',
    subtitle: 'Come see John’s new adventures',
    coverImage: '/img/red-dead-img.jpg',
    alignment: 'right',
    children: (
      <LinkButton href="/buy-now" size="large">
        Buy now
      </LinkButton>
    )
  },
  argTypes: {
    alignment: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj<HighlightProps> = {
  render: (args) => (
    <div className="mx-auto max-w-[65rem]">
      <Highlight {...args} />
    </div>
  )
}

export const WithFloatImage: StoryObj<HighlightProps> = {
  args: {
    floatImage: '/img/red-dead-float.png',
    alignment: 'right'
  },
  argTypes: {
    alignment: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  },
  render: (args) => (
    <div className="mx-auto max-w-[65rem]">
      <Highlight {...args} />
    </div>
  )
}
