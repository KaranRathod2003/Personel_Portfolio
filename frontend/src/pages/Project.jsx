import React from 'react';
import './Project.css';
import ProCard from '../components/ProCard';
import project1Animation from '../animations/animation1.json'; // Replace with the correct path
import project2Animation from '../animations/animation1.json'; // Replace with the correct path
import project1Video from '../videos/project1.mp4';
import project2Video from '../videos/project2.mp4';

const projects = [
  {
    name: "AI Virtual Assistant",
    description: "Composed a virtual assistant with features like email automation, app control, and scheduling, increasing user productivity by 30% and reducing task completion time by 40% through personalized responses.Integrated OpenAI API for sentiment analysis and problem-solving, receiving positive feedback from 50+ peers and faculty for its efficiency and real-world application. [Currently in development phase and My College Major Project and a integrated project belongs to 3 members]",
    lottieAnimation: project1Animation,
    video: project1Video,
  },
  {
    name: "Face Recognition Attendance System",
    description: "Initiated an automated facial recognition system with Python (OpenCV, NumPy), reducing manual attendance entry time by 80%, saving approximately 2 hours daily for administrators.Implemented reliable data storage and error-free logging, with daily and monthly attendance recorded in Excel, enhancing accuracy by 95% for up to 500 users. [My College Minor Project for 3rd Year semVI and a integrated project belongs to 4 members]",
    lottieAnimation: project2Animation,
    video: project2Video,
  },
  {
    name: "E-LEARNING (LMS)",
    description: "Reduced system load times by 15% through back-end optimizations and integrated databases for course management and progress tracking, boosting system reliability. Developed an interactive, responsive LMS using HTML, CSS, and JavaScript, improving cross-browser compatibility and increasing user engagement by 35%. [My College Major Project for 2nd Year semIV and a integrated project belongs to 4 members]",
    lottieAnimation: project2Animation,
    video: project1Video,
  },
];

const Project = () => {
  return (
    <div className="project-main">
      {projects.map((project, index) => (
        <ProCard
          key={index}
          name={project.name}
          description={project.description}
          lottieAnimation={project.lottieAnimation}
          video={project.video}
        />
      ))}
      <div className="explore-more">
        <a href="https://github.com/karanrathod2003" target="_blank" rel="noopener noreferrer">
          Explore More
        </a>
      </div>
    </div>
  );
};

export default Project;
