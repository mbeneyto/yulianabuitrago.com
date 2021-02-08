import Link from "next/link"
import clsx from "clsx"
import styles from "./styles.module.css"
import { useEffect } from "react"

export default function Menu({ open, onCloseMenu }) {
  const Option = ({ url, title, subtitle = "" }) => (
    <div className={styles.option}>
      <Link href={url}>
        <a onClick={onCloseMenu}>{title}</a>
      </Link>
      <span>{subtitle}</span>
    </div>
  )

  const handleEscapeKeyPress = (event) => {
    if (event.key === "Escape") {
      onCloseMenu()
    }
  }

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleEscapeKeyPress)
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress)
    }
  }, [open])

  return (
    <div className={clsx(styles.overlay, open && styles.overlay__open)}>
      <nav className={styles.menu}>
        <Option url="/" title="Home" subtitle="Vuelve a la página principal" />
        <Option
          url="/projects"
          title="Proyectos"
          subtitle="Echa un vistazo a mis proyectos"
        />
        <Option
          url="/side-projects"
          title="Otros trabajos"
          subtitle="Profesionales y personales"
        />
        <Option
          url="/about"
          title="Sobre mí"
          subtitle="Quién soy yo y como he llegado al UX"
        />
      </nav>
    </div>
  )
}
