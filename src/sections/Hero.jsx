import React from 'react'
import styles from '../sections/HeroStyles.module.css';
import ProfileImg from '../assets/Profile-Kadu.jpeg';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg'
import LinkedinDark from '../assets/linkedin-dark.svg';
import LinkedinLight from '../assets/linkedin-light.svg'
import GithubDark from '../assets/github-dark.svg';
import GithubLight from '../assets/github-light.svg';
import CV from '../assets/Apresentação.pdf'
import { useTheme } from '../Common/ThemeContext';

function Hero() {
  const {theme, toggleTheme} = useTheme(); 

  const themeIcon = theme === 'light' ? sun : moon;
  const LinkedinIcon = theme === 'light' ? LinkedinLight : LinkedinDark;
  const GithubIcon = theme === 'light' ? GithubLight : GithubDark;


  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
      <div className={styles.lua}>
      <img
        className={styles.colorMode}
        src={themeIcon}
        alt='Color mode icon'
        onClick={toggleTheme}
       />
      </div>
      <img 
        className={styles.hero}
        src={ProfileImg} 
        alt="Profile picture" 
       />
       <div className={styles.info}>
        <h1>
            Carlos
            <br />
            Barbosa
        </h1> 
        <h2>Frontend  Developer</h2>
        <span>
            <a href="https://www.linkedin.com/in/carlos-barbosa-a89426252/" target='_blank'>
                <img src={LinkedinIcon} alt="Linkedin icon" />
            </a>
            <a href="https://github.com/Kadu17/" target='_blank'>
                <img src={GithubIcon} alt="Github icon" />
            </a>
        </span>
        <p className={styles.description}>
        Passion for web development with React.
        </p>
        <a href={CV} target='_blank'>
            <button className="hover" download>
                Resume
            </button>
        </a>
       </div>
    </div>
    </section>
  
}

export default Hero
