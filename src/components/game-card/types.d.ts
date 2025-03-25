export type GameCardProps = {
  title: string
  developer: string
  coverImage: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  handleFavorite?: () => void
  ribbon?: string
  ribbonSize?: RibbonProps['size']
  ribbonColor?: RibbonProps['color']
}
