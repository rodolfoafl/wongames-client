import { Meta, StoryObj } from '@storybook/react'
import Heading from '.'
import { HeadingProps } from '@/components/heading/types'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Most Popular',
    color: 'black',
    size: 'medium',
    lineLeft: false,
    lineBottom: false,
    lineBottomColor: 'primary'
  },
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      options: ['white', 'black'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' }
    },
    lineLeft: {
      control: { type: 'boolean' }
    },
    lineBottom: {
      control: { type: 'boolean' }
    },
    lineBottomColor: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
} as Meta

export const Default: StoryObj<HeadingProps> = {}
