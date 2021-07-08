import {Button, Card, Col, Container, Row} from "react-bootstrap";

const {Component} = require("react");

class BookList extends Component{

    render() {
        return (
            <Col lg={4} md={6} xs={12} className={'d-flex align-items-stretch'}>
                <Card className={'mb-2 flex-fill'}>
                
                <img src="https://i.imgur.com/J5LVHEL.jpeg" class="rounded mx-auto d-block" alt="..."/>
                    <Card.Body>
                        <Container>
                            <p style={{marginBottom: 0}} className={'mb-0 mt-3'}>Title: <b>{this.props.title.substring(0, 40)}</b></p>
                            <p style={{marginBottom: 0}}>Author: <b>{this.props.author}</b></p>
                            {/*<p style={{marginBottom: 0}}>Publisher: <b>{this.props.publisher}</b></p>*/}
                            <Row>
                                <Col >
                                    <p>Pages: <b>{this.props.pages}</b></p>
                                </Col>
                                <Col>
                                    <p>Year: <b>{this.props.year}</b></p>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                    <Button variant={'info'}>Borrow</Button>
                </Card>
            </Col>
        );
    }
}

export default BookList;