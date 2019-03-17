import React from 'react';
import { Route} from "react-router-dom"
import CreateCamp from "./pages/create-camp/CreateCamp";
import Home from "./pages/home/Home"
import {AccountPage} from "./pages/account"
// import {TaskCardPage} from  "./pages/task-card"

export default () => (
    <div>
        <Route exact path='/camp' component={Home}/>
        <Route exact path='/account' component={AccountPage}/>
        <Route exact path='/add-camp' component={CreateCamp}/>
    </div>
)

