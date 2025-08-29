import React, { useState } from 'react'
import './App.css'
import './index.css'
import './components/FormJob/FormJob.css'
import FormJob from './components/FormJob/FormJob'
import FormView from './components/FormView/FormView'
import HomeScreen from './components/HomeScreen/HomeScreen.Jsx'


function App() {
  const [submittedName,setSubmittedName] = useState('');
  const [submittedAge,setSubmittedAge] = useState('');
  const [submittedColorLike,setSubmittedColorLike] = useState('');
  const [isSubmitted, setIsSubmitted]=useState(false);
  const [showForm, setShowFrom]=useState(false)

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

  const handleShowForm = () =>{
    setShowFrom(true);

  }

  const handleBlackToHome = () =>
    setShowFrom(false);
    setIsSubmitted(false);
    handleReset();

  return (
    <div className='container'>
      <div className='center'>
          {!isSubmitted ?(
            <HomeScreen onShowForm={handleShowForm}/>
          ):( 
            !isSubmitted ?(
              <FormJob
                onFormSubmit={handleFormSubmit}
                onBack={handleBlackToHome}
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
