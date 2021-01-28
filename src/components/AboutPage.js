import { Component, Fragment } from "react";
import {Container} from "react-bootstrap";

class AboutPage extends Component{

    componentDidMount() {
        document.title = "BUGC e-Lib - About"
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <h3>About</h3>
                </Container>
            </Fragment>
        );
    }
}

export default AboutPage;