import React from 'react';
import './footer.css';
import Logo from '../../assets/Halo-Game-PNG-Picture.png'

function Footer() {

  return (
    <>
    <div>
        <footer>
        <img id='logo' src={Logo} />
            <spam>Todos os direitos reservados ©</spam>
            <spam>Desinvolvido por: Erik Gustavo</spam>
        </footer>
    </div>  
    </>
    );
}

export default Footer;