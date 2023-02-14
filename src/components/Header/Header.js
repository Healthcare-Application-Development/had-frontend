import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css'

function Header() {
    return (
        <Navbar expand="lg" className='navbar-bg' >
          <Navbar.Brand className='navbar-brand-style'>{process.env.REACT_APP_NAV_BRAND}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='nav-collapse-style'>
            <Nav className='nav-style'>
              <Nav.Link href="#logout" className='nav-link-style'>
                <img src={process.env.PUBLIC_URL + `/${process.env.REACT_APP_NAV_LOGOUT_IMG}.png`} alt={process.env.REACT_APP_NAV_LOGOUT_IMG} className='nav-img-style'/>
              </Nav.Link>
              <Nav.Link href="#settings" className='nav-link-style'>
              <img src={process.env.PUBLIC_URL + `/${process.env.REACT_APP_NAV_SETTINGS_IMG}.png`} alt={process.env.REACT_APP_NAV_SETTINGS_IMG} className='nav-img-style'/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
}

export default Header;