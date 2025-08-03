import React from 'react';
import './App.css';

const BlogDetails = ({ blogs }) => {
  return (
    <div className="card blog-card">
      <h2 className="card-title">Blog Details</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>By: {blog.author}</p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
