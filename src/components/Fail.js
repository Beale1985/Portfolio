import React from 'react';
import { Link } from 'react-router-dom';
import MatrixEffect from "./MatrixEffect.js";

function Fail() {
  return (
    <div className='container'>
    <MatrixEffect />
    <div className='fail'>
      
        <h1 className='message'>
            System Failure
        </h1>
      
        <Link to="/about">
            <button type='button' className='btn-neon btn-fail'>
                Volver
            </button>
        </Link>
    </div>
    </div>
  )
}

export default Fail