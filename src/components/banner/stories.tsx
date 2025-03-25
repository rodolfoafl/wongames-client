import { Meta, StoryObj } from '@storybook/react'
import Banner from '.'
import LinkButton from '@/components/link-button'
import { BannerProps } from '@/components/banner/types'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    image:
      'https://cdn.pixabay.com/photo/2016/05/27/14/33/football-1419954_1280.jpg',
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
