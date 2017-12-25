import React from 'react';
import './App.css';
import MeetingList from './Pages/MeetingList';
import EmployeeList from './Pages/EmployeeList';
import Db from './db';

class App extends React.Component {
    constructor(){
        super();
        this.initState = this.initState.bind(this);     

        let employees = [...Db.getEmployees()];
        let meetings = [...Db.getMeetings()];
        this.state = {
            employees: employees,
            meetings: meetings
        }
        this.initState();
    }

    updateEmployee(employee){

    }

    updateMeeting(meeting){
        
    }

    render() {
        return (
            <div>
                <div
                    className="demo-layout-transparent mdl-layout mdl-js-layout has-drawer is-upgraded"
                    data-upgraded="MaterialLayout">
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
                            <MeetingList meetings={ this.state.meetings } />
                            <EmployeeList employees={ this.state.employees } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;