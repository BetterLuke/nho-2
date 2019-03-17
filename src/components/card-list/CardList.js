import React from 'react';
import AddCamp from '../add-camp/AddCamp';
import './card-list.scss';
import Card from '../../components/card/Card'

class CardList extends React.Component {
  state = {
    cardList: []
  }
  
  componentDidMount() {
    fetch('http://10.205.22.91:8080/camps').then(res=>res.json()).then(json=>{
      this.setState({
        cardList: json.data
      })
    })
  }

  handleDel(){

  }

  render () {
    return (
      <div className='card-list'>
        <Card>
          <AddCamp history={this.props.history}/>
        </Card>
        {
          this.state.cardList && this.state.cardList.map(card=>{
            return (<Card title={card.title} description={card.description} onDelete={this.handleDel}/>)
          })
        }
      </div>
    )
  }
 
}

export default CardList