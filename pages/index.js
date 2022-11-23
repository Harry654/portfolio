import Head from 'next/head'
import NavBar from '../components/NavBar';
import WelcomeModal from '../components/WelcomeModal';
import styles from '../styles/Home.module.css'


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
          <p style={{ color: 'black' }}>{'Hey there '.repeat(500)}</p>
        </div>
      </main>

      <footer className={styles.footer}>
        Copyright 2022. Harrison Akunne
      </footer>
    </div>
  )
}
