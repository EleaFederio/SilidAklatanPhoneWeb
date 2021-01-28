import { Component, Fragment } from "react";
import {Container} from "react-bootstrap";

class GuidelinesPage extends Component{

    componentDidMount() {
        document.title = "BUGC e-Lib - Guidelines"
    }

    render(){
        return(
            <Fragment>
                <Container>
                    <h3>Guidelines</h3>
                </Container>
            </Fragment>
        )
    }

}

export default GuidelinesPage;