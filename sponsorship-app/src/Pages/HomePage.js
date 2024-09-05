import React from 'react';
import Banner from '../Components/Banner';
import NavBar from '../Components/NavBar';
import './HomePage.css'; 
import store from '../Images/sponsorship.jpg'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <img src={store} style={{width:"100%"}} alt='store banner' />
      <Banner />
      </div>
  );
};

export default HomePage;
