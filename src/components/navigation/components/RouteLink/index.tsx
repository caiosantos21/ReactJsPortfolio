import { RouteList } from '@components/navigation/types/RouteList'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type RouteLinkProps = { route: RouteList }

export const RouteLink = (props: RouteLinkProps) => {
  const { href, name } = props.route

  const pathName = usePathname()

  const isActive = (path: string) => path === pathName

  return (
    <Link
      key={href}
      href={href}
      className={isActive(href) ? 'nav-bar-link-selected' : 'nav-bar-link'}
    >
      {name}
    </Link>
  )
}
