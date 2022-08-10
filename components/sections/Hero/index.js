import SocialLinks from '../..//SocialLinks'

import styles from './styles.module.css'

export default function Hero () {
  return (
    <div className={styles.hero}>
      <h1>Hola.</h1>
      <h2>
        Soy <span>Yuliana,</span> diseñadora UX & UI
      </h2>
      <div>
        <SocialLinks className={styles.social} />
        <p>
          Creo interfaces de usuario atractivas que dan vida a productos
          digitales para el mercado de la seguridad.
        </p>
      </div>
    </div>
  )
}
