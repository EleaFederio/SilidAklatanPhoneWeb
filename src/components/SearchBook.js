import {Button, Container, Form, FormControl, InputGroup, Jumbotron, Row} from "react-bootstrap";
import {axios} from '../lib/axios'
import BookList from "./BookList";
const {Component} = require("react");

class SearchBook extends Component{

    constructor(props) {
        super(props);

        this.state = {
            searchField: {
                title: ''
            },
            currentURL: 'api/books/search',
            data: [],
            totalResult: 0,
            currentPage: 0,
            nextPageUrl: '',
            totalPages: 0,
            counter: 0,
            displayNoResult: false,
            noMatch: false
        }
    }

    componentDidMount() {
        document.title = "BUGC e-Lib - Book Search"
    }

    searchBookHandler = (e) => {
        e.preventDefault();
        this.searchABook()
    }


    searchABook = () => {
        if(this.state.searchField.title !== ''){
            axios.post(this.state.currentURL, this.state.searchField)
                .then(response => {
                    this.setState({
                        currentPage: response.data.current_page,
                        data: [...response.data.data],
                        totalResult: response.data.total,
                        nextPageUrl: response.data.next_page_url,
                        totalPages: response.data.last_page,
                        displayNoResult: false,
                        noMatch: false
                    })
                    if(response.data.data.length === 0){
                        this.setState({
                            noMatch: true
                        })
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }else{
            this.setState({
                currentPage: 0,
                data: [],
                totalResult: 0,
                nextPageUrl: '',
                totalPages: 0,
                displayNoResult: true
            })
        }
        console.log(this.state)
    }

    changeSearchValue = (e) => {
        this.setState({
            searchField: {
                title: e.target.value
            }
        })
    }

    showMore = () => {
        axios.post(this.state.nextPageUrl, this.state.searchField)
            .then(response => {
                this.setState({
                    currentPage: response.data.current_page,
                    data: [...response.data.data],
                    totalResult: response.data.total,
                    nextPageUrl: response.data.next_page_url,
                    totalPages: response.data.last_page
                })
                window.scrollTo(0,0);
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const booksDataExist = this.state.data;
        const searchPhrase = this.state.searchField.title;
        return(
            <Container className={'mt-4 mb-4'} >
                <Form onSubmit={this.searchBookHandler} style={{marginTop: '8vh'}}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Enter Book Title..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={this.changeSearchValue}
                            value={searchPhrase}
                        />
                        <InputGroup.Append>
                            <Button type={"submit"} variant="outline-secondary">SEARCH</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
                {
                     this.state.data.length !== 0 ? (<p className={'mt-6'}>Page: {this.state.currentPage}/{this.state.totalPages}</p>) : null
                }

                {
                    this.state.displayNoResult === true || this.state.noMatch ? (<Jumbotron><h3>No Result</h3></Jumbotron>) : null
                }

                <Row>
                    {
                        booksDataExist && this.state.data.map((bookData) => (
                            <BookList key={bookData.id} title={bookData.title} author={bookData.author} publisher={bookData.publisher} year={bookData.year} pages={bookData.pages} />
                        ))
                    }
                </Row>

                {
                    this.state.data.length === 0 ? null : (<Button disabled={!this.state.nextPageUrl } size={'sm'} variant={'secondary'} onClick={this.showMore}>{this.state.nextPageUrl === null ? 'Nothing Follows' : 'Show More'}</Button>)
                }
            </Container>
        )
    }
}

export default SearchBook;