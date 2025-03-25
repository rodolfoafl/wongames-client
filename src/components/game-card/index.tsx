import Button from '@/components/button'
import { GameCardProps } from '@/components/game-card/types'
import { priceVariants } from '@/components/game-card/variants'
import Ribbon from '@/components/ribbon'
import { cn } from '@/utils'
import { Heart, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

export default function GameCard({
  title,
  developer,
  coverImage,
  price,
  promotionalPrice,
  favorite = false,
  handleFavorite,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GameCardProps) {
  return (
    <article className="relative flex h-full w-full flex-col bg-white">
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      <div
        className={cn(
          'h-[8.75rem] w-full',
          'bg-[#f6f7f8]',
          'animate-placeholder-shimmer'
        )}
      >
        <Image
          src={coverImage}
          alt={title}
          width={300}
          height={140}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative m-4 flex h-full flex-col justify-between gap-y-4">
        <div className="max-w-[calc(100%-1.5625rem)]">
          <h3 className="line-clamp-2 text-base font-semibold text-black">
            {title}
          </h3>
          <h4 className="text-gray line-clamp-2 text-sm font-semibold">
            {developer}
          </h4>
        </div>
        <div
          role="button"
          onClick={handleFavorite}
          className="text-primary absolute top-[0.3125rem] right-0 cursor-pointer"
        >
          {favorite ? (
            <Heart
              aria-label="Remove from Wishlist"
              size={24}
              fill="currentColor"
            />
          ) : (
            <Heart aria-label="Add to Wishlist" size={24} />
          )}
        </div>
        <div className="flex items-center justify-end gap-x-2">
          {!!promotionalPrice && (
            <span
              className={priceVariants({ isPromotional: !!promotionalPrice })}
            >
              {price}
            </span>
          )}
          <span className={priceVariants()}>{promotionalPrice || price}</span>
          <Button icon={<ShoppingCart />} size="small" />
        </div>
      </div>
    </article>
  )
}
