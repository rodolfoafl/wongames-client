import { tv } from 'tailwind-variants'

export const wrapper = tv({
  base: 'h-[2.125rem] w-[6.875rem] text-white',
  variants: {
    color: {
      white: 'text-white',
      black: 'text-black'
    },
    size: {
      normal: 'h-[2.125rem] w-[6.875rem]',
      large: 'h-[3.75rem] w-[12.5rem]'
    },
    hideOnMobile: {
      true: 'h-[2.875rem] w-[3.625rem] md:h-[2.125rem] md:w-[6.875rem]'
    }
  }
})

export const svg = tv({
  variants: {
    hideOnMobile: {
      true: 'pointer-events-none h-[2.875rem] md:h-full'
    }
  }
})

export const text = tv({
  variants: {
    hideOnMobile: {
      true: 'hidden md:flex'
    }
  }
})
