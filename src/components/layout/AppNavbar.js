import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AppNavbar extends Component {
  render() {
    return (
      <div className='navbar navbar-expand-md navbar-dark bg-primary mb-4'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            Tanpopo Ramen
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarMain'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarMain'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  Menu
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AppNavbar;
