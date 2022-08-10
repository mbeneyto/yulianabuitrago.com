import Link from 'next/link'

import SocialLinks from '../../SocialLinks'

import styles from './styles.module.css'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Proyectos</a>
          </Link>
        </li>
        <li>
          <Link href="/side-projects">
            <a>Otros proyectos</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre mí</a>
          </Link>
        </li>
      </ul>
      <p>Diseñado con mucho ☕️ por Yuliana</p>
      <SocialLinks />
    </footer>
  )
}
