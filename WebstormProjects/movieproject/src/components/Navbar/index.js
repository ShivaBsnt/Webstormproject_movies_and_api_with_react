import React from 'react';

import {Navbar,Nav,Container,Form,FormControl} from 'react-bootstrap';
import {NavWrapper} from './style';
import {Link} from 'react-router-dom'
import {FaSearch} from "react-icons/fa";

export default function Navbars () {
    return (
        <NavWrapper>
            <Container>
        <Navbar  expand="lg">
          <Link to='/'> <img src='/images/logo.svg' alt='logo'/> </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <FaSearch/>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                </Form>
                <Nav className="ml-auto">
                    <Link  to='/'  class='nav-link'>Home</Link>
                    <Link to='/movies' class='nav-link'>TV show</Link>

                </Nav>

            </Navbar.Collapse>
        </Navbar>
            </Container>
        </NavWrapper>
    )

}