import React, {Component} from 'react';
import './Header.css';
import { BrowserRouter, Link} from 'react-router-dom';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState(prevState =>  ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
    render() {

      let menuActive = this.state.isToggleOn ? 'is-active' : '';

        return ( 
          <nav className="navbar is-transparent">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://github.com/marcialwushu/ReactjsByExample">MyCompany</a>
              
              <div className={'navbar-burger burger is-active'+ menuActive}  onClick={this.handleClick}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu" >
              <div className="navbar-start">
                <div className="navbar-item has-dropdown is-hoverable"></div>
                </div>

              <div className={'navbar-end '+menuActive} >



                <BrowserRouter>
                  <Link to="/" className="navbar-item ">Home</Link>
                  <Link to="/faq" className="navbar-item">Feature</Link>
                  <Link to="/faq" className="navbar-item">About</Link>
                  <Link to="/faq" className="navbar-item">FAQ</Link>
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
