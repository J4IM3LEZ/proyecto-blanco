import React, { useState } from 'react'
import FormJob from './components/FormJob/FormJob'
import './App.css'
import './index.css'
import './components/FormJob/FormJob.css'
import FormView from './components/FormView/FormView'

function App() {
  const [name, setName]=useState('');
  const [age, setAge]=useState('');
  const [colorlike, setColorlike]=useState('');

  return (
    <div className='container'>
      <div className='center'>
        <FormJob
          onNameChange={setName}
          onAgeChange={setAge}
          onColorlikeChange={setColorlike}
        />
        <FormView 
         name={name}
         age={age}
         colorlike={colorlike}
        />
      </div>
    </div>
  );
}

export default App;
