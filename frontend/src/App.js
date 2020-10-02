import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Create from './pages/Create'


function App() {

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/create' component={Create} />
      </Switch>
    </div >
  )
}

export default App;
