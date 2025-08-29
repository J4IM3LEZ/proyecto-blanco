import React from'react'
import './FormView.css'

function FormView({ name, age, colorlike, isSubmitted, onReset }){

    return(
        <div className='formView'>
            <div className='header'>
                <h1>Datos Enviados</h1>
            </div>

            <div className='data-container'>               
                <div className='data-item'>
                    <span className='data-label'> Nombre:</span>
                    <span className='data-value'>{name}</span>
                </div>

                 <div className='data-item'>
                    <span className='data-label'>Edad:</span>
                    <span className='data-value'>{age}</span>
                </div>
                
                <div className='data-item'>
                    <span className='data-label'> Color Favorito:</span>
                    <span className='data-value'>{colorlike}</span>
                </div>
            </div>

            <div className='actions'>
                <button
                    className='reset-button'
                    onClick={onReset}
                >
                    Nuevo Formulario
                </button>
            </div>  
        </div>  
    )  
    
};


export default FormView;