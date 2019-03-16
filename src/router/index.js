import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Foo from '../components/Foo'

export default () => (
  <BrowserRouter>
    <Route exact path='/foo' component={Foo}/>
  </BrowserRouter>
)

