import React from'react'
import './FormView.css'

function FormView({ name, age, colorlike, isSubmitted, onReset }){

    return(
        <div className='formView'>
            {isSubmitted ?(
            <>
            <div className='header'>
                <h1>Datos Enviados Exitosamente</h1>
            </div>

            <div className='data-container'>               
                <div className='data-item'>
                    <span className='data-label'> Nombre:</span>
                    <span className='data-value'>{name}</span>
                </div>

                 <div className='data-item'>
                    <span className='data-label'>Edad:</span>
                    <span className='data-value'>{age}años</span>
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
             </>
            ):(
                 <p>Complete el formulario y presiona "Eviar Formulario" para ver los datos</p>                  
            )}
        </div>        
    );
};


export default FormView;