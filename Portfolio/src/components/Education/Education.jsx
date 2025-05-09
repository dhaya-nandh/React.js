import React from 'react'
import styles from './Education.module.css'
import college from '../../assets/Education/College.jpg'
import school from '../../assets/Education/GNMHSS.jpg'

const Education = () => {
  return (
    <section className={styles.contianer} id="education">
        <h3 className={styles.title}>Education</h3>
        <div className={styles.content}>
            <ul className={styles.educationItems}>
            <li className={styles.educationItem}>
            <img src={college} alt="college-img" className={styles.image}/>
            <div className={styles.educationItemText}>
            <p>Shanmuga Industries of Arts and Science</p>
            <p>BSC Computer Science (2020-2023)</p>
            <p>CGPA : 83.70 </p>
            </div>
            </li>
            
            
            <li className={styles.educationItem}>
            <img src={school} alt="school-img" className={styles.image}/>
            <div className={styles.educationItemText}>
            <p>GandhiNagar Matriculation Higher Secondary
                School</p>
            <p>12th STD (2020)</p>
            <p>Percentage :70.17</p>
            </div>
            </li>
            
            
            <li className={styles.educationItem}>
            <img src={school} alt="school-img" className={styles.image}/>
            <div className={styles.educationItemText}>
            <p>GandhiNagar Matriculation Higher Secondary
                School</p>
            <p>10th STD (2018)</p>
            <p>Percentage :72.2</p>
            </div>
            </li>
            </ul>

        </div>
    </section>
  )
}

export default Education