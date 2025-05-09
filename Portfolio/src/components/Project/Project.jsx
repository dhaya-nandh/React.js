import React from 'react'
import image from '../../assets/project/code.jpeg'
import styles from './Project.module.css'

const Project = () => {
  return (
    <section className={styles.container} id="project">
        <h1 className={styles.title}>Project</h1>
        <ul className={styles.content}>
            <li className={styles.projectItems}>
            <img src={image}/>
                <div className={styles.projectItem}>
                    <h3>Weather App</h3>
                    <p>Weather App is using current weather data from API fetch data</p>
                    <a href="https://github.com/dhaya-nandh/weather.git">Source Code</a>
                </div>
            </li>
            <li className={styles.projectItems}>
                <img src={image}/>
                <div className={styles.projectItem}>
                    <h3>Ticket Booking</h3>
                    <p>Ticket Booking is using Booking tickets from online compatable prices</p>
                    <a href="https://github.com/dhaya-nandh/Ticket-Booking.git">Soure Code</a>
                </div>
            </li>
            <li className={styles.projectItems}>
                <img src={image}/>
                <div className={styles.projectItem}>
                    <h3>TODO list</h3>
                    <p>Todo list is using add and delete data from the students</p>
                    <a href="https://github.com/dhaya-nandh/ToDo.git">Source Code</a>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default Project