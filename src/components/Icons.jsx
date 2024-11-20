import React from 'react'
import './Icons.css'
import { BsGithub } from "react-icons/bs";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaLinkedin, FaSquareInstagram, FaHackerrank } from "react-icons/fa6";
const Icons = () => {
    const icons = [
        {ilogo:<BsGithub />, link:"https://github.com/KaranRathod2003"},
        {ilogo:<FaLinkedin />, link:"https://www.linkedin.com/in/karanrathod2003/?trk=public-profile-join-page"},
        {ilogo:<SiGeeksforgeeks />, link:"https://www.geeksforgeeks.org/user/karanrathod23/"},
        {ilogo:<FaSquareInstagram  />, link:"https://www.instagram.com/ig_propane/"},
    ]
  return (
    <div className='section'>
       {icons.map((icon) =>(
        <div className='icon'>
            <a href={icon.link} target="_blank" rel="noopener noreferrer">{icon.ilogo}</a>
        </div>
       ))}
    </div>
    
  )
}

export default Icons