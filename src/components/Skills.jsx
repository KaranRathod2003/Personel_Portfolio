import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaJava,} from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { GiMaterialsScience } from "react-icons/gi";
import { SiExpress, SiTypescript  } from "react-icons/si";
import { IoIosLeaf } from "react-icons/io";

const Skills = () => {
  const skills = [
    { icon: <IoIosLeaf />, name: 'Mongo DB'},
     { icon: <SiExpress />, name: 'Express.js' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaJsSquare />, name: 'JavaScript' },
    { icon: <FaJava />, name: 'Java'},
    {icon : <SiTypescript />, name: 'TypeScript'},
    { icon: <GiMaterialsScience />, name: 'Material UI' },
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon:<RiTailwindCssFill />, name:'Tailwind CSS'},
    { icon: <FaBootstrap />, name: 'Bootstrap'},
    // Add more skills as needed
  ];

  return (
    <div className="skills-section">
      <h2><span className=''>Core</span>  Competencies</h2>
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
