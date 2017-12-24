import React from 'react';
import Employee from './../Components/Employee';
import Db from './../db';

class EmployeeList extends React.Component {
    render() {
        return (
            <div>
                <h2>Employee list</h2>
                <div className="row">
                    {
                        Db.getEmployees().map(employee => (
                            <div className="col-4" key={employee.id}>
                                <Employee employee={employee} />
                            </div>
                        ))
                    }
                </div>
            </div>

        )
    }
}

export default EmployeeList;