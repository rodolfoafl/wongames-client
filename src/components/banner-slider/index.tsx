import Banner from '@/components/banner'
import { BannerSliderProps } from '@/components/banner-slider/types'
import Slider, { SliderSetting } from '@/components/slider'

import './styles.css'

const SETTINGS: SliderSetting = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

export default function BannerSlider({ items }: BannerSliderProps) {
  return (
    <section>
      <Slider settings={SETTINGS}>
        {items.map((item) => (
          <Banner {...item} key={item.title} />
        ))}
      </Slider>
    </section>
  )
}
