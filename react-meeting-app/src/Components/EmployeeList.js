import React from 'react';
import Employee from './Employee';

class EmployeeList extends React.Component {
    render() {
        const fakeArr = [1, 2, 3, 4, 5];

        return (
            <div>
                <h2>Employee list</h2>
                <div className="row">
                    {fakeArr.map(employee => (
                        <div className="col-4">
                            <Employee key={employee}/>
                        </div>
                    ))
}
                </div>
            </div>

        )
    }
}

export default EmployeeList;