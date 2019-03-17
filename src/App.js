import React, { Component } from 'react'
import { Header, Content } from "./layout"
import Routes from './routes'
import 'antd/dist/antd.css'
import {BrowserRouter} from 'react-router-dom'



class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Header />
            <Content>
                <Routes />
            </Content>
        </BrowserRouter>
    );
  }
}

export default App;
