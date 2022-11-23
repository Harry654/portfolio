import React from 'react';
import styles from '../styles/NavBar.module.css';
import avatar from '../assets/background2.jpg';
import Image from 'next/image';

function NavBar() {
  return (
    <nav className={styles.navBar}>
        <Image src={avatar} alt='avatar' className={styles.avatar} />
        <a className={styles.navItems}>Home</a>
        <a className={styles.navItems}>About Me</a>
        <a className={styles.navItems}>Works</a>
        <a className={styles.navItems}>Tech Stack</a>
        <a className={styles.navItems}>Contact</a>
    </nav>
  )
}

export default NavBar;