import React from 'react'

function ProjectCard({src}) {
  return (
    <a href="https://github.com/Kadu17/KashBank-int" target='_blank'>
        <img className='hover' src={src} alt="Bank Logo" />
        <h3>KashBank</h3>
        <p>Banco Digital</p>
    </a>
  )
}

export default ProjectCard
