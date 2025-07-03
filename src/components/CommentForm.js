// src/components/CommentForm.js
import React, { useState } from 'react';
import styles from './CommentForm.module.css';

const CommentForm = ({ onSubmit, isLoggedIn, userName }) => {
  const [name, setName] = useState(userName || '');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || (!isLoggedIn && !name)) return;

    const newComment = {
      name,
      text,
      date: new Date(),
    };

    onSubmit(newComment);
    setText('');
    if (!isLoggedIn) setName('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {!isLoggedIn && (
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
      )}
      <div className={styles.field}>
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CommentForm;
