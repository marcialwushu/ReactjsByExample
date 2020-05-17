import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Header />

        <Footer />
    </div>
  );
}

export default App;
