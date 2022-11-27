import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css';
import eye from '../assets/eye.png';
import github from '../assets/github.png';
import works from './works.json';

function Works() {
  return (
    <div id='works' className={styles.works}>
      {
        works.map((work, index) => (
          <div key={index} className={styles.work}>
            <p className={styles.workTitle}>{work.title}</p>

            <div className={styles.links}>

              <div className={styles.githubDiv}>
                <a href={work.github_url} target='blank' className={styles.site_url}>{work.github_url}</a>
                <Image src={github} className={styles.visit} alt='gitbub' />
              </div>

              <div className={styles.visitDiv}>
                <a href={work.site_url} target='blank' className={styles.site_url}>{work.site_url}</a>
                <Image src={eye} className={styles.visit} alt='site' />
              </div>
            </div>


          </div>
        ))
      }
    </div>
  )
}

export default Works;
