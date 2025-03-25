import { tv } from 'tailwind-variants'

export const wrapper = tv({})

export const priceVariants = tv({
  base: 'inline-flex h-[1.875rem] items-center font-semibold',
  variants: {
    isPromotional: {
      true: 'text-gray mr-4 line-through',
      false: 'bg-secondary rounded-sm px-2 py-0 text-white'
    }
  }
})
