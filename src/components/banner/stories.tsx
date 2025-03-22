import { Meta, StoryObj } from '@storybook/react'
import Banner from '.'
import LinkButton from '@/components/link-button'
import { BannerProps } from '@/components/banner/types'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    image:
      'https://images.unsplash.com/photo-1741893041975-94a0e8656209?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Banner Title',
    subtitle: 'Play the new <strong>CrashLands</strong> season',
    children: (
      <LinkButton href="/buy-now" size="large">
        Buy now
      </LinkButton>
    )
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj<BannerProps> = {
  render: (args) => (
    <div className="mx-auto max-w-[65rem]">
      <Banner {...args} />
    </div>
  )
}

export const WithRibbon: StoryObj<BannerProps> = {
  args: {
    ribbon: 'Ribbon',
    ribbonSize: 'small',
    ribbonColor: 'secondary'
  },
  argTypes: {
    ribbonSize: {
      options: ['small', 'normal'],
      control: { type: 'radio' }
    },
    ribbonColor: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  },
  render: (args) => (
    <div className="mx-auto max-w-[65rem]">
      <Banner {...args} />
    </div>
  )
}
