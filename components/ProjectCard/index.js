import Link from 'next/link'

import styles from './styles.module.css'

export default function ProjectCard ({
  project: {
    id,
    title,
    subtitle,
    type,
    cardGradient
  }
}) {
  return (
    <div
      className={styles.card}
      style={{
        '--card-gradient': `var(--${cardGradient})`
      }}
    >
      <div className={styles.content}>
        <p>{type}</p>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <Link href={`/projects/${id}`}>
          <a>Ver diseño →</a>
        </Link>
      </div>
      <img src={`/images/projects/${id}-card.png`} />
    </div>
  )
}
