import React from'react'

function FormView({ name, age, colorlike,isSubmitted }){

    return(
        <div>
            <h1>FormView</h1>
            {isSubmitted ?(
                <>
                <h1>Datos enviados</h1>
                <h1> Nombre: {name} </h1>
                <h1> Edad: {age} </h1>
                <h1> Color Favorito{colorlike} </h1>
                </>
            ):(
                <p>Complete el formulario y presiona "Eviar Formulario" para ver los datos</p>
            )}
        </div>
    );
};

export default FormView;