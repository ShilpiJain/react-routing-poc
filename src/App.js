import React, { Component } from 'react'
import './App.css';
import Navbar from "./component/navbar";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Post from "./component/post";

class App extends Component {
  render() {
    return (     
      <BrowserRouter>      
        <div className="container">
          <header className="App-header">
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/posts/:id' component={Post}/>
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;