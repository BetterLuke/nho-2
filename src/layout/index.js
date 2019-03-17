import React from 'react'
import {Link} from "react-router-dom"
import './index.scss'
import * as avatar from '../assets/images/oval.png'
import {withRouter} from 'react-router-dom'
import classNames from  'classnames'
import * as logo from '../assets/images/thoughtworks-logo.png'

const MenuItem = withRouter(
    (props) => (
    <div className={classNames('menuitem', {'menuitem__focus': props.location.pathname === props.url})}>
        <Link to={props.url}>
            {props.name}
        </Link>
    </div>
))

const Logo = ({img, size}) => (
    <div className="logo">
        <img src={img} alt="LOGO" style={size}/>
    </div>
)

const Menu = (props) => (
    <div className="menu">
        {props.children}
    </div>
)

const Avatar = ({img}) => (
    <div className="avatar">
        <img src={img} alt="User Photo"/>
    </div>
)

export const Header = () => {
    return (
        <div className="header">
            <div className="header--left">
                <Logo img={logo} size={{
                    height: '38px',
                    width: '170px',
                }}/>,
                <Menu>
                    <MenuItem name="账户" url="/account"/>
                    <MenuItem name="训练营" url="/"/>
                    <MenuItem name="任务卡" url="/task-card"/>
                </Menu>
            </div>
            <div className="header--right">
                <Avatar img={avatar} />
            </div>
        </div>
    )
}

export const Content = (props) => (
    <div className="content">
        {props.children}
    </div>
)