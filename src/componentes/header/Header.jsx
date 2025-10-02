import React from 'react'
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header>
        <h1 id={styles.titulo}>Luna & Granos</h1>
        <p className={styles.descripcion}>Cafeteria gourmet</p>
    </header>
  )
}
