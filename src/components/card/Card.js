import React, { Component } from 'react';
import { string, func, node } from 'prop-types';

import './Card.scss';

class Card extends Component {
    static propTypes = {
        title: string,
        description: string,
        onDelete: func,
        children: node,
    }

    render() {
        const {title, description, onDelete, children} = this.props;

        return (
            <div className='card'>
                {
                    children ? 
                    <div className="card-children">{children}</div> :
                    <div className="card-content">
                        <div className="card-header">
                            {onDelete && (
                                <span className="close-icon" onClick={onDelete} title='删除'/>
                            )}
                            {title && (
                                <span className="card-header_title">
                                    {title}
                                </span>
                            )}
                        </div>
                        <div className="card-container" title={description}>
                            {description}
                        </div>
                    </div> 
                }
            </div>
        )
    }
}

export default Card;