import {Component} from "react";
import {Container} from "react-bootstrap";
import QrReader from 'react-qr-reader'

class QrCodeScannerPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            qrCode: ''
        }
    }

    scanQrCode = data => {
        if(data){
            this.setState({
                qrCode: data
            })
        }
    }

    handleError = err => {
        console.error(err)
    }

    render() {
        return(
            <Container>
                <QrReader>
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%' }}
                </QrReader>
                <p>{this.state.result}</p>
            </Container>
        )
    }
}

export default QrCodeScannerPage;