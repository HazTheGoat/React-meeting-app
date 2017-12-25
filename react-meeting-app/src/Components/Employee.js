import React from 'react';

class Employee extends React.Component {
    
    render() {
        return (
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{this.props.employee.name}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="sample3" onChange={ console.log() } value={this.props.employee.name}/>
                        <label className="mdl-textfield__label" htmlFor="sample3">Name</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="sample3" onChange={ console.log() } value={this.props.employee.position}/>
                        <label className="mdl-textfield__label" htmlFor="sample3">Position</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="sample3" onChange={ console.log() } value={this.props.employee.rate}/>
                        <label className="mdl-textfield__label" htmlFor="sample3">Hourly rate</label>
                    </div>
                </div>
                <div className="mdl-card__actions">
                    <a className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                        Save
                    </a>
                </div>
            </div>
        )
    }
}

export default Employee;