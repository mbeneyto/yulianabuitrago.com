import Link from "next/link"

import styles from "./styles.module.css"

export default function ProjectCard({
  project: { id, title, subtitle, type, gradientTop, gradientBottom },
}) {
  return (
    <div
      className={styles.card}
      style={{
        "--gradient-top": gradientTop,
        "--gradient-bottom": gradientBottom,
      }}
    >
      <p>{type}</p>
      <h3>
        {title} <br /> {subtitle}
      </h3>
      <Link href={`/projects/${id}`}>
        <a>Ver proyecto →</a>
      </Link>
      <img src={`/images/projects/${id}-card.png`} />
    </div>
  )
}
