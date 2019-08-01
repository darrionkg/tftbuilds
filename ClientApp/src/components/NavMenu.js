import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class NavMenu extends React.Component {
  constructor() {
    super();
  }

    render() {

      return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">TFT Builds</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="whiteText" href="/team">Team Builder</Nav.Link>
              <Nav.Link className="whiteText" href="/tierlist">Tier List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
  )
}
}