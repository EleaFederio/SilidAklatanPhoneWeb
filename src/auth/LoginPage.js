import {Component} from "react";
import {Alert, Button, Card, Col, Container, Form, FormControl, FormGroup, Image, Row} from "react-bootstrap";
import BugcLogo from '../images/bugcTransparentLogo.png';
import {axios} from "../lib/axios";
import cookie from 'js-cookie';
import {connect} from "react-redux";


class LoginPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            studentId: 'sss',
            password: '',
            errors: ''
        }
    }

    componentDidMount() {
        document.title = "BUGC e-Lib - Login"
    }

    handleAuthentication = (e) => {
        e.preventDefault();
        // console.log('Auth')
        // this.props.history.push('/account');
        // console.log('Auth Again')
        axios.defaults.withCredentials = true;

        const userData= {student_id: this.state.studentId, password: this.state.password}
        console.log(userData);

        // Edit this when it is deploy in the server
        axios.get("/sanctum/csrf-cookie").then(response => {
            console.log(response);
            console.log(userData);
            axios.post('api/login', userData)
                .then(res => {
                    console.log(res.data)
                    cookie.set('token', res.data.token);
                    // set mapDispatchToProps->setLogin
                    this.props.setLogin(res.data.student)
                    this.props.history.push('/account');
                })
                .catch(error => {
                    this.setState({
                        studentId: '',
                        password: '',
                        errors:  error.response.data.message[0]
                    });
                    // console.log();
                });
        })
    }

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    errorAlert(error){
        return <Container>
            <Alert variant={'danger'}>{error}</Alert>
        </Container>
    }

    render() {
        return(
            <Container className={'h-100'}>
                <Row className={'justify-content-center align-items-center'}>
                    <Col md={5}>
                        <Card style={{marginTop: '8vh'}}>
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
                            {this.state.errors !== '' ? this.errorAlert(this.state.errors) : ''}
                            <Card.Body>
                                <Form onSubmit={this.handleAuthentication}>
                                    <FormGroup>
                                        <label>Student ID</label>
                                        <FormControl type={'text'} placeholder={'Student ID here...'} name={'studentId'} onChange={this.handleInput} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label>Password</label>
                                        <FormControl type={'password'} placeholder={'Password here...'} name={'password'} onChange={this.handleInput} />
                                        {/*<a href={''}>Forgot Password</a>*/}
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

// This setLogin payload is set when the user login correctly
// See the loginHandler axios call
const mapDispatchToProps = dispatch => {
    return {
        setLogin: (student) => dispatch({
            type: "SET_LOGIN",
            payload: student
        })
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);