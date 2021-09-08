import {Component} from "react";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import BugcLogo from '../images/bugcTransparentLogo.png';
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/all";
import Footer from "./Footer";

class Home extends Component{

    componentDidMount() {
        document.title = "BUGC e-Lib - Home"
    }

    render() {
        return(
            <>
                <Container>
                    <Row style={{marginTop: '3vh'}}>
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
                        <Col className={'text-center mt-3'}>
                            <Button as={Link} to={'/book/search'} variant={"outline-secondary"} className={'center-text'} size={'lg'}><FaSearch/>  SEARCH BOOKS</Button>
                        </Col>
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        <Col lg={6} sm={12} style={{marginTop: '3vh'}}>
                            <Card>
                                <Card.Img variant={"top"} src={"https://piedmontlifestyle.com/wp-content/uploads/2019/02/WEB-bigstock-Woman-Holding-Book-For-Giving-228580477-678x381.jpg"}/>
                                <Card.Body>
                                    <Card.Title>
                                        Online Book Borrowing
                                    </Card.Title>
                                    <Card.Text>
                                        You can borrow book to BUGC Library via Google Form
                                    </Card.Text>
                                    <Button
                                        href={'https://forms.gle/ihpfhHL6H1eTDJA98'}
                                        variant={'primary'}
                                    >
                                        Borrow Book
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} sm={12} style={{marginTop: '3vh'}}>
                            <Card>
                                <Card.Img variant={"top"} src={"https://ichef.bbci.co.uk/news/976/cpsprodpb/B469/production/_114358164_screenshot2020-09-13145026.png"}/>
                                <Card.Body>
                                    <Card.Title>
                                        On-site Schedule
                                    </Card.Title>
                                    <Card.Text>
                                        Visit BUGC Library and read book that you want
                                    </Card.Text>
                                    <Button
                                        href={'https://forms.gle/jph5FreeP6Eq4R6MA'}
                                        variant={'primary'}
                                    >
                                        Set Schedule
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </>
        )
    }
}

export default Home;