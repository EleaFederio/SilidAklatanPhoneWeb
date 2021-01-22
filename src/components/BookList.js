import {Button, Card, Col} from "react-bootstrap";

const {Component} = require("react");

class BookList extends Component{



    render() {
        return (
            <Col lg={4} md={6} xs={12} className={'d-flex align-items-stretch'}>
                <Card className={'mb-2 flex-fill'}>
                    <Card.Img src={'https://veiindia.com/wp-content/uploads/2018/11/book-image-not-available.png'} />
                    <Card.Body>
                        <p className={'text-center mb-0 mt-3'}>Title</p>
                        <p className={'text-center mt-0'}><b>{this.props.title.substring(0, 40)}</b></p>
                        <p className={'text-center mb-0'}>Author</p>
                        <p className={'text-center mt-0'}><b>{this.props.author}</b></p>
                        <p>Publisher: <b>{this.props.publisher}</b></p>
                        <p>Pages: <b>{this.props.pages}</b></p>
                        <p>Year: <b>{this.props.year}</b></p>
                        <Button variant={'info'}>Borrow</Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default BookList;