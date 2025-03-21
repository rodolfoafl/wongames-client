import { HeadingProps } from '@/components/heading/types'
import { h2 } from '@/components/heading/variants'

export default function Heading({
  children,
  color = 'white',
  size = 'medium',
  lineLeft = false,
  lineBottom = false,
  lineBottomColor = 'primary'
}: HeadingProps) {
  return (
    <h2 className={h2({ color, size, lineLeft, lineBottom, lineBottomColor })}>
      {children}
    </h2>
  )
}
