import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import MatrixEffect from "./MatrixEffect.js";

function Experience() {
  return (
    <div className='container'>
    <MatrixEffect />
    <div className='containerMonitor about'>
        <h1 className='description'>Full Stack Developer</h1>
        <span>Al finalizar el curso de Full Stack Developer en Digital House decidí dedicarme fulltime al desarrollo de sitios web. Comencé diseñando una página de prsentación de productos
            y tratamientos para un centro de estética. En la actualidad me encuentro desarrollando un sitio 
            que permite realizar búsquedas de marcas y productos de estética para el mismo cliente.
            Aprobé el Prep Course de SoyHenry y tengo fecha de inicio del Bootcamp para 05/12/2022. 
        </span>
        <Row className='listExperience'>
          <Col className='col-md-3'>-JavaScript-</Col>
          <Col className='col-md-3'>-NodeJs-</Col>
          <Col className='col-md-3'>-MySql-</Col>
          <Col className='col-md-3'>-React Js-</Col>
          <Col className='col-md-3'>-Bootstrap-</Col>
          <Col className='col-md-3'>-GitHub-</Col>
          <Col className='col-md-3'>-HTML-</Col>
          <Col className='col-md-3'>-Css-</Col>
        </Row>
        <div className='buttonAboutContainer'>
        <Link to="/about">
            <button type="button" class="btn-neon">Volver</button>
        </Link>
        <Link to="/experienceArq">
            <button type="button" class="btn-neon">Experiencia Arquitecto</button>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default Experience