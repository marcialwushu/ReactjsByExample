import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Header />
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/faq" component={Faq} />
                </Switch>
            </BrowserRouter>
            
        <Footer />
    </div>
  );
}

export default App;
