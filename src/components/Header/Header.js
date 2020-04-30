import React, {Component} from 'react';
import './Header.css';
import { BrowserRouter, Link} from 'react-router-dom';


class Header extends Component {
    render() {
        return ( 
          <nav className="navbar is-transparent">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">MyCompany</a>
              <div className="navbar-burger burger" >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu" >
              <div className="navbar-start">
                <div className="navbar-item has-dropdown is-hoverable"></div>
                </div>

              <div className="navbar-end">


                <BrowserRouter>
                  <Link to="/" className="nav-item ">Home</Link>
                  <Link to="/faq" className="nav-item">Feature</Link>
                  <Link to="/faq" className="nav-item">About</Link>
                  <Link to="/faq" className="nav-item">FAQ</Link>
                </BrowserRouter>
              

                
                <div className="navbar-item">
                  <div className="field is-grouped">

                    <p className="control">
                      <a className="button is-primary is-outlined" href="https://bulma.io">
                        <span className="icon">
                          <i className="fas fa-download"></i>
                          </span>
                          <span>Join Now</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        </nav>
        );
    }
    
}

export default Header;
