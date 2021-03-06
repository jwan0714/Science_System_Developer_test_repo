import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,FormControl,Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

class Navbar_1 extends Component {

    render() {
return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Simple Header</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success" style={{right:"100px"}}>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
);
    }
}
export default Navbar_1;