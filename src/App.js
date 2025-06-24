// src/App.js
import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostPage from './components/BlogPostPage';
import NewPostPage from './components/NewPostPage';
import EditPostPage from './components/EditPostPage';
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
  const [posts, setPosts] = useState(samplePosts);

  const handleAddPost = (newPost) => {
    setPosts([...posts, { id: (posts.length + 1).toString(), ...newPost }]);
  };
  
  const handleUpdatePost = (updatedPost) => {
    setPosts(posts.map((p) => (p.id === updatedPost.id ? updatedPost : p)));
  };
  
  const handleDeletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };
  
  return (
    <div className="app">
      <h1>Blog Posts</h1>
      <Link to="/new" className="newPostLink">➕ Create New Post</Link>
      <Routes>
        <Route path="/" element={<BlogPostList posts={posts} />} />
        <Route
          path="/posts/:id"
          element={<BlogPostPage posts={posts} onDeletePost={handleDeletePost} />}
        />
        <Route path="/new" element={<NewPostPage onAddPost={handleAddPost} />} />
        <Route
          path="/posts/:id/edit"
          element={<EditPostPage posts={posts} onUpdatePost={handleUpdatePost} />}
        />
      </Routes>
    </div>
  );
};

export default App;
