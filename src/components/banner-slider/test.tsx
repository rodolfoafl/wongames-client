import 'match-media-mock'
import { render, screen } from '@testing-library/react'

import BannerSlider from '.'
import { MOCK_SLIDER_ITEMS } from '@/components/banner-slider/mock-items'

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = render(<BannerSlider items={MOCK_SLIDER_ITEMS} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with one active item', () => {
    const { container } = render(<BannerSlider items={MOCK_SLIDER_ITEMS} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(
      MOCK_SLIDER_ITEMS.length
    )
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', {
        name: MOCK_SLIDER_ITEMS[0].title,
        hidden: false
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: MOCK_SLIDER_ITEMS[1].title,
        hidden: true
      })
    ).toBeInTheDocument()
  })

  it('should render with the navigation dots', () => {
    const { container } = render(<BannerSlider items={MOCK_SLIDER_ITEMS} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
