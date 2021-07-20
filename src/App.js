import React from 'react';
import './App.css';
import Header from './components/Header';
import Interactive from './components/Interactive';
import Showcase from './components/Showcase';
import CreationsDesktop from './components/CreationsDesktop';
import CreationsMobile from './components/CreationsMobile';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Showcase></Showcase>
      <Interactive></Interactive>
      <CreationsDesktop></CreationsDesktop>
      <CreationsMobile></CreationsMobile>
      <Footer></Footer>
    </div>
  );
}

export default App;
