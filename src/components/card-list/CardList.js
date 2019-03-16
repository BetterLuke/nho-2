import React from 'react';
import AddCamp from '../add-camp/AddCamp';
import './card-list.scss';


class CardList extends React.Component {
  
  componentDidMount() {
    fetch('10.205.22.91:8080/camps').then(res=>res.json).then(json=>{
      console.log(json.data)
    })
  }
  
  render () {
    return (
      <div className='card-list'>
        <AddCamp />
        <AddCamp />
        <AddCamp />
      </div>
    )
  }
 
}

export default CardList