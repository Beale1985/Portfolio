import React from 'react';
import { Link } from 'react-router-dom';
import Flash from 'react-reveal/Flash';
import MatrixEffect from "./MatrixEffect.js";

function Fail() {
  return (
    <div className='container'>
    <MatrixEffect />
    <div className='fail'>
      <Flash>
        <h1 className='message'>
            System Failure
        </h1>
      </Flash>
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