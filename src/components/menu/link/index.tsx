import { cn } from '@/utils'
import Link from 'next/link'

type MenuLinkProps = {
  href: string
  label: string
}

export default function MenuLink({ href, label }: MenuLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'relative text-center text-xl leading-none font-semibold text-black',
        'hover:after:bg-primary hover:after:animate-hover-animation hover:after:absolute',
        'hover:after:-bottom-2 hover:after:block hover:after:h-1',
        'md:text-base md:font-normal md:text-white'
      )}
    >
      {label}
    </Link>
  )
}
