import { useState } from 'react'
import Head from 'next/head'

import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Header from '../sections/Header'
import Menu from '../sections/Menu'

import styles from './styles.module.css'

export default function Layout ({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = (toggle) => {
    document.querySelector('body').classList.toggle('block-scroll')
    setIsMenuOpen(toggle)
  }

  const handleCloseMenu = () => {
    document.querySelector('body').classList.toggle('block-scroll')
    handleToggleMenu(false)
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <Header
          isMenuOpen={isMenuOpen}
          onClickMenuTrigger={() => handleToggleMenu(!isMenuOpen)}
        />
        <Menu open={isMenuOpen} onCloseMenu={handleCloseMenu} />
        <main className={styles.content}>{children}</main>
        <Contact />
        <Footer />
      </div>
    </>
  )
}
