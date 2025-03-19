import { HeadingProps } from '@/components/heading/types'
import { h2 } from '@/components/heading/variants'

export default function Heading({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) {
  return <h2 className={h2({ color, lineLeft, lineBottom })}>{children}</h2>
}
