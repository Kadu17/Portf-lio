import React from 'react'
import styles from '../sections/FooterStyles.module.css'

function Footer() {
  return (
    <section id='footer' className={styles.container}>
      <p> 
        &copy; 2024 Carlos Barbosa. <br />
        All rights reserved.
      </p>
    </section>
  )
}

export default Footer
