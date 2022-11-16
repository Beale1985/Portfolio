import React from 'react';
import { Link } from 'react-router-dom';

function Fail() {
  return (
    <div className='fail'>
        <h1 className='message'>
            System Failure
        </h1>
        <Link className='buttonFailContainer' to="/about">
            <button type="buttonFail">
                Click Me!
            </button>
        </Link>
    </div>
  )
}

export default Fail