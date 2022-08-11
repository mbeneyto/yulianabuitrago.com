import SocialLinks from '../..//SocialLinks'

import styles from './styles.module.css'

export default function Hero () {
  return (
    <div className={styles.hero}>
      <h1 className={styles.greeting}>Hola.</h1>
      <h2 className={styles.introduction}>
        Soy <span>Yuliana,</span>
        diseñadora de <span>Producto</span>
        & <span>Sistemas de diseño</span>
      </h2>
      <div className={styles.what_i_do}>
        <SocialLinks className={styles.social} />
        <p>
          Creo interfaces de usuario que dan vida a productos digitales del sector de seguros.
        </p>
      </div>
    </div>
  )
}
