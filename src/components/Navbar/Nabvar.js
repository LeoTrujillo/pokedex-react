import React, { Component } from 'react';
import logo from '../../images/logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar is-info'>
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} alt="Pokedex with react" />
            <span>Pokedex</span>
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;