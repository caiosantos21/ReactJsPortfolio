'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import styles from './navigation.module.css'

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' }
]

export const Navigation = () => {
  const pathName = usePathname()
  const {} = useRouter()

  const isActive = (path: string) => path === pathName

  return (
    <nav>
      <ul className={styles.list}>
        {LINKS.map(({ path, name }) => {
          return (
            <li key={path}>
              <Link
                href={path}
                className={
                  isActive(path) ? styles.navAnchorActive : styles.navAnchor
                }
              >
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
