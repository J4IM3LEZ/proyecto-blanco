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

  const [submittedName,setsubmittedName] = useState('');
  const [submittedAge,setsubmittedAge] = useState('');
  const [submittedColorLike,setsubmittedColorLike] = useState('');
  const [isSubmitted, setIsSubmitted]=useState(false);

  const handleFormSubmit = (name, age ,colorlike) =>{
    setsubmittedName(name);
    setsubmittedAge(age);
    setsubmittedColorLike(colorlike);
    setIsSubmitted(true)

  }


  return (
    <div className='container'>
      <div className='center'>
        <FormJob
          onFormSubmit={handleFormSubmit}
        />
        <FormView 
         name={submittedName}
         age={submittedAge}
         colorlike={submittedAge}
         isSubmitted=(isSubmitted)
        />
      </div>
    </div>
  );
}

export default App;
