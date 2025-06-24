// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostPage from './components/BlogPostPage';
import './App.css';

export const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    summary:
      'Learn the basics of React and build your first application. This guide covers components, state, props, and JSX syntax to get you up and running with React development.',
    content:
      '<p>Welcome to React! This post covers all the essentials you need to know, including components, state, and props. Learn how to build your first app and understand the core concepts of React.</p>',
    date: '2023-01-01',
    url: '/posts/1',
    author: 'John Doe',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary:
      'A comparison of two powerful layout systems in CSS. Understand when to use each and how they can work together to create responsive designs for modern web applications.',
    content:
      '<h3>CSS Grid vs Flexbox</h3><p>CSS Grid is ideal for creating layout structures, while Flexbox shines when aligning items in a single row or column. Learn more about their differences and best practices in this post.</p>',
    date: '2023-02-15',
    url: '/posts/2',
    author: 'Jane Smith',
  },
];

const App = () => {
  return (
    <div className="app">
      <h1>Blog Posts</h1>
      <Routes>
        <Route path="/" element={<BlogPostList posts={samplePosts} />} />
        <Route path="/posts/:id" element={<BlogPostPage posts={samplePosts} />} />
      </Routes>
    </div>
  );
};

export default App;
