import React from 'react';
import './home.scss';

import HomeHeader from '../../components/home-header/HomeHeader'
import CardList from '../../components/card-list/CardList'

const Home = () => (
  <div className='home'>
    <h2>home page</h2>
    <HomeHeader />
    <CardList />
  </div>
)

export default Home;