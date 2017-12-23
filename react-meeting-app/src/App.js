import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Components/Employee';
import MeetingList from './Components/MeetingList';
import Meeting from './Components/Meeting';
import EmployeeList from './Components/EmployeeList';

class App extends Component {
    render() {
        return (
            <div>
                <div
                    className="demo-layout-transparent mdl-layout mdl-js-layout has-drawer is-upgraded"
                    data-upgraded=",MaterialLayout">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <header
                                    className="mdl-layout__header mdl-layout__header--transparent is-casting-shadow">
                                    <div className="mdl-layout__header-row">
                                        <div className="mdl-layout-spacer"></div>
                                        <nav className="mdl-navigation">
                                            <a className="mdl-navigation__link" href="">Link</a>
                                            <a className="mdl-navigation__link" href="">Link</a>
                                            <a className="mdl-navigation__link" href="">Link</a>
                                            <a className="mdl-navigation__link" href="">Link</a>
                                        </nav>
                                    </div>
                                </header>
                                <main className="mdl-layout__content"></main>
                                <div className="mdl-layout__obfuscator"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <Meeting/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;