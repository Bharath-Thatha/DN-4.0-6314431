import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

const booksData = [
  { id: 101, name: 'Master React', price: 670 },
  { id: 102, name: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, name: 'Mongo Essentials', price: 450 },
];

const blogsData = [
  { id: 201, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
  { id: 202, title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.' },
];

const coursesData = [
  { id: 301, name: 'Angular', date: '4/5/2021' },
  { id: 302, name: 'React', date: '6/3/2020' },
];

const App = () => {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  const renderBookDetails = showBooks && <BookDetails books={booksData} />;

  const renderBlogDetails = showBlogs ? <BlogDetails blogs={blogsData} /> : null;

  let renderCourseDetails;
  if (showCourses) {
    renderCourseDetails = <CourseDetails courses={coursesData} />;
  } else {
    renderCourseDetails = null;
  }

  return (
    <div className="blogger-container">
      <div className="title-section">
        <h1>Blogger App</h1>
      </div>
      <div className="toggle-buttons">
        <button onClick={() => setShowBooks(!showBooks)}>
          {showBooks ? 'Hide Books' : 'Show Books'}
        </button>
        <button onClick={() => setShowBlogs(!showBlogs)}>
          {showBlogs ? 'Hide Blogs' : 'Show Blogs'}
        </button>
        <button onClick={() => setShowCourses(!showCourses)}>
          {showCourses ? 'Hide Courses' : 'Show Courses'}
        </button>
      </div>

      <div className="content-container">
        {renderBookDetails}
        {renderBlogDetails}
        {renderCourseDetails}
      </div>
    </div>
  );
};

export default App;
