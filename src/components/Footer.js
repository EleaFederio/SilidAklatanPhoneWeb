import React from "react";
import {Container} from "react-bootstrap";

const FooterPage = () => {
    return (
        <footer style={{marginTop: '3vh'}}>
            <Container>

            </Container>
            <div className="footer-copyright text-center py-3" style={{backgroundColor: '#20558b', color: 'white'}}>
                <Container fluid>
                    &copy; {new Date().getFullYear()} Copyright: Bicol University Gubat Campus Library
                </Container>
            </div>
        </footer>
    );
}

export default FooterPage;