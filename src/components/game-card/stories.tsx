import { Meta, StoryObj } from '@storybook/react'
import GameCard from '.'
import { GameCardProps } from '@/components/game-card/types'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Cyberpunk 2077',
    developer: 'CD Projekt Red',
    coverImage: '/img/red-dead-img.jpg',
    price: 'R$ 215,00',
    promotionalPrice: 'R$ 189,00',
    favorite: false
  },
  argTypes: {
    handleFavorite: { action: 'clicked' }
  }
} as Meta

export const Default: StoryObj<GameCardProps> = {
  render: (args) => (
    <div className="max-w-[18.75rem]">
      <GameCard {...args} />
    </div>
  )
}

export const WithRibbon: StoryObj<GameCardProps> = {
  args: {
    ribbon: 'Ribbon'
  },
  render: (args) => (
    <div className="max-w-[18.75rem]">
      <GameCard {...args} />
    </div>
  )
}
