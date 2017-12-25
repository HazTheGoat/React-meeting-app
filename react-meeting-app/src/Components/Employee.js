import React from 'react';

class Employee extends React.Component {
    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        console.log(this.employeeName.value);
    }

    render() {
        return (
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{this.props.employee.name}</h2>
                </div>
                <form className="mdl-card__supporting-text" onSubmit={ this.handleSubmit }>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="sample3"  defaultValue={this.props.employee.name} ref={x => this.employeeName = x} />
                        <label className="mdl-textfield__label" htmlFor="sample3">Name</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="sample4" defaultValue={this.props.employee.position} ref={x => this.employeePosition = x}/>
                        <label className="mdl-textfield__label" htmlFor="sample4">Position</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="sample5" defaultValue={ this.props.employee.rate } ref={ x => this.employeeRate = x }/>
                        <label className="mdl-textfield__label" htmlFor="sample5">Hourly rate</label>
                    </div>
                    <div className="mdl-card__actions">
                        <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                            Save employee
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Employee;