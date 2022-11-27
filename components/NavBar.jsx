import React from 'react';
import styles from '../styles/NavBar.module.css';
import avatar from '../assets/background2.jpg';
import Image from 'next/image';
import Link from 'next/link';

function NavBar() {
  return (
    <nav className={styles.navBar}>
        <Image src={avatar} alt='avatar' className={styles.avatar} />
        <Link href='/' className={styles.navItems}>Home</Link>
        <Link href='/' className={styles.navItems}>About Me</Link>
        <Link href='#works' className={styles.navItems}>Works</Link>
        <Link href='/' className={styles.navItems}>Tech Stack</Link>
        <Link href='/' className={styles.navItems}>Contact</Link>
    </nav>
  )
}

export default NavBar;