import { fireEvent, render, screen } from '@testing-library/react'

import GameCard from '.'

const props = {
  title: 'Cyberpunk 2077',
  developer: 'CD Projekt Red',
  coverImage: '/img/red-dead-img.jpg',
  price: 'R$ 215,00'
}

describe('<GameCard />', () => {
  it('should render the game card correctly', () => {
    render(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src'
    )

    expect(
      screen.getByRole('button', { name: /add to wishlist/i })
    ).toBeInTheDocument()

    // expect(screen.getByText(props.price)).toBeInTheDocument()
  })

  it('should render the price in label', () => {
    render(<GameCard {...props} />)

    const price = screen.getByText(props.price)

    expect(price).not.toHaveClass('line-through')
    expect(price).toHaveClass('bg-secondary')
  })

  it('should render the price with line-through and promotional price in label', () => {
    const promotionalPrice = 'R$ 189,00'

    render(<GameCard {...props} promotionalPrice={promotionalPrice} />)

    const price = screen.getByText(props.price)
    expect(price).toHaveClass('line-through')

    const promotional = screen.getByText(promotionalPrice)
    expect(promotional).not.toHaveClass('line-through')
    expect(promotional).toHaveClass('bg-secondary')
  })

  it('should render a filled favorite icon when true', () => {
    render(<GameCard {...props} favorite />)

    expect(
      screen.getByRole('button', { name: /remove from wishlist/i })
    ).toBeInTheDocument()
  })

  it('should call handleFavorite method when favorite button is clicked', () => {
    const handleFavorite = jest.fn()
    render(<GameCard {...props} favorite handleFavorite={handleFavorite} />)

    const favButton = screen.getByRole('button', {
      name: /remove from wishlist/i
    })
    fireEvent.click(favButton)
    expect(handleFavorite).toHaveBeenCalled()
  })

  it('should render a ribbon', () => {
    render(
      <GameCard
        {...props}
        ribbon="Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveClass('bg-secondary')
    expect(ribbon).toHaveClass('h-[1.625rem] text-xs')
  })
})
