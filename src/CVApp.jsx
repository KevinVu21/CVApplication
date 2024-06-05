import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling

function App() {
  return (
    <div className="container">
      <Input />
      <Resume />
    </div>
  );
}

function Input(){
  return(<div>Input</div>)
}

function Resume(){
  return(
    <div>
      resume
    </div>
  )
}
export default App;
