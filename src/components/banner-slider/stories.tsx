import { Meta, StoryObj } from '@storybook/react'
import BannerSlider from '.'
import { BannerSliderProps } from '@/components/banner-slider/types'

import { MOCK_SLIDER_ITEMS } from '@/components/banner-slider/mock-items'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: {
    MOCK_SLIDER_ITEMS
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<BannerSliderProps> = {
  render: (args) => (
    <div className="mx-auto my-0 max-w-[81.25rem]">
      <BannerSlider {...args} items={MOCK_SLIDER_ITEMS} />
    </div>
  )
}
