import React, { useState, useRef } from 'react';
import styles from '../styles/Home.module.css';
import { FaPlay, FaPause } from 'react-icons/fa';
import ChatRoom from './ChatRoom';
import Link from 'next/link';
import Modal from 'react-modal';
import { useRouter } from 'next/router';

const AudioPlayer = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);

  // references
  const audioPlayer = useRef();
  const progressBar = useRef();
  const router = useRouter();

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      console.log(audioPlayer);
    } else {
      audioPlayer.current.pause();
    }
  };

  const changeVolume = (e) => {
    audioPlayer.current.volume = e.target.value / 100;
  };

  return (
    <div>
      <div className={styles.container}>
        <audio
          ref={audioPlayer}
          // src='https://www.soundjay.com/nature/rain-03.mp3'
          src='https://drive.google.com/uc?export=view&id=1pecUsLuer7li1A32UbOoX3JYoITRWFRM'
          type='audio/mpeg'
          preload='metadata'
          loop
          volume
        ></audio>
        <button className={styles.button} onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>

      <div className={styles.container}>
        <input
          type='range'
          className={styles.progressBar}
          defaultValue='50'
          ref={progressBar}
          onChange={changeVolume}
        />
      </div>

      <div className={styles.container}>
        <Link href='/?chatroom=1'>
          <button className={styles.chatButton}>
            <span>Chat Room</span>
          </button>
        </Link>
      </div>
      <Modal
        isOpen={!!router.query.chatroom}
        onRequestClose={() => router.push('/')}
        // style={customStyles}
      >
        <ChatRoom />
      </Modal>
    </div>
  );
};

export { AudioPlayer };
