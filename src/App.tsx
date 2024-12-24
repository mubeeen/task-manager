import React from 'react';
import './App.css';
import Login from './components/Auth/Login';
import ShowUser from './components/Auth/ShowUser';

function App() {
  return (
    <div className="App">
      <Login />
      <ShowUser />
    </div>
  );
}

export default App;