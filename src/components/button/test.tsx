import { render, screen } from '@testing-library/react'

import Button from '.'
import { ShoppingCart } from 'lucide-react'

describe('<Button />', () => {
  it('should render the medium size button by default', () => {
    const { container } = render(<Button>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveClass(
      'h-10 px-4 text-sm'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size button', () => {
    render(<Button size="small">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveClass(
      'h-[1.875rem] px-[0.875rem] text-xs'
    )
  })

  it('should render the large size button', () => {
    render(<Button size="large">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveClass(
      'h-[3.125rem] px-5 text-base'
    )
  })

  it('should render the full width button', () => {
    render(<Button fullWidth>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveClass(
      'w-full'
    )
  })

  it('should render the button with an icon ', () => {
    render(<Button icon={<ShoppingCart data-testid="icon" />}>Buy Now</Button>)

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
