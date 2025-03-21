import { HeadingProps } from '@/components/heading/types'
import { h2 } from '@/components/heading/variants'
import { cn } from '@/utils'

export default function Heading({
  children,
  color = 'white',
  size = 'medium',
  lineLeft = false,
  lineBottom = false,
  lineBottomColor = 'primary',
  className
}: HeadingProps) {
  return (
    <h2
      className={cn(
        h2({ color, size, lineLeft, lineBottom, lineBottomColor }),
        className
      )}
    >
      {children}
    </h2>
  )
}
