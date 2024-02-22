import { RouteList } from '@components/navigation/types/RouteList'

export const navRoutes: RouteList[] = [
  { name: 'Home', path: '/', authType: 'public' },
  { name: 'Dashboard', path: '/dashboard', authType: 'auth' },
  { name: 'Sign', path: '/sign', authType: 'unauth' },
  { name: 'About', path: '/about', authType: 'public' }
]
