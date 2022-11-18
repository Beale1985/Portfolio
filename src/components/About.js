import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import fotoCv from "../img/fotoCvMatrix.png";
import MatrixEffect from "./MatrixEffect.js";
import {AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai';

function About() {
  return (
    <div className='container'>
    <MatrixEffect className="matrixEffect" />
    <div className='containerMonitor about'>
        <h1 className='description'>Full Stack Developer</h1>
        <span>En búsqueda laboral activa, con el objetivo de 
        integrar los conocimientos adquiridos y desarrollarme profesionalmente en un ambiente laboral interdisciplinario.
        Apasionado por la tecnología y el diseño.
        </span>
        <ul>
          <li>Teléfono: +54 11-6955-9766</li>
          <li>Email: alexisbello0310@hotmail.com</li>
          <li>Ciudad: Ciudad Autónoma de Bs. As. Argentina</li>
          <li>Freelance: Disponibilidad inmediata</li>
        </ul>
        <div className='iconosContacto'>
          <a className='linkAbout' href="https://www.linkedin.com/in/alexis-bello-571478160/" target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin />
          </a>
          <a className='linkAbout' href="https://github.com/Beale1985" target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub />
          </a>
        </div>
        <div className='buttonAboutContainer'>
        <Link to="/">
            <button type="button" class="btn-neon">Volver</button>
        </Link>
        <Link to="/education">
            <button type="button" class="btn-neon">Cargar Estudios</button>
        </Link>
        </div>
        <div className='containerFotoCv'>
          <img className='fotoCv' src={fotoCv} alt="FotoCv"></img>
        </div>
    </div>
    </div>
  )
}

export default About