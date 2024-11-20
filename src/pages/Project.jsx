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
    description: "• Composed a virtual assistant...",
    lottieAnimation: project1Animation,
    video: project1Video,
  },
  {
    name: "Movie Explorer",
    description: "A personalized AI assistant for various tasks.",
    lottieAnimation: project2Animation,
    video: project2Video,
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
