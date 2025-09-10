import React from 'react'
import './HomeScreen.css'

function HomeScreen({onShowForm}){
    
    return(
        <div className='homeScreen'>
            <div className='header'>
                <h1> PaginaDeInicio🔍</h1>
            </div>
            
            <div className='actions'>
                <button 
                    className='primary-button'
                    onClick={onShowForm}
                >
                    Formulario
                </button>    
            </div>    
        </div>
    )
};

export default HomeScreen;