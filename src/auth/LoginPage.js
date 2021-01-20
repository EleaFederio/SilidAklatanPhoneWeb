import {Component} from "react";
import {Button, Card, Col, Container, Form, FormControl, FormGroup, Image, Row} from "react-bootstrap";
import BugcLogo from '../images/bugcTransparentLogo.png';
import {axios} from "../lib/axios";

class LoginPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            studentId: 'sss',
            password: '',
            errors: {}
        }
    }

    handleAuthentication = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;

        const userData= {student_id: this.state.studentId, password: this.state.password}
        console.log(userData);

        axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie").then(response => {
            console.log(response);
            console.log(userData);
            axios.post('http://127.0.0.1:8000/api/login', userData).then(res => {
                console.log(res.data)

            });
        })

        // axios.post("/api/login", data)
        //     .then((response) => {
        //         console.log(response)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })

        // axios.post('/login', {
        //     studentId: this.state.studentId,
        //     password: this.state.password
        // }).then(response => {
        //     console.log(response)
        // });
    }

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <Container className={'h-100'}>
                <Row className={'justify-content-center align-items-center'}>
                    <Col md={5}>
                        <Card style={{marginTop: '15vh'}}>
                            <Row style={{marginTop: '2vh'}}>
                                <Col>
                                </Col>
                                <Col>
                                    <Image src={BugcLogo} rounded thumbnail style={{border: '0px'}} />
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                            <p className={'text-center mb-0'}>Bicol University Gubat Campus</p>
                            <p className={'text-center mb-1'}><b>E - LIBRARY</b></p>
                            <h4 className={'text-center'}><b>Login Here</b></h4>
                            <Card.Body>
                                <Form onSubmit={this.handleAuthentication}>
                                    <FormGroup>
                                        <label>Student ID</label>
                                        <FormControl type={'text'} placeholder={'Student ID here...'} name={'studentId'} onChange={this.handleInput} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label>Password</label>
                                        <FormControl type={'password'} placeholder={'Password here...'} name={'password'} onChange={this.handleInput} />
                                    </FormGroup>
                                    <Button type={'submit'} variant={'primary'} className={'btn-block mt-5'}><b>LOGIN</b></Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default LoginPage;