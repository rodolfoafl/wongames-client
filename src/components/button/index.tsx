import { ButtonProps } from '@/components/button/types'
import { button, buttonIcon } from '@/components/button/variants'

export default function Button({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ size, fullWidth, hasIcon: !!icon })} {...props}>
      {!!icon && <span className={buttonIcon({ size })}>{icon}</span>}
      {!!children && <span>{children}</span>}
    </button>
  )
}
