import React from 'react'
import "./style.scss";
import Herobanner from './herobanner/Herobanner';
import Trainding from './trainding/Trainding';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';


const Home = () => {
  return (
    <div className='homePage'>
      <Herobanner/>
      <Trainding />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home
