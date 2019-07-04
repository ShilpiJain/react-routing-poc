import React, { Component } from 'react'
import './App.css';
import Navbar from "./component/navbar";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (     
      <BrowserRouter>      
        <div className="container">
          <header className="App-header">
            <Navbar/>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
          </header>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;