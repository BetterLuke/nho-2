import React from 'react';
import { Route } from "react-router-dom"
import AddCamp from "./pages/add-camp/AddCamp";
import Home from "./pages/home/Home"
import {AccountPage} from "./pages/account"
import {TaskCardPage} from  "./pages/task-card"

export default () => (
    <div>
        <Route exact path='/camp' component={Home}/>
        <Route exact path='/task-card' component={TaskCardPage}/>
        <Route exact path='/account' component={AccountPage}/>
        <Route exact path='/add-camp' component={AddCamp}/>
    </div>
)

