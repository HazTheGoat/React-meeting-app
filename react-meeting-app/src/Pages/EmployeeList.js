import React from 'react';
import Employee from './../Components/Employee';

class EmployeeList extends React.Component {
    constructor(){
        super();
    }

    componentDidMount(){
        
    }

    render() {
        console.log("this.props.employees: ", this.props.employees)
        return (
            <div>
                <h2>Employee list</h2>
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