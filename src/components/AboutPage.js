import { Component, Fragment } from "react";
import {Container} from "react-bootstrap";
import Footer from "./Footer";

class AboutPage extends Component{

    componentDidMount() {
        document.title = "BUGC e-Lib - About"
    }

    render() {
        return (
            <Fragment>
                <Container style={{marginTop: '3vh'}}>
                    <h3>About</h3>
                </Container>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;