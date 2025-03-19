import { tv } from 'tailwind-variants'

export const h2 = tv({
  base: 'text-2xl leading-none font-semibold text-white md:text-[1.75rem]',
  variants: {
    color: {
      white: 'text-white',
      black: 'text-black'
    },
    lineLeft: {
      true: 'border-secondary border-l-4 pl-2'
    },
    lineBottom: {
      true: 'after:border-primary relative pb-2 after:absolute after:-bottom-2 after:left-0 after:w-[3.75rem] after:border-b-4'
    }
  }
})
