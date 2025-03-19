import { Meta, StoryObj } from '@storybook/react'
import Heading from '.'
import { HeadingProps } from '@/components/heading/types'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Most Popular',
    color: 'black',
    lineLeft: false,
    lineBottom: false
  },
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      options: ['white', 'black'],
      control: { type: 'radio' }
    },
    lineLeft: {
      control: { type: 'boolean' }
    },
    lineBottom: {
      control: { type: 'boolean' }
    }
  }
} as Meta

export const Default: StoryObj<HeadingProps> = {}
