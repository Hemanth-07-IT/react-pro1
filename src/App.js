// App.js
import React from 'react';
import BlogPostList from './components/BlogPostList';

const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application. This guide covers components, state, props, and JSX syntax to get you up and running with React development.',
    date: '2023-01-01',
    url: '/posts/1',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS. Understand when to use each and how they can work together to create responsive designs for modern web applications.',
    date: '2023-02-15',
    url: '/posts/2',
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible. Learn about ARIA attributes, keyboard navigation, color contrast, and other techniques to improve accessibility.',
    date: '2023-03-10',
    url: '/posts/3',
  },
  {
    id: '4',
    title: 'JavaScript ES6 Features',
    summary: 'Explore the most useful features introduced in ES6, including arrow functions, template literals, destructuring, and classes. Upgrade your JavaScript coding style with these modern syntax improvements.',
    date: '2023-04-05',
    url: '/posts/4',
  },
  {
    id: '5',
    title: 'State Management in React',
    summary: 'An overview of state management solutions for React applications. Compare Context API, Redux, and other state management libraries to find the right solution for your project.',
    date: '2023-05-20',
    url: '/posts/5',
  },
  {
    id: '6',
    title: 'Responsive Design Principles',
    summary: 'Master the core principles of responsive web design. Learn about fluid grids, flexible images, and media queries to create websites that work beautifully on any device.',
    date: '2023-06-15',
    url: '/posts/6',
  },
];

const App = () => {
  return (
    <div className="app">
      <h1>Blog Posts</h1>
      <BlogPostList posts={samplePosts} />
    </div>
  );
};

export default App;