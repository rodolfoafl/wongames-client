import { render, screen } from '@testing-library/react'

import Highlight from '.'
import LinkButton from '@/components/link-button'
import { HighlightProps } from '@/components/highlight/types'

const props: HighlightProps = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  coverImage: '/img/red-dead-img.jpg',
  children: <LinkButton href="/link">Buy now</LinkButton>
}

describe('<Highlight />', () => {
  it('should render the cover image, title and subtitle', () => {
    const { container } = render(<Highlight {...props} />)

    const coverImage = screen.getByTitle(/cover image/i)
    expect(coverImage).toBeInTheDocument()
    expect(coverImage).toHaveAttribute('src')

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.subtitle })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the float image', () => {
    render(<Highlight {...props} floatImage={'/img/red-dead-float.png'} />)

    const coverImage = screen.getByTitle(/float image/i)
    expect(coverImage).toBeInTheDocument()
    expect(coverImage).toHaveAttribute('src')
  })

  it('should render with the text aligned right by default', () => {
    render(<Highlight {...props} floatImage="/img/red-dead-float.png" />)

    const coverImage = screen.getByTitle(/float image/i)
    expect(coverImage).toHaveClass('order-1')

    const textContentParent = screen.getByRole('heading', {
      name: props.title
    }).parentElement
    expect(textContentParent).toHaveClass('order-2')
  })

  it('should render with the text aligned left', () => {
    render(
      <Highlight
        {...props}
        floatImage="/img/red-dead-float.png"
        alignment="left"
      />
    )

    const coverImage = screen.getByTitle(/float image/i)
    expect(coverImage).toHaveClass('order-2')

    const textContentParent = screen.getByRole('heading', {
      name: props.title
    }).parentElement
    expect(textContentParent).toHaveClass('order-1')
  })
})
