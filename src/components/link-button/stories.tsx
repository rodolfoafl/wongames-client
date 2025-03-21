import { Meta, StoryObj } from '@storybook/react'
import LinkButton from '.'

export default {
  title: 'LinkButton',
  component: LinkButton,
  args: {
    children: 'Buy Now',
    size: 'medium',
    href: '/buy-now',
    fullWidth: false
  },
  argTypes: {
    href: {
      control: { type: 'text' }
    },
    size: {
      description: 'Controls the height and font size of the button',
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    fullWidth: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean'
        }
      }
    }
  }
} as Meta

export const Default: StoryObj = {}
