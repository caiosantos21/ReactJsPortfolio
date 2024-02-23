'use client'

import { UserButton, useUser } from '@clerk/nextjs'
import { RouteLink } from '@components/navigation/components/RouteLink'
import { RouteList } from '@components/navigation/types/RouteList'
import { navRoutes } from './constants/navRoutes'

export const Navigation = () => {
  const { user } = useUser()

  const link = {
    auth: (route: RouteList) => (user ? <RouteLink route={route} /> : null),
    unauth: (route: RouteList) => (!user ? <RouteLink route={route} /> : null),
    public: (route: RouteList) => <RouteLink route={route} />
  }

  return (
    <header>
      <nav className="nav-bar" aria-label="Global">
        {navRoutes.map((route) => {
          const auth = route.authType ?? 'public'

          return link[auth](route)
        })}

        {user ? <UserButton /> : null}
      </nav>
    </header>
  )
}

//
