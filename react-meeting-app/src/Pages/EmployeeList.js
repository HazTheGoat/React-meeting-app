import React from 'react';
import Employee from './../Components/Employee';

class EmployeeList extends React.Component {
    render() {
        return (
            <div>
                <div className="title-container">
                    <h1>Employee list</h1>
                </div>
                <div className="row">
                    {
                        this.props.employees.map(employee => (
                            <div className="col-4" key={employee.id}>
                                <Employee updateEmployee={this.props.updateEmployee} employee={employee} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default EmployeeList;