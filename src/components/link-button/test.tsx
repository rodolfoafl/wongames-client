import { render, screen } from '@testing-library/react'

import LinkButton from '.'

describe('<LinkButton />', () => {
  it('should render the medium size link button by default', () => {
    const { container } = render(<LinkButton href="/">Buy Now</LinkButton>)

    expect(screen.getByRole('link', { name: /Buy Now/i })).toHaveClass(
      'h-10 px-4 text-sm'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size link button', () => {
    render(
      <LinkButton href="/" size="small">
        Buy Now
      </LinkButton>
    )

    expect(screen.getByRole('link', { name: /Buy Now/i })).toHaveClass(
      'h-[1.875rem] px-[0.875rem] text-xs'
    )
  })

  it('should render the large size link button', () => {
    render(
      <LinkButton href="/" size="large">
        Buy Now
      </LinkButton>
    )

    expect(screen.getByRole('link', { name: /Buy Now/i })).toHaveClass(
      'h-[3.125rem] px-5 text-base'
    )
  })

  it('should render the full width link button', () => {
    render(
      <LinkButton href="/" fullWidth>
        Buy Now
      </LinkButton>
    )

    expect(screen.getByRole('link', { name: /Buy Now/i })).toHaveClass('w-full')
  })
})
