import Head from 'next/head'
import NavBar from '../components/NavBar';
import WelcomeModal from '../components/WelcomeModal';
import Works from '../components/Works';
import styles from '../styles/Home.module.css'
import { Slide } from 'react-awesome-reveal';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Harrison Akunne</title>
        <meta name="description" content="Get to know Harrison Akunne" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <WelcomeModal />
      <NavBar />
      <main className={`${styles.main} ${styles.background}`}>
        
        <div className={styles.content}>
          <div className={styles.about}>
            <Slide direction='left'>
              <h1>Hey there, I'm Harrison Akunne</h1>
            </Slide>
          </div>

          <Works />

        </div>
      </main>

      <footer className={styles.footer}>
        Copyright 2022. Harrison Akunne
      </footer>
    </div>
  )
}
