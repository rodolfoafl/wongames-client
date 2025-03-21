import { Meta, StoryObj } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div className="mx-auto max-w-[81.25rem]">
      <Footer />
    </div>
  )
}
