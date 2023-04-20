import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { constants } from '../../constants';
import { useNavigate } from 'react-router-dom';

function Header() {
    const user = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = (e) => {
      e.preventDefault();
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate("/")
    }
    return (
        <Navbar expand="lg" className='navbar-bg' >
          <Navbar.Brand className='navbar-brand-style'>{constants.REACT_APP_NAV_BRAND}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {user && <Navbar.Collapse id="responsive-navbar-nav" className='nav-collapse-style'>
            <Nav className='nav-style'>
              <Nav.Link className='nav-link-style' onClick={(e) => logout(e)}>
                <img src={process.env.PUBLIC_URL + `/${constants.REACT_APP_NAV_LOGOUT_IMG}.png`} alt={constants.REACT_APP_NAV_LOGOUT_IMG} className='nav-img-style'/>
              </Nav.Link>
              {/* <Nav.Link href="#settings" className='nav-link-style'>
              <img src={process.env.PUBLIC_URL + `/${constants.REACT_APP_NAV_SETTINGS_IMG}.png`} alt={constants.REACT_APP_NAV_SETTINGS_IMG} className='nav-img-style'/>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>}
      </Navbar>
    );
}

export default Header;