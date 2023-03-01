
import React, { useContext } from 'react'
import ThemeContext from './context/ThemeContext';
import './styles/Producitem.css';


const About = () => {

  const themeContext = useContext(ThemeContext);
  console.log({themeContext});

  return (
    <div className={`bg-${themeContext} ab`}>About
    </div>
  )
}

export default About