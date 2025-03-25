import { Meta, StoryObj } from '@storybook/react'
import Slider from '.'
import { SliderProps } from '@/components/slider/types'
import { Settings } from 'react-slick'
import React from 'react'

const horizontalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export default {
  title: 'Slider',
  component: Slider
} as Meta

const SlideItem = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gray w-full border border-[1px] border-red-500 px-0 py-[6.25rem] text-center text-white">
    {children}
  </div>
)

export const Horizontal: StoryObj<SliderProps> = {
  render: (args) => (
    <Slider {...args} settings={horizontalSettings}>
      <SlideItem>Slide 1</SlideItem>
      <SlideItem>Slide 2</SlideItem>
      <SlideItem>Slide 3</SlideItem>
      <SlideItem>Slide 4</SlideItem>
      <SlideItem>Slide 5</SlideItem>
    </Slider>
  )
}

export const Vertical: StoryObj<SliderProps> = {
  render: (args) => (
    <Slider {...args} settings={verticalSettings}>
      <SlideItem>Slide 1</SlideItem>
      <SlideItem>Slide 2</SlideItem>
      <SlideItem>Slide 3</SlideItem>
      <SlideItem>Slide 4</SlideItem>
      <SlideItem>Slide 5</SlideItem>
    </Slider>
  )
}
