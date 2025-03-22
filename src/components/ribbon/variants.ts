import { cn } from '@/utils'
import { tv } from 'tailwind-variants'

export const ribbon = tv({
  base: cn(
    'absolute top-4 flex items-center font-bold text-white',
    'right-0 before:hidden before:brightness-75',
    'lg:before:block',
    'before:absolute before:right-0 before:border before:border-b-[0.625rem]',
    'before:border-l-0 before:border-r-transparent before:border-b-transparent'
  ),
  variants: {
    color: {
      primary: 'bg-primary before:border-l-primary before:border-t-primary',
      secondary:
        'bg-secondary before:border-l-secondary before:border-t-secondary'
    },
    size: {
      small:
        'h-[1.625rem] px-4 py-0 text-xs before:top-[1.625rem] before:border-t-[0.4375rem] before:border-r-[0.9375rem] lg:-right-[0.9375rem]',
      normal:
        'h-9 px-6 py-0 text-sm before:top-9 before:border-t-[0.625rem] before:border-r-[1.25rem] lg:-right-5'
    }
  }
})
