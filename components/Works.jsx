import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css';
import eye from '../assets/eye.png';
import works from './works.json';

function Works() {
  return (
    <div className={styles.works}>
      {
        works.map((work) => (
          <div className={styles.work}>
            <p className={styles.workTitle}>{work.title}</p>

            <div className={styles.visitDiv}>
              <a href={work.site_url} target='blank' className={styles.site_url}>{work.site_url}</a>
              <Image src={eye} className={styles.visit} />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Works;
