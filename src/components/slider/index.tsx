import { SliderProps } from '@/components/slider/types'
import './styles.css'

import SlickSlider, { Settings } from 'react-slick'

export type SliderSetting = Settings

export default function Slider({ children, settings }: SliderProps) {
  return (
    <div>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </div>
  )
}
