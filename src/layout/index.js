import React from 'react'
import {Link} from "react-router-dom"
import './Header.scss'
import * as avatar from '../assets/images/oval.png'
import * as logo from '../assets/images/thoughtworks-logo.png'

const MenuItem = ({url, name}) => (
    <div className="menuitem">
        <Link to={url}>
            {name}
        </Link>
    </div>
)

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

const Header = ({left_part, right_part}) => {
    return (
        <div className="header">
            <div className="header--left">
                {left_part.map(component => component)}
            </div>
            <div className="header--right">
                {right_part.map(component => component)}
            </div>
        </div>
    )
}


export default () => (
    <Header
        left_part={
            [
                <Logo img={logo} size={{
                    height: '38px',
                    width: '170px'
                }}/>,
                <Menu>
                    <MenuItem name="账户" url="/account"/>
                    <MenuItem name="训练营" url="/camp"/>
                    <MenuItem name="任务卡" url="/task-card"/>
                </Menu>
            ]
        }
        right_part={
            [
                <Avatar img={avatar}/>
            ]
        }>
    </Header>
)