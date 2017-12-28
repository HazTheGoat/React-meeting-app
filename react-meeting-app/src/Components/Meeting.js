import React from 'react';
import { Route, Link } from 'react-router-dom'


class Meeting extends React.Component {
    render() {
        return (
            <div>
                <Link className="employee-card" to={`/meeting/${this.props.meeting.id}`}>
                    <div className="meeting-card">
                        <h3>{ this.props.meeting.title }</h3>
                        <p>{ this.props.meeting.description }</p>
                    </div>
                </Link>

            </div>
            
        )
    }
}

export default Meeting;