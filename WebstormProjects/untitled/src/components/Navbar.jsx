import React, {Component} from "react";
import {Navbar,Nav,} from 'react-bootstrap';
import {Link} from "react-router-dom";


class NavBar extends Component{
    render(){
        return(<Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className='nav-link'> Home </Link>
                    <Link to="/about" className='nav-link'> About</Link>
                    <Link to="/services" className='nav-link'> Services</Link>

                </Nav>

            </Navbar.Collapse>
        </Navbar>);


    }


}
export default NavBar;