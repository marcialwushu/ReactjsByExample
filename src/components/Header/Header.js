import React, {Component} from 'react';
import './Header.css';
import { BrowserRouter, Link} from 'react-router-dom';


class Header extends Component {

  // set active state for hamburger
  

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = { active : false }
  }

  handleClick() {
    const { active } = this.state;
     this.setState({ active: !active }); 
  }
    render() {

    
        return ( 
          <nav className="navbar is-transparent">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://github.com/marcialwushu/ReactjsByExample">MyCompany</a>
              
              <div className={'navbar-burger burger '} active={this.state.active && 'active' }  onClick={this.handleClick} >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu" >
              <div className="navbar-start">
                <div className="navbar-item has-dropdown is-hoverable"></div>
                </div>

              <div className={'navbar-end '}  onClick={this.handleClick}>
                <BrowserRouter>
                  <Link to="/" className="navbar-item ">Home</Link>
                  <Link to="/faq" className="navbar-iem ">Feature</Link>
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
