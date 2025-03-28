import { render, screen } from '@testing-library/react'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    render(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveClass(
      'text-white'
    )
  })

  it('should render a black heading when color is passed', () => {
    render(<Heading color="black">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveClass(
      'text-black'
    )
  })

  it('should render a heading with a line to the left side', () => {
    render(<Heading lineLeft>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveClass(
      'border-secondary border-l-4 pl-2'
    )
  })

  it('should render a heading with a line at the bottom', () => {
    render(<Heading lineBottom>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveClass(
      'after:border-primary relative pb-1 after:absolute after:-bottom-1 after:left-0 after:w-[3.75rem] after:border-b-4'
    )
  })

  it('should render a heading with a small size and with a line at the bottom', () => {
    render(
      <Heading size="small" lineBottom>
        Won Games
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveClass(
      'text-base after:w-[1.875rem]'
    )
  })

  it('should render a heading with a line at the bottom with the secondary color', () => {
    render(
      <Heading lineBottom lineBottomColor="secondary">
        Won Games
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveClass(
      'after:border-secondary'
    )
  })
})
