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

  const [submittedName,setSubmittedName] = useState('');
  const [submittedAge,setSubmittedAge] = useState('');
  const [submittedColorLike,setSubmittedColorLike] = useState('');
  const [isSubmitted, setIsSubmitted]=useState(false);

  const handleFormSubmit = (name, age ,colorlike) =>{
    setSubmittedName(name);
    setSubmittedAge(age);
    setSubmittedColorLike(colorlike);
    setIsSubmitted(true)

  }

  const handleReset = () =>{
    setIsSubmitted(false);
    setSubmittedName('');
    setSubmittedAge('');
    setSubmittedColorLike('');
  }

  return (
    <div className='container'>
      <div className='center'>
        {!isSubmitted ?(
        <FormJob
          onFormSubmit={handleFormSubmit}
        />
        ):(
        <FormView 
         name={submittedName}
         age={submittedAge}
         colorlike={submittedColorLike}
         isSubmitted={isSubmitted}
         onReset={handleReset}
        />
        )};
      </div>
    </div>
  );
}

export default App;
