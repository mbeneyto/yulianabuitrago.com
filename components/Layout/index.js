import { useState } from "react"
import Head from "next/head"

import Contact from "components/Contact"
import Footer from "components/Footer"
import Header from "components/Header"
import Menu from "components/Menu"

import styles from "./styles.module.css"

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = (toggle) => {
    setIsMenuOpen(toggle)
  }

  const handleCloseMenu = () => {
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