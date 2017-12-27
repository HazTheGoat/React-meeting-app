import React from 'react';
import Db from './../db';

class MeetingPage extends React.Component{
    constructor(){
        super();
        let meetingId = '';
        let meetingsList = [];
        let currentMeeting = {};
    }
    
    componentWillMount(){
        this.meetingId = this.props.match.params.id;
        this.meetingsList = this.props.meetings;
        this.currentMeeting = this.meetingsList.find(x => x.id == this.meetingId);

        console.log(this.currentMeeting)

    }

    render(){
        return(
            <div>
                <h1>{this.currentMeeting.title}</h1>
                <p>{ this.currentMeeting.description }</p>
            </div>
        )
    }
}

export default MeetingPage;