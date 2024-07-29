import React from 'react'
import styles from './ProjectsStyles.module.css'
import bank from '../assets/Bank.png'
import bitcoin from '../assets/bitcoin.png'
import meinung from '../assets/Meinung.png'
import eulle from '../assets/Eulle.png'
import flutter from '../assets/Flutter.png'
import Front from '../assets/desinfeccao.png'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>PROJECTS</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={bitcoin}
            link={'https://github.com/Kadu17/KashBank-int'}
            h3='KashBank'
            p='Digital Bank'
        />

        <ProjectCard src={flutter}
            link={'https://github.com/Kadu17/LoginFlutter'}
            h3='SNKRS'
            p='App E-Commerce'
        />

        <ProjectCard src={meinung}
            link={'https://meinung.gitbook.io/meinung-docs'}
            h3='Meinung'
            p='Feedback Management Platform'
        />

        <ProjectCard src={eulle}
            link={'https://eulle.vercel.app/'}
            h3='Eulle'
            p='Automation'
        />

        <ProjectCard src={Front}
            link={'https://front-equip.vercel.app/'}
            h3='Front-Equip'
            p='product catalog'
        />
        
      </div>
    </section>
  )
}

export default Projects
