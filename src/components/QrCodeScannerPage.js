import {Component} from "react";
import {Container} from "react-bootstrap";
import QrReader from 'react-qr-reader'

class QrCodeScannerPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            qrCode: ''
        }

        this.scanQrCode = this.scanQrCode.bind(this)
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

        const previewStyle = {
            height: 240,
            width: 320,
        }

        return(
            <Container>
                <QrReader>
                    delay={300}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                </QrReader>
                <p>{this.state.result}</p>
            </Container>
        )
    }
}

export default QrCodeScannerPage;