import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Foo from '../components/Foo';
import AddCamp from "../pages/add-camp/AddCamp";

export default () => (
  <BrowserRouter>
    <Route exact path='/foo' component={Foo}/>
    <Route exact path='/add-camp' component={AddCamp}/>
  </BrowserRouter>
)

