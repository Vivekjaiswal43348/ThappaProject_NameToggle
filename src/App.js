import React, { useState } from 'react';
import './myName.css';

const App = () =>{
  console.log('useState:', useState);
  // let myName = 'Hello I am Vivek Jaiswal...!';
  const [myName, setMyName] = useState('Hello I am Vivek ...!');
  const [toggleName, setToggleName] = useState(1);
  const changeMyName = () =>{
    if(toggleName === 1){
      setToggleName(2);
      setMyName('I am Learning Hooks....!');
    } else if(toggleName === 2) {
      setToggleName(3);
      setMyName('Hooks are special functions..!');
    } else {
      setToggleName(1);
      setMyName('This is useState example!');
    }
  } 
  return (
    <div className='container'>
    <div className='name-display'>
      <h2>{`${toggleName}. ${myName}`}</h2></div>
    <button className='btn-name' onClick={changeMyName}>Change My Name</button>
    </div>
  )
}

export default App;