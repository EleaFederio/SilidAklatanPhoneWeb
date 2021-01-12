import {Button, Card, Image} from "react-bootstrap";

const {Component} = require("react");

class BookList extends Component{



    render() {
        return (
            <Card className={'mb-2'}>
                <Card.Header>
                    <h3>{this.props.title}</h3>
                </Card.Header>
                <Card.Body>
                    <Image src={'https://veiindia.com/wp-content/uploads/2018/11/book-image-not-available.png'} />
                    <p>Author: <b>{this.props.author}</b></p>
                    <p>Publisher: <b>{this.props.publisher}</b></p>
                    <p>Pages: <b>{this.props.pages}</b></p>
                    <p>Year: <b>{this.props.year}</b></p>
                    <Button variant={'info'}>Borrow</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default BookList;