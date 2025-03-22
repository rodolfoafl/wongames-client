import { BannerProps } from '@/components/banner/types'
import Ribbon from '@/components/ribbon'
import { cn } from '@/utils'
import Image from 'next/image'

export default function Banner({
  image,
  title,
  subtitle,
  children,
  ribbon,
  ribbonSize,
  ribbonColor
}: BannerProps) {
  return (
    <div className="relative md:shadow-md">
      {!!ribbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}

      <Image
        src={image}
        alt={title}
        width={600}
        height={480}
        role="img"
        aria-label={title}
        className="bg-light-gray h-[14.375rem] w-full object-cover object-center md:h-[36.25rem]"
      />
      <div
        className={cn(
          'flex w-full flex-col gap-y-2 bg-[#000000b3] p-6',
          'md:absolute md:bottom-0 md:left-0 md:rounded-br-sm md:rounded-bl-sm md:p-10'
        )}
      >
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          className="text-lg leading-none font-bold text-white md:text-[2.8rem]"
        />
        <p
          dangerouslySetInnerHTML={{ __html: subtitle }}
          className={cn(
            '[&_strong]:text-primary text-sm leading-none font-normal text-white',
            'md:text-lg'
          )}
        />
        <div className="mt-4">{!!children && children}</div>
      </div>
    </div>
  )
}
