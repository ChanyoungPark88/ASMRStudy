import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { FaPlay, FaPause, FaBackward, FaForward } from 'react-icons/fa';

const AudioPlayer = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  // references
  const audioPlayer = useRef();

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  return (
    <div className={styles.container}>
      <audio ref={audioPlayer} src='../musics/rain.mp3'></audio>
      {/* <button className={styles.button}>
        <FaBackward />
      </button> */}
      <button className={styles.button} onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      {/* <button className={styles.button}>
        <FaForward />
      </button> */}
    </div>
  );
};

export { AudioPlayer };
