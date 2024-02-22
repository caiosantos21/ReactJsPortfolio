'use client'

import { UserButton, useUser } from '@clerk/nextjs'
import { RouteLink } from '@components/navigation/components/RouteLink'
import { RouteList } from '@components/navigation/types/RouteList'
import { navRoutes } from './constants/navRoutes'
import styles from './navigation.module.css'

export const Navigation = () => {
  const { user } = useUser()

  const link = {
    auth: (route: RouteList) => (user ? <RouteLink route={route} /> : null),
    unauth: (route: RouteList) => (!user ? <RouteLink route={route} /> : null),
    public: (route: RouteList) => <RouteLink route={route} />
  }

  return (
    <header>
      <nav
        className={styles.teste}
        // className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-l-0 border-r-0 border-b-gray-600"
        aria-label="Global"
      >
        {navRoutes.map((route) => {
          return link[route.authType](route)
        })}

        {user ? <UserButton /> : null}
      </nav>
    </header>
  )
}

//
