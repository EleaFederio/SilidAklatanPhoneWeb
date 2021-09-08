import {Component} from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            navWindow: false,
        }
    }

    //Close the navbar after an nav is clicked
    toggleNavBar = () => {
        this.setState({
            navWindow: this.state.navWindow ? false : true
        })
        // console.log(this.state.navWindow)
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" expanded={this.state.navWindow} fixed={'top'} variant="dark">
                <Navbar.Brand as={Link} to={'/'} >BUGC Library</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={this.toggleNavBar} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {
                            this.props.loggedIn ?
                                (
                                    <>
                                        {/*<Nav.Link as={Link} to={'/qr_scanner'}>QR Login</Nav.Link>*/}
                                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Request a Book</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Library Evaluation</NavDropdown.Item>
                                        </NavDropdown>
                                    </>
                                ) :
                                ( null )
                        }
                        <Nav.Link as={Link} to={'/guidelines'} onClick={this.toggleNavBar}>Guidelines</Nav.Link>
                        <Nav.Link as={Link} to={'/about'} onClick={this.toggleNavBar}>About</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            this.props.loggedIn ?
                                ( <Nav.Link as={Link} to={'/account'} onClick={this.toggleNavBar}>ACCOUNT</Nav.Link> ) :
                                ( <Nav.Link as={Link} to={'/login'} onClick={this.toggleNavBar}>LOGIN</Nav.Link> )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => {
    return{
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps)(Header);