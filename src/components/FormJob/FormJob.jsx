import React, { useState } from 'react'
import './FormJob.css'

function FormJob({onFormSubmit}){
    const [name, setName]=useState('');
    const [age, setAge]=useState('');
    const [colorlike, setColorlike]=useState('');

    const handleInputName = (event) => {
        setName(event.target.value)
        //onNameChange(event.target.value)
    };

    const handleInputAge = (event) => {
        setAge(event.target.value)
        //onAgeChange(event.target.value)
    };

    const handleInputColorlike = (event) => {
        setColorlike(event.target.value)
        //onColorlikeChange(event.target.val)
    };

    const clickSubmitform = () => {
        if(name === '' || age === '' || colorlike === ''){
            alert('Por favor, completa todos los campos');
            return;
        };
        
        onFormSubmit(name, age, colorlike)
    };  

    const handlerClickButtonSideOptions = (e) => {
        const selectedSide = e.target.dataset.value
        console.log(`Apreto el boton ${selectedSide}`)
    };

    return(
        <div className='formJob'>
        <form>
            <h1>FORM 🚀</h1>
                <p>
                <input
                    type='text' 
                    placeholder='Nombre' 
                    id='idName'
                    value={name} 
                    onChange={handleInputName}> 
                </input >
                </p>

                <p>
                <input
                    type='number'
                    placeholder='Edad'
                    id='idAge' 
                    value={age} 
                    onChange={handleInputAge}>
                </input> 
                </p>

                <p>
                <input
                    type='text'
                    placeholder='Color Favorito'
                    id='idColorFavorite' 
                    value={colorlike} 
                    onChange={handleInputColorlike}>
                </input> 

                </p>
                <button 
                    onClick={clickSubmitform}
                    type='button'>
                Enviar Formulario
                </button>
                <p>
                <button
                    id='buttonRight'
                    data-value={'Right'}
                    type='button'
                    onClick={handlerClickButtonSideOptions}>
                Derecha
                </button> 


                <button
                    id='buttonLeft'
                    data-value={'Left'}
                    type='button'
                    onClick={handlerClickButtonSideOptions}>
                Izquierda
                </button>
                </p> 

                <button
                    id='buttonReturnHome'
                    data>
                </button>
        </form>
        </div>
    );
};

export default FormJob;
