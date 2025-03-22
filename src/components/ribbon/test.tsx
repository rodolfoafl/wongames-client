import { render, screen } from '@testing-library/react'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the children', () => {
    const { container } = render(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with the primary color', () => {
    render(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveClass('bg-primary')
  })

  it('should render with the secondary color', () => {
    render(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveClass('bg-secondary')
  })

  it('should render with the default size', () => {
    render(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveClass('h-9 text-sm')
  })

  it('should render with the small size', () => {
    render(<Ribbon size="small">Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveClass('h-[1.625rem] text-xs')
  })
})
