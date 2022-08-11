import Link from 'next/link'
import Image from 'next/image'

import menuIcon from '../../../public/images/icons/menu.svg'

import styles from './styles.module.css'

export default function Header ({ isMenuOpen, onClickMenuTrigger }) {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          <span>Yuliana</span>
          <span>Buitrago</span>
        </a>
      </Link>
      <button className={styles.menu_btn} onClick={onClickMenuTrigger}>
        {
          isMenuOpen
            ? 'X'
            : <Image
              src={menuIcon} />
        }
      </button>
    </header>
  )
}
