import React from 'react';
import * as RB from "react-bootstrap";
const Navbar = ({account}) => {
    return (
     <div>
      <RB.Nav className="navbar navbar-dark bg-dark shadow mb-5">
      <p className='navbar-brand my-auto'>Election Dapp</p>
       <ul className='navbar-nav'>
        <li className='nav-item text-white'>{account}</li>
       </ul>
      </RB.Nav>       
     </div>
    // <RB.Navbar bg="dark" expand="lg">
    // <RB.Container>
    // <RB.Navbar.Brand href="#home">React-Bootstrap</RB.Navbar.Brand>
    // <RB.Navbar.Toggle aria-controls="basic-navbar-nav" />
    // <RB.Navbar.Collapse id="basic-navbar-nav">
    //   <RB.Nav className="me-auto">
    //     <RB.Nav.Link href="#home">Home</RB.Nav.Link>
    //     <RB.Nav.Link href="#link">Link</RB.Nav.Link>
    //     <RB.NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //       <RB.NavDropdown.Item href="#action/3.1">Action</RB.NavDropdown.Item>
    //       <RB.NavDropdown.Item href="#action/3.2">Another action</RB.NavDropdown.Item>
    //       <RB.NavDropdown.Item href="#action/3.3">Something</RB.NavDropdown.Item>
    //       <RB.NavDropdown.Divider />
    //       <RB.NavDropdown.Item href="#action/3.4">Separated link</RB.NavDropdown.Item>
    //     </RB.NavDropdown>
    //   </RB.Nav>
    // </RB.Navbar.Collapse>
    // </RB.Container>
    // </RB.Navbar>
    )
}
export default Navbar;
