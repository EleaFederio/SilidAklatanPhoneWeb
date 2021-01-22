import {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            navWindow: false
        }
    }

    toggleNavBar = () => {
        this.setState({
            navWindow: this.state.navWindow ? false : "expanded"
        })
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" fixed={'top'} variant="dark">
                <Navbar.Brand as={Link} to={'/'} >BUGC Library</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to={'/guidelines'}>Guidelines</Nav.Link>
                        <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                        {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={'/account'}>ACCOUNT</Nav.Link>
                        <Nav.Link as={Link} to={'/login'}>LOGIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;