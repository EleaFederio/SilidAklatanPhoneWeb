import { Component, Fragment } from "react";
import {Button} from "react-bootstrap";
import cookie from 'js-cookie';
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

class MyAccount extends Component{

    componentDidMount() {
        document.title = "BUGC e-Lib - My Account"
    }

    handleLogout = (e) => {
        e.preventDefault();
        cookie.remove('token');
        this.props.logout();
    }

    render(){
        return(
            <Fragment>
                <div className={'container mt-4'}>
                    <div>
                        <h3>My Profile</h3>
                    </div>

                    <div className={'main-body'}>

                        <div className={'row gutter-sm'}>
                            <div className={'col-md-4 mb-3'}>
                                <div className={'card'}>
                                    <div className={'card-body'}>
                                        <div className={'d-flex flex-column align-items-center text-center'}>
                                            <img src={'https://bootdey.com/img/Content/avatar/avatar7.png'} alt={'Admin'} className={'rounded-circle'} width={'150'} />
                                            <div className={'mt-3'}>
                                                <h4>Full Name</h4>
                                                <p className="text-secondary mb-1">09351429901</p>
                                                <p className="text-muted font-size-sm">Bonifacio Street, Gubat, Sorosogon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mt-3">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                Email:
                                            </h6>
                                            <span className="text-secondary">https://bootdey.com</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                Student ID:
                                            </h6>
                                            <span className="text-secondary">bootdey</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                Course/Year:
                                            </h6>
                                            <span className="text-secondary">@bootdey</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                Year:
                                            </h6>
                                            <span className="text-secondary">bootdey</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                Facebook
                                            </h6>
                                            <span className="text-secondary">bootdey</span>
                                        </li>
                                    </ul>
                                </div>


                            </div>


                            <div className={'col-md-8'}>
                                <div className={'card mb-3'}>
                                    <div className={'card-body'}>
                                        <div className={'row'}>
                                            <div className={'col-sm-12'}>
                                                <h6 className={'mb-0'}>Full Name</h6>
                                                <Button onClick={this.handleLogout} size={'sm'} variant={'danger'}>LOGOUT</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapDispatchToPops = dispatch => {
    return{
        logout: () => dispatch({
            type: 'SET_LOGOUT'
        })
    }
}

export default connect(null, mapDispatchToPops)(MyAccount);