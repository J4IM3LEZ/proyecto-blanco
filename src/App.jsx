import React, { useState } from 'react'
import './App.css'
import './index.css'
import './components/FormJob/FormJob.css'
import FormJob from './components/FormJob/FormJob'
import FormView from './components/FormView/FormView'
import HomeScreen from './components/HomeScreen/HomeScreen'


function App() {
  const [submittedName,setSubmittedName] = useState('');
  const [submittedAge,setSubmittedAge] = useState('');
  const [submittedColorLike,setSubmittedColorLike] = useState('');
  const [isSubmitted, setIsSubmitted]=useState(false);
  const [showForm, setShowForm]=useState(false)

  const handleFormSubmit = (name, age ,colorlike) => {
    setSubmittedName(name);
    setSubmittedAge(age);
    setSubmittedColorLike(colorlike);
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedName('');
    setSubmittedAge('');
    setSubmittedColorLike('');
  }

  const handleShowForm = () => {
    setShowForm(true);

  }

  const handleBackToHome = () => {
    setShowForm(false);
    setIsSubmitted(false);
    handleReset();
  }

  return (
    <div className='container'>
      <div className='center'>
          {!showForm ?(
            <HomeScreen onShowForm={handleShowForm}/>
          ):( 
            !isSubmitted ?(
              <FormJob
                onFormSubmit={handleFormSubmit}
                onBack={handleBackToHome}
              />
            ):(
              <FormView 
                name={submittedName}
                age={submittedAge}
                colorlike={submittedColorLike}
                isSubmitted={isSubmitted}
                onReset={handleReset}
                />
              )
            )}
      </div>
    </div>
  );
}

export default App;
