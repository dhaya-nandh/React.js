import React from 'react'
import aboutimg from '../../assets/hero/about.jpeg'
import arrow from '../../assets/about/arrow.png'
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={aboutimg} alt="about-image"className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                  <img src={arrow} alt="cursor"/>
                  <div className={styles.aboutItemText}>
                    <h3>FrontEnd Developer</h3>
                    <p>I'm a FrontEnd developer with experience in building res and optimized sities</p>
                  </div>
                </li>
                <li className={styles.aboutItem}>
                  <img src={arrow} alt="service"/>
                  <div className={styles.aboutItemText }>
                    <h3>React Developer</h3>
                    <p>
                      I'm a React developer with exprience in building res and optimized sities
                    </p>
                  </div>
                </li>
                <li className={styles.aboutItem}>
                  <img src={arrow} alt="ui/ux"/>
                  <div className={styles.aboutItemText}>
                    <h3>UI and UX</h3>
                    <p>Im a basic level knowledge of ui and ux design and optimized</p>
                  </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About