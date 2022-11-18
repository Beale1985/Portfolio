import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import MatrixEffect from "./MatrixEffect.js";

function ExperienceArq() {
  return (
    <div className='container'>
    <MatrixEffect />
    <div className='containerMonitor about'>
        <h1 className='description'>Arquitecto</h1>
        <span>
            De manera conjunta al trabajo en relación de dependecia me he desarrollado como arquitecto 
            independiente, realizando proyectos de obra, remodelaciones y direcciones de obra. Mi trabajo
            como arquitecto depende de la mano de obra que la realiza, orgulloso de contar con el mismo 
            equipo de trabajo desde hace mas de 10 años que me permite terminar las obras de manera satisfactoria.    
        </span>
        <ul className='listExperience'>
          <li>-Prefectura Naval Argentina- Mar 2015 / Actualidad</li>
          <li>-La Holando Sudamericana- Jun 2012 / Feb 2015</li>
          <li>-Tecnópolis- Jul 2011 / Abr 2012</li>
        </ul>
        <div className='buttonAboutContainer'>
        <Link to="/experience">
            <button type="button" class="btn-neon">Volver</button>
        </Link>
        <Link to="/about">
            <button type="button" class="btn-neon">Contactame</button>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default ExperienceArq