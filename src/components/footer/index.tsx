import Heading from '@/components/heading'
import Logo from '@/components/logo'
import Link from 'next/link'

function CustomLink({
  useNextLink = false,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  useNextLink?: boolean
  children: React.ReactNode
}) {
  if (useNextLink) {
    return (
      <Link
        href={props.href || ''}
        className="text-gray block text-sm hover:underline"
      >
        {children}
      </Link>
    )
  }

  return (
    <a className="text-gray block text-sm hover:underline" {...props}>
      {children}
    </a>
  )
}

function CustomSpan({ children, ...props }: { children: React.ReactNode }) {
  return (
    <span className="text-gray block text-sm" {...props}>
      {children}
    </span>
  )
}

function ColumnItem({
  heading,
  children,
  ...props
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-y-6" {...props}>
      <Heading
        color="black"
        size="small"
        lineBottom
        lineBottomColor="secondary"
        className="uppercase"
      >
        {heading}
      </Heading>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex flex-col gap-y-10">
      <Logo color="black" />

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        <ColumnItem heading="Contact">
          <CustomLink href="mailto:example@email.com">
            example@email.com
          </CustomLink>
          <CustomLink href="tel:+554100000000">+55 41 00000000</CustomLink>
        </ColumnItem>

        <ColumnItem heading="Follow us">
          <nav className="space-y-2" aria-labelledby="social media">
            <CustomLink
              href="https://instagram.com"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </CustomLink>
            <CustomLink
              href="https://twitter.com"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </CustomLink>
            <CustomLink
              href="https://youtube.com"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              YouTube
            </CustomLink>
            <CustomLink
              href="https://facebook.com"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </CustomLink>
          </nav>
        </ColumnItem>

        <ColumnItem heading="Links">
          <nav className="space-y-2" aria-labelledby="footer resources">
            <CustomLink useNextLink href="/">
              Home
            </CustomLink>
            <CustomLink useNextLink href="/explore">
              Explore
            </CustomLink>
            <CustomLink useNextLink href="/search">
              Search
            </CustomLink>
          </nav>
        </ColumnItem>

        <ColumnItem heading="Location" aria-labelledby="location">
          <CustomSpan>Lorem ipsum dolor sit amet.</CustomSpan>
          <CustomSpan>Lorem ipsum.</CustomSpan>
          <CustomSpan>Lorem, ipsum dolor.</CustomSpan>
        </ColumnItem>
      </div>

      <span className="text-gray text-center text-xs leading-none">
        Won Games {currentYear} &copy; All rights reserved
      </span>
    </footer>
  )
}
