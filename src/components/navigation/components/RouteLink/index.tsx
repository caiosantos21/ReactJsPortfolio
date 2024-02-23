import { RouteList } from '@components/navigation/types/RouteList'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type RouteLinkProps = { route: RouteList }

export const RouteLink = (props: RouteLinkProps) => {
  const { path, name } = props.route

  const pathName = usePathname()

  const isActive = (path: string) => path === pathName

  return (
    <Link
      key={path}
      href={path}
      className={isActive(path) ? 'nav-bar-link-selected' : 'nav-bar-link'}
    >
      {name}
    </Link>
  )
}
