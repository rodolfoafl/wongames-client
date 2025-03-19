import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      'text-white'
    )
  })

  it('should render a black label when color is passed', () => {
    render(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      'text-black'
    )
  })

  it('should render a normal logo by default', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      'w-[6.875rem]'
    )
  })

  it('should render a bigger logo', () => {
    render(<Logo size="large" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      'w-[12.5rem]'
    )
  })

  it('should render a bigger logo without the text if hideOnMobile', () => {
    render(<Logo hideOnMobile />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      'w-[3.625rem]'
    )
  })
})
