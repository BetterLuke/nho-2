import React, { Component } from 'react'
import Header from "./layout"
import Routes from './routes'
import 'antd/dist/antd.css'
import {BrowserRouter} from 'react-router-dom'

const Content = (props) => (
    <div className="content">
        {props.children}
    </div>
)

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
