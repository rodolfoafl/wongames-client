import { cn } from '@/utils'
import { tv } from 'tailwind-variants'

export const sectionVariants = tv({
  base: cn(
    'relative grid h-[14.375rem] grid-cols-1',
    'after:absolute after:h-full after:w-full after:bg-[#00000099]',
    'md:h-80'
  ),
  variants: {
    hasFloatImage: {
      true: ''
    },
    alignment: {
      left: '',
      right: ''
    }
  },
  compoundVariants: [
    {
      hasFloatImage: true,
      alignment: 'left',
      className: 'grid-cols-[2fr_1.4fr]'
    },
    {
      hasFloatImage: true,
      alignment: 'right',
      className: 'grid-cols-[1.4fr_2fr]'
    }
  ]
})

export const floatImageVariants = tv({
  base: 'z-10 max-h-[14.375rem] self-end object-contain md:h-80 md:max-h-80',
  variants: {
    alignment: {
      left: 'order-2 justify-self-end',
      right: 'order-1'
    }
  }
})

export const textContentVariants = tv({
  base: 'z-10 flex flex-col gap-y-2 p-4 md:self-end md:p-10',
  variants: {
    alignment: {
      left: 'order-1 items-start text-left',
      right: 'order-2 items-end text-right'
    }
  }
})
