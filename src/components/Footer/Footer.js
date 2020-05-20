import React from 'react';
import './Footer.css';


const Footer = () =>  {
    
    return ( 
        <div className="App">
        <footer className="footer is-primary">
          <div className="container">
            <div className="column">
          <p>And this rifht is a spiffy footer, where you can put stuff.</p>
        </div>
            <div className="column has-text-right">
              <a className="icon" href="/"><i className="fab fa-facebook-square"></i></a>
              <a className="icon" href="/"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
        </div>
    );    
    
};

export default Footer;
