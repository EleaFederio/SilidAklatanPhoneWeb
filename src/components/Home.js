import {Component} from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import BugcLogo from '../images/bugcTransparentLogo.png';
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/all";

class Home extends Component{
    render() {
        return(
            <Container>
                <Row style={{marginTop: '15vh'}}>
                    <Col>
                    </Col>
                    <Col>
                        <Image src={BugcLogo} rounded thumbnail style={{border: '0px'}} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <p className={'text-center mb-0'}>Bicol University Gubat Campus</p>
                <p className={'text-center'}><b>LIBRARY</b></p>
                <Row>
                    <Col className={'text-center'}>
                        <Button as={Link} to={'/book/search'} variant={"outline-secondary"} className={'center-text'} size={'lg'}><FaSearch/>  SEARCH BOOKS</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;