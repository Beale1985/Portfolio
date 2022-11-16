import React from 'react';
import pastillaRoja from "../img/pastillaRoja.png";
import pastillaAzul from "../img/pastillaAzul.png";
import { HashLink } from 'react-router-hash-link';
import '../App.css';

function Home() {
return (
    <div className='containerMonitor'>
        <h1 className='firstText'>¡Hola Mundo!</h1>
        <h1 className='secondText'>Mi nombre es Alexis</h1>
        <h1 className='fifthText'>elije la pildora azul si quieres conocerme</h1>
        <h1 className='sixthText'>o la roja para seguir en la Matrix...</h1>
        <br></br>
        <div className='pildors'>
        <HashLink smooth to={"/about" }>
            <img src={pastillaAzul} style={{width:"150px"}} alt="Pastilla Azul" />
        </HashLink>
        <HashLink smooth to={"/fail" }>   
            <img src={pastillaRoja} style={{width:"150px"}} alt="Pastilla Azul" />
        </HashLink> 
        </div>
    </div>
    )
}


export default Home