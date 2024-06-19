import React from 'react'
import styles from './ProjectsStyles.module.css'
import bank from '../assets/Bank.png'
import bitcoin from '../assets/bitcoin.png'
import meinung from '../assets/Meinung.png'
import eulle from '../assets/Eulle.png'
import flutter from '../assets/Flutter.png'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>PROJECTS</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={bank}/>

        {/* <a href="https://meinung.gitbook.io/meinung-docs" target='_blank'>
            <img className='hover' src={meinung} alt='Meinung Logo' />
            <h3>Meinung</h3>
            <p>Plataforma de Gerenciamento de feedbacks</p>
        </a>

        <a href="https://eulle.vercel.app/" target='_blank'>
            <img className='hover' src={eulle} alt='Meinung Logo' />
            <h3>Eulle</h3>
            <p>Automação</p>
        </a>

        <a href="https://github.com/Kadu17/LoginFlutter" target='_blank'>
            <img className='hover' src={flutter} alt='Meinung Logo' />
            <h3>SNKRS</h3>
            <p>App E-Commerce</p>
        </a> */}
      </div>
    </section>
  )
}

export default Projects
