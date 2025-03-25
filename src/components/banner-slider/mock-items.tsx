import { BannerProps } from '@/components/banner/types'
import LinkButton from '@/components/link-button'

export const MOCK_SLIDER_ITEMS: BannerProps[] = [
  {
    image:
      'https://cdn.pixabay.com/photo/2016/05/27/14/33/football-1419954_1280.jpg',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    children: (
      <LinkButton href="/buy-now" size="large">
        Buy now
      </LinkButton>
    ),
    ribbon: 'Bestselling'
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036_1280.jpg',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    children: (
      <LinkButton href="/buy-now" size="large">
        Buy now
      </LinkButton>
    )
  }
]
