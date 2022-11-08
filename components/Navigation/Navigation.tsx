import Link from 'next/link'
import styles from './navigation.module.css'

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='issues'>Issues</Link>
        </li>
      </ul>
    </nav>
  )
}
