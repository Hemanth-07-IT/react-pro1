// src/components/CommentList.js
import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((c, index) => (
        <Comment
          key={index}
          name={c.name}
          date={c.date}
          text={c.text}
          avatar={c.avatar}
        />
      ))}
    </div>
  );
};

export default CommentList;
