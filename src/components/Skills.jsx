import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaBootstrap, FaJava  } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { IoIosLeaf } from "react-icons/io";

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaDatabase />, name: 'Database' },
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <FaJsSquare />, name: 'JavaScript' },
    { icon: <FaPython />, name: 'Python'},
    { icon: <FaJava />, name: 'Java'},
    { icon: <FaBootstrap />, name: 'Bootstrap'},
    { icon: <DiDjango />, name: 'Django'},
    { icon: <IoIosLeaf />, name: 'Mongo DB'},
    { icon:<RiTailwindCssFill />, name:'Tailwind CSS'    }
    // Add more skills as needed
  ];

  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
