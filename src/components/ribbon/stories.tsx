import { Meta, StoryObj } from '@storybook/react'
import Ribbon from '.'
import { RibbonProps } from '@/components/ribbon/types'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    color: 'primary',
    size: 'normal',
    children: 'Best Seller'
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'normal'],
      control: { type: 'radio' }
    }
  }
} as Meta

export const Default: StoryObj<RibbonProps> = {}
