import React from 'react';
import './style.css'

function Button ({name, active, onClick}){

    return (
        <div className='containerbutton'>
            <button onClick={() => onClick(20)} className={active ? 'button':'disabledbutton'}>{name}</button>
        </div> 
        )
}

export default Button