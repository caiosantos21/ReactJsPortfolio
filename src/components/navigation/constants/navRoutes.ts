import { RouteList } from '@components/navigation/types/RouteList'

export const navRoutes: RouteList[] = [
  { name: 'Home', href: '/', authType: 'public' },
  { name: 'Dashboard', href: '/dashboard', authType: 'auth' },
  { name: 'Sign', href: '/sign', authType: 'unauth' },
  { name: 'Linked List', href: '/linkedList', authType: 'public' },
  { name: 'About', href: '/about', authType: 'public' }
]
