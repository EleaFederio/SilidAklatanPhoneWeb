import { Component, Fragment } from "react";
import {Card, Container} from "react-bootstrap";
import Footer from "./Footer";

class GuidelinesPage extends Component{

    componentDidMount() {
        document.title = "BUGC e-Lib - Guidelines"
    }

    render(){
        return(
            <>
                <Fragment>
                    <Container style={{marginTop: '3vh'}}>
                        <h3>Guidelines</h3>
                        <Card style={{marginTop: '2vh', marginBottom: '2vh'}}>
                            <Container style={{marginTop: '2vh', marginBottom: '2vh'}}>
                                <Card.Title className={'text-center'}>Library Schedule</Card.Title>
                                <Card.Text>
                                    <p className={'text-center'} style={{marginBottom: 0}}>Monday to Friday</p>
                                    <p className={'text-center'} style={{marginBottom: 0}}>8:00am - 3:30pm</p>
                                    <p className={'text-center'} style={{marginBottom: 0}}>3::30p - 5:00pm (disinfection)</p>
                                </Card.Text>
                            </Container>
                        </Card>
                        <Card style={{marginTop: '2vh', marginBottom: '2vh'}}>
                            <Container style={{marginTop: '2vh', marginBottom: '2vh'}}>
                                <Card.Title className={'text-center'}>Health Protocol</Card.Title>
                                <Card.Text>
                                    <p style={{marginBottom: 0}}>1. Observance of social and physical distancing.</p>
                                    <p style={{marginBottom: 0}}>2. Proper cough etiquette</p>
                                    <p style={{marginBottom: 0}}>3. Wash hand by using alcohol, sanitizer or soap.</p>
                                    <p style={{marginBottom: 0}}>4. Foot bath must be use</p>
                                    <p style={{marginBottom: 0}}>5. Always wear facemask or with faceshield</p>
                                </Card.Text>
                            </Container>
                        </Card>
                    </Container>
                </Fragment>
                <Footer></Footer>
            </>
        )
    }

}

export default GuidelinesPage;