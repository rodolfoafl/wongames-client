import { Meta, StoryObj } from '@storybook/react'
import Menu from '.'
import { MenuProps } from '@/components/menu/types'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    username: 'Nome usuário'
  }
} as Meta

export const Default: StoryObj<MenuProps> = {}
