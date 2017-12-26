import React from 'react';

class Meeting extends React.Component {
    render() {
        return (
            <a href="#ng" className="meeting-card">
                <h3>{ this.props.meeting.title }</h3>
                <p>{ this.props.meeting.description }</p>
            </a>
        )
    }
}

export default Meeting;