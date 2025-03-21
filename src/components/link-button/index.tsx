import { LinkButtonProps } from '@/components/link-button/types'
import { link } from '@/components/link-button/variants'
import Link from 'next/link'

export default function LinkButton({
  size = 'medium',
  fullWidth = false,
  href,
  children
}: LinkButtonProps) {
  return (
    <Link href={href} className={link({ size, fullWidth })}>
      {children}
    </Link>
  )
}
