import { fireEvent, render, screen } from '@testing-library/react'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    render(<Menu />)

    const menuElement = screen.getByRole('navigation', { hidden: true })

    expect(menuElement.getAttribute('aria-hidden')).toBe('true')
    expect(menuElement).toHaveClass('opacity-0')

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(menuElement.getAttribute('aria-hidden')).toBe('false')
    expect(menuElement).toHaveClass('opacity-100')

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(menuElement.getAttribute('aria-hidden')).toBe('true')
    expect(menuElement).toHaveClass('opacity-0')
  })

  it('should show register box when not authenticated', () => {
    render(<Menu />)

    expect(screen.getByText(/log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  it('should show authenticated menu items (my account & wishlist) when authenticated', () => {
    render(<Menu username="rodolfo" />)

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()

    expect(screen.getByText(/my account/i)).toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
  })
})
