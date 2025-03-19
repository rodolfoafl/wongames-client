import { Meta, StoryObj } from '@storybook/react'
import Button from '.'
import { ButtonProps } from '@/components/button/types'
import { ShoppingCart } from 'lucide-react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Buy Now',
    size: 'medium',
    fullWidth: false,
    icon: null
  },
  argTypes: {
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
    },
    icon: {
      table: {
        disable: true
      }
    }
  }
} as Meta

export const Default: StoryObj<ButtonProps> = {}
export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    size: 'medium',
    icon: <ShoppingCart size={18} />
  }
}
