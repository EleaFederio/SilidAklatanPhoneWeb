import './App.css';
import {Component} from "react/cjs/react.production.min";
import {Fragment} from "react";
import SearchBook from "./components/SearchBook";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Header from "./partial_components/Header";
import LoginPage from "./auth/LoginPage";


class App extends Component{

    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Header></Header>
                    {/*<Home/>*/}
                    <Route path={'/'} exact component={Home}></Route>
                    <Route path={'/book/search'} component={SearchBook}></Route>
                    <Route path={'/login'} exact strict component={LoginPage}/>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;
