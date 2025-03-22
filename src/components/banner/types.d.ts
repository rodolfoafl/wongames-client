type RibbonProps = {
  size?: 'normal' | 'small'
  color?: 'primary' | 'secondary'
}

export type BannerProps = {
  image: string
  title: string
  subtitle: string
  children?: React.ReactNode
  ribbon?: string
  ribbonSize?: RibbonProps['size']
  ribbonColor?: RibbonProps['color']
}
