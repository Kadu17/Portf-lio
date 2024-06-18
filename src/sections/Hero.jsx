import React from 'react'
import styles from '../sections/HeroStyles.module.css';
import ProfileImg from '../assets/Profile-Kadu.jpeg';
import themeIcon from '../assets/sun.png';
import LinkedinIcon from '../assets/linkedin.png';
import GithubIcon from '../assets/github.png';
import InstagramIcon from '../assets/instagram.png';
import { useTheme } from '../Common/ThemeContext';

function Hero() {
  const {theme, toggleTheme} = useTheme(); 

  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img 
        className={styles.hero}
        src={ProfileImg} 
        alt="Profile picture" 
       />
       <img
        className={styles.colorMode}
        src={themeIcon}
        alt='Color mode icon'
       />
       <div className={styles.info}>
        <h1>
            Carlos
            <br />
            Barbosa
        </h1> 
        <h2>Frontend  Developer</h2>
        <span>
            <a href="https://www.linkedin.com/" target='_blank'>
                <img src={LinkedinIcon} alt="Linkedin icon" />
            </a>
            <a href="https://www.github.com/" target='_blank'>
                <img src={GithubIcon} alt="Github icon" />
            </a>
            <a href="https://www.instagram.com/" target='_blank'>
                <img src={InstagramIcon} alt="Instagram icon" />
            </a>
        </span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Magni neque temporibus iste atque delectus cumque magnam libero et eligendi ad.
            Perspiciatis porro obcaecati recusandae labore consequatur exercitationem eius
            excepturi ad?
        </p>
        {/* <a href={CV}>
            <button className="hover" download>
                Resume
            </button>
        </a> */}
       </div>
    </div>
    </section>
  
}

export default Hero
