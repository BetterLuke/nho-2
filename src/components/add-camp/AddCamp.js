import React from 'react';
import './add-camp.scss';

class AddCamp extends React.Component {
  handleAdd() {
    
  }
  
  render() {
    return (
      <div className='add-camp' onClick={()=>this.handleAdd()}>
        <div className="add-icon"></div>
        <span className='add-text'>创建训练营</span>
      </div>
    )
  }

}

export default AddCamp;