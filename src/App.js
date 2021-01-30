import './App.css';
import {Component} from "react/cjs/react.production.min";
import SearchBook from "./components/SearchBook";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Header from "./partial_components/Header";
import LoginPage from "./auth/LoginPage";
import MyAccount from "./components/MyAccount";
import GuidelinesPage from "./components/GuidelinesPage";
import AboutPage from "./components/AboutPage";
import GuestRoute from "./lib/GuestRoute";
import AuthRoute from "./lib/AuthRoute";


class App extends Component{

    render() {
        return (
            <BrowserRouter>
                <Header />
                {/*<Home/>*/}
                <Route path={'/'} exact component={Home}></Route>
                <Route path={'/book/search'} component={SearchBook}></Route>
                {/*<Route path={'/qr_scanner'} component={QrCodeScannerPage}></Route>*/}
                <Route path={'/guidelines'} exact component={GuidelinesPage} />
                <Route path={'/about'} exact component={AboutPage} />
                <GuestRoute path={'/login'} exact strict component={LoginPage}/>
                <AuthRoute path={'/account'} exact strict component={MyAccount} />
            </BrowserRouter>
        );
    }
}

export default App;
