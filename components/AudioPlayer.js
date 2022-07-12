import React, { useState, useRef } from 'react';
import styles from '../styles/Home.module.css';
import { FaPlay, FaPause, FaBackward, FaForward } from 'react-icons/fa';

const AudioPlayer = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);

  // references
  const audioPlayer = useRef();
  const progressBar = useRef();

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
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
          src='https://www.soundjay.com/nature/rain-03.mp3'
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
        <button className={styles.chatButton}>
          <span>Chat Room</span>
        </button>
      </div>
    </div>
  );
};

export { AudioPlayer };
