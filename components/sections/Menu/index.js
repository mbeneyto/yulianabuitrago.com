import Link from 'next/link'
import clsx from 'clsx'

import { useEffect } from 'react'

import styles from './styles.module.css'

export default function Menu ({ open, onCloseMenu }) {
  const Option = ({ url, title, subtitle = '' }) => (
    <div className={styles.option}>
      <Link href={url}>
        <a onClick={onCloseMenu}>{title} <br /> <span>{subtitle}</span></a>
      </Link>
    </div>
  )

  const handleEscapeKeyPress = (event) => {
    if (event.key === 'Escape') {
      onCloseMenu()
    }
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleEscapeKeyPress)
    }

    return function () {
      document.removeEventListener('keydown', handleEscapeKeyPress)
    }
  })

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
