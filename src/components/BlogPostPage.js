// src/components/BlogPostPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPostDetail from './BlogPostDetail';

const BlogPostPage = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <BlogPostDetail
      title={post.title}
      content={post.content}
      author={post.author}
      date={post.date}
    />
  );
};

export default BlogPostPage;
