import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import fotoCv from "../img/fotoCvMatrix.png";
import { Fade } from 'react-reveal';

function About() {
  return (
    <div className='containerMonitor about'>
        <h1 className='description'>Sobre Mi</h1>
        <h1 className='description'>Full Stack Developer</h1>
        <span>En búsqueda laboral activa, con el objetivo de 
        integrar los conocimientos adquiridos y desarrollarme profesionalmente en un ambiente laboral interdisciplinario.
        Apasionado por la tecnología.
        </span>
        <ul>
          <li>Teléfono: +54 11-6955-9766</li>
          <li>Email: alexisbello0310@hotmail.com</li>
          <li>Ciudad: Ciudad Autónoma de Bs. As. Argentina</li>
          <li>Freelance: Disponibilidad inmediata</li>
        </ul>
        <div className='buttonAboutContainer'>
        <Link to="/">
            <button type="buttonAbout">Volver</button>
        </Link>
        <Link to="/experience">
            <button type="buttonAbout">Cargar Experiencia</button>
        </Link>
        </div>
        <Fade className='containerFotoCv'>
          <img className='fotoCv' src={fotoCv}></img>
        </Fade>
    </div>
  )
}

export default About