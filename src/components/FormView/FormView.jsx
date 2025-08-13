import React from'react'

function FormView({ name, age, colorlike }){

    return(
        <div>
            <h1>FormView</h1>
            <h1> {name} </h1>
            <h1> {age} </h1>
            <h1> {colorlike} </h1>
        </div>
    );
};

export default FormView;