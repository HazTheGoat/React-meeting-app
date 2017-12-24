import React from 'react';

class Meeting extends React.Component {
    render() {
        return (
            <div>
                <h3>{ this.props.meeting.title }</h3>
                <p>{ this.props.meeting.description }</p>
            </div>
        )
    }
}

export default Meeting;