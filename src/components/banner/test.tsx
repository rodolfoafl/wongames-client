import { render, screen } from '@testing-library/react'

import Banner from '.'
import Button from '@/components/button'

const props = {
  image:
    'https://images.unsplash.com/photo-1741893041975-94a0e8656209?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'Banner Title',
  subtitle:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, cum!'
}

describe('<Banner />', () => {
  it('should render the banner', () => {
    const { container } = render(<Banner {...props} />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src')

    const title = screen.getByText(props.title)
    expect(title).toBeInTheDocument()

    const subtitle = screen.getByText(props.subtitle)
    expect(subtitle).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the children if passed', () => {
    render(
      <Banner {...props}>
        <Button>Buy now</Button>
      </Banner>
    )

    const button = screen.getByRole('button', { name: /buy now/i })
    expect(button).toBeInTheDocument()
  })
})
