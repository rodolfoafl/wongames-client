import { RibbonProps } from '@/components/ribbon/types'

export type BannerProps = {
  image: string
  title: string
  subtitle: string
  children?: React.ReactNode
  ribbon?: string
  ribbonSize?: RibbonProps['size']
  ribbonColor?: RibbonProps['color']
}
