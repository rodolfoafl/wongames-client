import { RibbonProps } from '@/components/ribbon/types'
import { ribbon } from '@/components/ribbon/variants'

export default function Ribbon({
  color = 'primary',
  size = 'normal',
  children
}: RibbonProps) {
  return <div className={ribbon({ color, size })}>{children}</div>
}
