import React from 'react'
import styles from './Contact.module.css'
import mail from '../../assets/contact/Mail.png'
import linkedin from "../../assets/contact/linkedin.png"
import github from '../../assets/contact/github.png'
const Contact = () => {
  return (
   <footer className={styles.container} id="contact">
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={mail}/>
                <a href="mailto:dhayanandh510@gmail.com">dhayanandh510@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={linkedin}/>
                <a href="https://www.linkedin.com/in/dhayanandh-v-575bb4322">Linkedin</a>
            </li>
            <li className={styles.link}>
                <img src={github}/>
                <a href="https://github.com/dhaya-nandh">Github</a>
            </li>
        </ul>
   </footer>
  )
}

export default Contact