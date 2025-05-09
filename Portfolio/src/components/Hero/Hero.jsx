import React from 'react'
import styles from './Hero.module.css'
import hero from '../../assets/hero/hero.jpeg'


const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>I'm Dhayanandh</h1>
            <p className={styles.description}>Front-end developer with passion for creating intuitive and visually appealing digital experiences.Proficient in HTML,CSS and Javascript with a focus on delivering high-quality user interface </p>
            <a href="mailto:dhayanandh510@gmail.com" className={styles.contactbtn}>Contact me</a>
        </div>
        <img src={hero} alt="hero-Image" className={styles.heroimg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero