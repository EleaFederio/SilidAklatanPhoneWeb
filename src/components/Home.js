import {Component} from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import BugcLogo from '../images/bugcTransparentLogo.png';
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/all";

class Home extends Component{

    render() {
        return(
            <Container>
                {/*<Carousel style={{marginTop: '15vh'}}>*/}
                {/*    <Carousel.Item interval={1000}>*/}
                {/*        <img*/}
                {/*            className="d-block w-100"*/}
                {/*            src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"*/}
                {/*            alt="First slide"*/}
                {/*        />*/}
                {/*        <Carousel.Caption>*/}
                {/*            <h3>First slide label</h3>*/}
                {/*            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                {/*        </Carousel.Caption>*/}
                {/*    </Carousel.Item>*/}
                {/*    <Carousel.Item interval={500}>*/}
                {/*        <img*/}
                {/*            className="d-block w-100"*/}
                {/*            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"*/}
                {/*            alt="Third slide"*/}
                {/*        />*/}
                {/*        <Carousel.Caption>*/}
                {/*            <h3>Second slide label</h3>*/}
                {/*            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                {/*        </Carousel.Caption>*/}
                {/*    </Carousel.Item>*/}
                {/*    <Carousel.Item>*/}
                {/*        <img*/}
                {/*            className="d-block w-100"*/}
                {/*            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80"*/}
                {/*            alt="Third slide"*/}
                {/*        />*/}
                {/*        <Carousel.Caption>*/}
                {/*            <h3>Third slide label</h3>*/}
                {/*            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                {/*        </Carousel.Caption>*/}
                {/*    </Carousel.Item>*/}
                {/*</Carousel>*/}

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
                <h3 className={'text-center'}><b>E</b> - LIBRARY</h3>
                <Row>
                    <Col className={'text-center mt-5'}>
                        <Button as={Link} to={'/book/search'} variant={"outline-secondary"} className={'center-text'} size={'lg'}><FaSearch/>  SEARCH BOOKS</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;