import React, { Component } from 'react'
import {Header} from "./layout"
import Routes from './routes'
import "antd/dist/antd.css"
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Header />
            <div className="content">
                <Routes />
            </div>
        </BrowserRouter>

    );
  }
}

export default App;
