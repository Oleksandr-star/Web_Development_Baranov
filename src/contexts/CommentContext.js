// CommentContext.js
import React, { createContext, useContext, useState } from 'react';

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState('');

  const addComment = () => {
    setComments((prevComments) => [...prevComments, inputComment]);
    setInputComment('');
  };

  return (
    <CommentContext.Provider value={{ comments, addComment, inputComment, setInputComment }}>
      {children}
    </CommentContext.Provider>
  );
};

export const useComment = () => {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error('useComment must be used within a CommentProvider');
  }
  return context;
};