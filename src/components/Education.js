import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import MatrixEffect from "./MatrixEffect.js";

function Education() {
  return (
    <div className='container'>
    <MatrixEffect />
    <div className='containerMonitor about'>
        <h1 className='description'>Full Stack Developer</h1>
        <span>
            Digital House 
        </span>
        <ul className='listEducation'>
          <li>Feb 2022 / Ago 2022</li>
        </ul>
        <h1 className='description'>Arquitecto</h1>
        <span>
            Universidad de Palermo 
        </span>
        <ul className='listEducation'>
          <li>Jun 2004 / Feb 2011</li>
        </ul>
        <h1 className='description'>Inglés</h1>
        <ul className='listEducation'>
          <li>Lectura - Intermedio</li>
          <li>Oral - Básico</li>
          <li>Escritura - Básico</li>
        </ul>
        <div className='buttonAboutContainer'>
        <Link to="/about">
            <button type="button" class="btn-neon">Volver</button>
        </Link>
        <Link to="/experience">
            <button type="button" class="btn-neon">Cargar Experiencia</button>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default Education