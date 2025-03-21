import { cn } from '@/utils'
import { tv } from 'tailwind-variants'

export const h2 = tv({
  base: 'leading-none font-semibold text-white',
  variants: {
    color: {
      white: 'text-white',
      black: 'text-black'
    },
    size: {
      small: 'text-base',
      medium: 'text-xl md:text-[1.75rem]'
    },
    lineLeft: {
      true: 'border-secondary border-l-4 pl-2'
    },
    lineBottom: {
      true: cn(
        'relative pb-1',
        'after:border-primary after:absolute after:-bottom-1 after:left-0 after:w-[3.75rem] after:border-b-4'
      )
    },
    lineBottomColor: {
      primary: 'after:border-primary',
      secondary: 'after:border-secondary'
    }
  },
  compoundVariants: [
    {
      size: 'small',
      lineBottom: true,
      className: 'after:w-[1.875rem]'
    }
  ]
})
