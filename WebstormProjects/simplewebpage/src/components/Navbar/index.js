import React from "react";
import {Navbar,Form,FormControl,Nav,Container} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import {NavWrapper} from "./style";


export default function Navbars() {
    return(
        <NavWrapper>
        <Container>
            <Navbar  expand="lg">
                <Link to='/'> <img src='https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png' alt='logo'  style={{height: '70px'}}/> </Link>
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