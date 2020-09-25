import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { firebaseConfig } from './firebase'
import Checkout from './components/checkout/Checkout';


function App() {

  console.log({ firebaseConfig })

  return (
    // BEM
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
