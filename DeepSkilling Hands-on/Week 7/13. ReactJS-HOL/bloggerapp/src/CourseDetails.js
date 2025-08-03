import React from 'react';
import './App.css';

const CourseDetails = ({ courses }) => {
  return (
    <div className="card course-card">
      <h2 className="card-title">Course Details</h2>
      {courses.length > 0 ? (
        <>
          {courses.map(course => (
            <div key={course.id}>
              <h3>{course.name}</h3>
              <p>Date: {course.date}</p>
            </div>
          ))}
        </>
      ) : (
        <p>No courses available at the moment.</p>
      )}
    </div>
  );
};

export default CourseDetails;
