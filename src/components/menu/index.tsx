'use client'

import Button from '@/components/button'
import Logo from '@/components/logo'
import {
  AUTHENTICATED_MENU_ITEMS,
  DEFAULT_MENU_ITEMS
} from '@/components/menu/constants'
import MenuLink from '@/components/menu/link'
import { MenuProps } from '@/components/menu/types'
import { cn } from '@/utils'
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ShoppingCart as CartIcon,
  X as CloseIcon
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

function RegisterBox({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center px-12 pt-0 pb-12',
        'transition-transform duration-300 ease-in-out',
        !isMenuOpen ? 'translate-y-[1.875rem]' : 'translate-y-0'
      )}
    >
      <Button fullWidth size="large">
        Log in now
      </Button>
      <span className="mx-0 my-2 block text-xs">or</span>
      <Link
        href={'#!'}
        className="text-primary border-primary border-b-2"
        title="Sign Up"
      >
        Sign Up
      </Link>
    </div>
  )
}

export default function Menu({ username }: MenuProps) {
  const [isMenuOpenState, setIsMenuOpenState] = useState(false)

  return (
    <menu className="relative flex items-center justify-end px-0 py-4 md:gap-x-8">
      <MenuIcon
        size={20}
        className="cursor-pointer text-white md:hidden"
        aria-label="Open Menu"
        onClick={() => setIsMenuOpenState(true)}
      />

      <div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0">
        <Logo hideOnMobile />
      </div>

      <div className="hidden md:flex md:gap-x-8">
        {DEFAULT_MENU_ITEMS.map((item) => (
          <MenuLink key={item.href} href={item.href} label={item.label} />
        ))}
      </div>

      <div className="ml-auto flex items-center gap-x-4">
        <SearchIcon
          size={20}
          className="cursor-pointer text-white"
          aria-label="Search"
        />
        <CartIcon
          size={20}
          className="cursor-pointer text-white"
          aria-label="Open Shopping Cart"
        />

        {!username && (
          <div className="hidden md:flex">
            <Button>Sign in</Button>
          </div>
        )}
      </div>

      <nav
        aria-hidden={!isMenuOpenState}
        className={cn(
          !isMenuOpenState ? 'opacity-0' : 'opacity-100',
          !isMenuOpenState ? 'pointer-events-none' : 'pointer-events-auto',
          'absolute inset-0 z-10 flex h-screen flex-col items-center justify-center overflow-hidden bg-white',
          'transition-opacity duration-300 ease-in-out'
        )}
      >
        <CloseIcon
          size={20}
          className="absolute top-0 right-0 mt-8 mr-6 cursor-pointer text-black"
          aria-label="Close Menu"
          onClick={() => setIsMenuOpenState(false)}
        />
        <div
          className={cn(
            'flex flex-1 flex-col items-center justify-center gap-y-6',
            'transition-transform duration-300 ease-in-out',
            !isMenuOpenState ? 'translate-y-[1.875rem]' : 'translate-y-0'
          )}
        >
          {DEFAULT_MENU_ITEMS.map((item) => (
            <MenuLink key={item.href} href={item.href} label={item.label} />
          ))}

          {!!username &&
            AUTHENTICATED_MENU_ITEMS.map((item) => (
              <MenuLink key={item.href} href={item.href} label={item.label} />
            ))}
        </div>

        {!username && <RegisterBox isMenuOpen={isMenuOpenState} />}
      </nav>
    </menu>
  )
}
