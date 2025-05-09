import React from 'react'
import styles from './Technicalskill.module.css'
import html from '../../assets/skills/html.png'
import css  from '../../assets/skills/css.png'
import javascript  from '../../assets/skills/javascript.png'
import react  from '../../assets/skills/react.png'
import java from '../../assets/skills/java.png'



const Technicalskills = () => {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}>Technical Skills</h1>
                <div className={styles.content}>
                    <ul className={styles.skillImages}>
                        <li className={styles.images}>
                        <img src={html} alt="image" className={styles.Item}/>
                        <p>HTML</p>
                        </li>
                    <li className={styles.images}>
                    <img src={css} alt="image" className={styles.Item}/>
                    <p>Css</p>
                    </li>
                    <li className={styles.images}>
                    <img src={javascript} alt="image" className={styles.Item}/>
                    <p>Javascript</p>
                    </li>
                    <li className={styles.images}>
                    <img src={react} alt="image" className={styles.Item}/>
                    <p>React</p>
                    </li>
                    <li className={styles.images}>
                    <img src={java} alt="image"className={styles.Item}/>
                    <p>Java</p>
                    </li> 
                    </ul>   
                </div>
           
    </section>
  )
}

export default Technicalskills