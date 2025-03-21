import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the logo, 4 columns topics & copyright span', () => {
    const { container } = render(<Footer />)

    expect(screen.getByLabelText(/won Games/i).parentElement).toHaveClass(
      'text-black'
    )

    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
