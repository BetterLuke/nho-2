import React, { Component } from 'react';
import { string, func, node } from 'prop-types';

import './Cart.scss';

class Cart extends Component {
    static propTypes = {
        title: string,
        description: string,
        onClose: func,
        children: node,
    }

    render() {
        const {title, description, onClose, children} = this.props;
        return (
            <div className='cart-container'>
                <div className="cart-header">
                    {onClose && (
                        <span onClick={onClose}/>
                    )}
                    {title && (
                        <div className="cart-header_title">
                            {title}
                        </div>
                    )}
                </div>
                <div className="cart-content">
                    {description && (
                        <div className="cart-content_desc">
                            {description}
                        </div>
                    )}
                    {children && (
                        <div className="cart-content_children">
                            {children}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Cart;