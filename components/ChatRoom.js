import React from 'react';
import styles from '../styles/Home.module.css';
import { FaPaperPlane } from 'react-icons/fa';
function ChatRoom() {
  return (
    <div className={styles.chatRoom}>
      <div className={styles.messageBox}>
        <div className={styles.chatMessages}>This is message Box</div>
      </div>
      <div className={styles.inputBox}>
        <form action='' id='chat-form'>
          <input
            type='text'
            id='msg'
            placeholder='Enter Message'
            required
            autoComplete='off'
          />
          <button className={styles.btn}>
            <FaPaperPlane /> Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatRoom;
