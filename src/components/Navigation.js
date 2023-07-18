import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Navigation() {
  return (
    <Navbar sticky='top' bg='dark' variant='dark' className='mb-4'>
      <Container>
        <Navbar.Brand>
          Pokedex - Wiki
        </Navbar.Brand>

        <Nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Nav.Link as="div">
            <NavLink style={{textDecoration: 'none', color: 'gray'}} to='/'>All Pokemon</NavLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { Navigation };
