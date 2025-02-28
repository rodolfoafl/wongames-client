import Main from '@/components/main'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'Main Component',
    description: 'This is a basic main component'
  }
}
