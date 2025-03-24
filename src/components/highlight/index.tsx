import { HighlightProps } from '@/components/highlight/types'
import {
  floatImageVariants,
  sectionVariants,
  textContentVariants
} from '@/components/highlight/variants'
import Image from 'next/image'

export default function Highlight({
  title,
  subtitle,
  coverImage,
  floatImage,
  alignment = 'right',
  children
}: HighlightProps) {
  return (
    <section
      className={sectionVariants({ hasFloatImage: !!floatImage, alignment })}
    >
      <Image
        src={coverImage}
        alt={title}
        width={1040}
        height={320}
        title="Cover Image"
        aria-label={title}
        className="absolute inset-0 h-[14.375rem] w-full object-cover object-center md:h-80"
      />
      {!!floatImage && (
        <Image
          src={floatImage}
          alt={title}
          width={320}
          height={320}
          title="Float Image"
          className={floatImageVariants({ alignment })}
        />
      )}
      <div className={textContentVariants({ alignment })}>
        <h2 className="text-lg leading-none font-semibold text-white md:text-[1.75rem]">
          {title}
        </h2>
        <h3 className="text-sm leading-none font-light text-white md:text-lg">
          {subtitle}
        </h3>
        {!!children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
