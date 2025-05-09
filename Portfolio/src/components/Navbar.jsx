import React ,{useState}from 'react'
import styles from './Navbar.module.css'
import menuIcon from '../assets/nav/menuIcon.png'
import closeIcon from '../assets/nav/closeIcon.png'

const Navbar = () => {
    const [openMenu,setopenMenu]=useState(false);

  return (
  
        <nav className={styles.navbar}>
            <a href="/" className={styles.title}>Portfolio</a>
            <div className={styles.menu}>
               <img className={styles.menuBtn} 
               src={openMenu?(closeIcon):(menuIcon)} 
               alt="menu-Btn" 
               onClick={()=>setopenMenu(!openMenu)}/>
                <ul className={`${styles.menuItem} ${openMenu && styles.openMenu}`}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href='#project'>Project</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
   
  )
}

export default Navbar