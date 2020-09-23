import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { firebaseConfig } from './firebase'


function App() {

  console.log({ firebaseConfig })

  return (
    // BEM
    <div className="App">
      {/* <h1>Hello Roberto. Let's build the Amazon clone </h1><span>🚗</span> */}
      {/* Header */}
      <Header />
      {/* Home */}
      <Home />
      {/* Footer */}
    </div>
  );
}

export default App;
