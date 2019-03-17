import React from 'react';
import HomeHeader from '../../components/home-header/HomeHeader'
import CardList from '../../components/card-list/CardList'

const Home = props => (
  <div className='home'>
    <HomeHeader />
    <CardList history={props.history}/>
  </div>
)

export default Home;