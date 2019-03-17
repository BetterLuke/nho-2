import React from 'react'
import {Link} from "react-router-dom"
import './Header.css'

export const Header = () => (
    <div className="header">
        <div className="header__container">
            <Link to='/account'>账户</Link>
            <Link to='/'>训练营</Link>
            <Link to='/task-card'>任务卡</Link>
        </div>
    </div>

)