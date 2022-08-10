import BehanceIcon from '../icons/behance'
import LinkedinIcon from '../icons/linkedin'
import MediumIcon from '../icons/medium'
import TwitterIcon from '../icons/twitter'
import styles from './styles.module.css'

export default function SocialLinks () {
  return (
    <ul className={styles.social}>
      <li>
        <a
          href="https://www.linkedin.com/in/yulianabglez/"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <LinkedinIcon />
        </a>
      </li>
      <li>
        <a
          href="https://medium.com/@yuliana.glez"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <MediumIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.behance.net/yulianabuitrago"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <BehanceIcon />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/mapetiteluune"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <TwitterIcon />
        </a>
      </li>
    </ul>
  )
}
