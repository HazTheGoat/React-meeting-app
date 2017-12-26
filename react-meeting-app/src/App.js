import React from 'react';
import './App.css';
import MeetingList from './Pages/MeetingList';
import EmployeeList from './Pages/EmployeeList';
import Db from './db';
import base from './base';

class App extends React.Component {
    constructor() {
        super();
        this.updateEmployee = this
            .updateEmployee
            .bind(this);
        this.updateMeeting = this
            .updateMeeting
            .bind(this);

        const setLocalStorage = Db.setLocalStorage();
        const employees = [
            ...Db
                .getEmployees()
                .employees
        ];
        const meetings = [
            ...Db
                .getMeetings()
                .meetings
        ];

        this.state = {
            employees: employees,
            meetings: meetings
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('react-meeting-app', JSON.stringify(nextState));
    }
    
    updateEmployee(employee) {
        let employeesCopy = [...this.state.employees];

        let updatedEmployees = employeesCopy.map(x => {
            if (x.id === employee.id) {
                x = employee
            }

            return x;
        })

        this.setState({employees: updatedEmployees})
    }

    updateMeeting(meeting) {
        let meetingsCopy = {
            ...this.state.meetings
        };
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
                            <MeetingList updateMeeting={this.updateMeeting} meetings={this.state.meetings}/>
                            <EmployeeList
                                updateEmployee={this.updateEmployee}
                                employees={this.state.employees}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;