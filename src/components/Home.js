import React from 'react';
import { HashLink } from 'react-router-hash-link';
import MatrixEffect from "./MatrixEffect.js"
import '../App.css';

function Home() {
return (
    <div className='containerHome'>
        <MatrixEffect />
        <h1 className='firstText'>¡Hola Mundo!</h1>
        <h1 className='secondText'>Mi nombre es Alexis</h1>
        <h1 className='fifthText'>elije la pildora azul si quieres conocerme</h1>
        <h1 className='sixthText'>o la roja para seguir en la Matrix...</h1>
        <br></br>
        <div className='pildors'>
        <HashLink smooth to={"/about" }>
            <button type="button" class="btn-neon-blue"></button>
        </HashLink>
        <HashLink smooth to={"/fail" }> 
            <button type="button" class="btn-neon-red"></button>  
        </HashLink> 
        </div>
    </div>
    )
}


export default Home