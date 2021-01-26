import Link from "next/link"
import styles from "./styles.module.css"

export default function Header({ isMenuOpen, onClickMenuTrigger }) {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          <span>Yuliana</span>
          <span>Buitrago</span>
        </a>
      </Link>
      <button onClick={onClickMenuTrigger}>{isMenuOpen ? "X" : "Menu"}</button>
    </header>
  )
}
