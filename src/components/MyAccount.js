import { Component, Fragment } from "react";

class MyAccount extends Component{

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

export default MyAccount;