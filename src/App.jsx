import React from 'react';
import './App.css';
import Body from './body';
import Header from './header';
import Footer from './Footer';
import Gallery from './Gallery';
import Fixed from './Fixed';
import Nav from './nav';

function App() {






  return (
    <div>
      <Fixed/>
      <span id="main"></span>
      <Header />
      <Nav/>
      
      <Body />
      <span id="photos" ></span>
      <Gallery />
      <Footer />


    </div>
  )
}

export default App