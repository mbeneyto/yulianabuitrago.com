import SocialLinks from "components/SocialLinks"
import styles from "./styles.module.css"

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h2>Hola.</h2>
      <div className={styles.presentation}>
        <h3>
          Soy <span>Yuliana,</span> diseñadora UX & UI
        </h3>
        <p>
          Creo interfaces de usuario atractivas que dan vida a productos
          digitales para el mercado de la seguridad.
        </p>
        <SocialLinks />
      </div>
    </div>
  )
}
