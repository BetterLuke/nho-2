import React, { Component } from 'react';
import Home from './pages/Home'
import Routes from './router'
class App extends Component {
  render() {
    return (
      <div className="App">
       <Home />
       <Routes />
      </div>
    );
  }
}

export default App;
