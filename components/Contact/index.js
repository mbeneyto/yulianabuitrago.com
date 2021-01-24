import styles from "./styles.module.css"

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h3>Di hola 👋</h3>
      <a
        href="mailto: yuliana.glez@gmail.com"
        target="_blank"
        rel="nofollow noreferrer"
      >
        ¿Hablámos?
      </a>
    </section>
  )
}
