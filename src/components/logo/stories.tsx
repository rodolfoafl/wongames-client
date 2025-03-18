import Logo from '@/components/logo'
import { LogoProps } from '@/components/logo/types'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Logo',
  component: Logo,
  args: {
    color: 'white',
    size: 'normal',
    hideOnMobile: false
  },
  argTypes: {
    color: {
      options: ['white', 'black'],
      control: { type: 'radio' }
    },
    size: {
      options: ['normal', 'large'],
      control: { type: 'radio' }
    },
    hideOnMobile: {
      control: { type: 'boolean' }
    }
  }
} as Meta

export const Default: StoryObj<LogoProps> = {}
