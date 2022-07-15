import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { AudioPlayer } from '../components/AudioPlayer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Study with nature sound</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Study with me?</h1>
        <p className={styles.description}>Let`s study with natural sounds</p>
        <AudioPlayer />
      </main>
    </div>
  );
}