import { cn } from '@/utils'
import { tv } from 'tailwind-variants'

export const link = tv({
  base: cn(
    'flex items-center justify-center rounded-sm border-none bg-[linear-gradient(180deg,#FF5F5F_0%,#F062C0_100%)]',
    'w-fit cursor-pointer p-2 leading-none font-semibold text-white',
    'hover:bg-[linear-gradient(180deg,#E35565_0%,#D958A6_100%)]'
  ),
  variants: {
    size: {
      small: 'h-[1.875rem] px-[0.875rem] text-xs',
      medium: 'h-10 px-4 text-sm',
      large: 'h-[3.125rem] px-5 text-base'
    },
    fullWidth: {
      true: 'w-full'
    }
  }
})
